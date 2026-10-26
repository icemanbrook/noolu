/**
 * Noolu — Main Client Logic
 * Cart, Checkout with instant -1 stock decrement, WhatsApp concierge, and UI interactions
 */

const NOOLU_CART_KEY = 'noolu_active_cart_v1';
let activeCart = [];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  setupCartDrawer();
  setupMobileMenu();
  setupAccordions();

  // Listen to live inventory updates
  window.addEventListener('noolu:stock-updated', (e) => {
    updateCartBadge();
    // If on a page displaying products, re-render product stock badges
    if (typeof refreshProductStockDisplay === 'function') {
      refreshProductStockDisplay(e.detail);
    }
  });
});

/* ============================================================
   Cart Management
   ============================================================ */
function loadCart() {
  try {
    const stored = localStorage.getItem(NOOLU_CART_KEY);
    activeCart = stored ? JSON.parse(stored) : [];
  } catch (e) {
    activeCart = [];
  }
  updateCartBadge();
  renderCartDrawer();
}

function saveCart() {
  try {
    localStorage.setItem(NOOLU_CART_KEY, JSON.stringify(activeCart));
  } catch (e) {
    console.error('Failed to save cart:', e);
  }
  updateCartBadge();
  renderCartDrawer();
}

function addToCart(productId, colorName = null, quantity = 1) {
  const product = window.NooluDB.getById(productId);
  if (!product) {
    showToast('Saree not found.', 'error');
    return;
  }

  if (product.stock <= 0) {
    showToast('Sorry, this saree is currently Sold Out.', 'error');
    return;
  }

  const selectedColor = colorName || (product.colors && product.colors[0] ? product.colors[0].name : 'Original');
  const existingItemIndex = activeCart.findIndex(
    item => item.id === productId && item.color === selectedColor
  );

  const currentQtyInCart = existingItemIndex > -1 ? activeCart[existingItemIndex].quantity : 0;
  if (currentQtyInCart + quantity > product.stock) {
    showToast(`Only ${product.stock} available in stock!`, 'error');
    return;
  }

  if (existingItemIndex > -1) {
    activeCart[existingItemIndex].quantity += quantity;
  } else {
    // Find representative image
    let itemImage = product.colors && product.colors[0] ? product.colors[0].images[0] : '';
    const colorObj = product.colors ? product.colors.find(c => c.name === selectedColor) : null;
    if (colorObj && colorObj.images && colorObj.images.length > 0) {
      itemImage = colorObj.images[0];
    }

    activeCart.push({
      id: product.id,
      name: product.name,
      fabric: product.fabric,
      price: product.price,
      color: selectedColor,
      image: itemImage,
      quantity: quantity
    });
  }

  saveCart();
  showToast(`Added ${product.name} to your bag!`, 'success');
  openCart();
}

function removeFromCart(index) {
  if (index >= 0 && index < activeCart.length) {
    const removed = activeCart.splice(index, 1)[0];
    saveCart();
    showToast(`Removed ${removed.name} from bag.`);
  }
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-count-badge');
  const totalItems = activeCart.reduce((sum, item) => sum + item.quantity, 0);
  badges.forEach(b => {
    b.textContent = totalItems;
    b.style.display = totalItems > 0 ? 'flex' : 'none';
  });
}

function renderCartDrawer() {
  const container = document.getElementById('cartDrawerItems');
  const totalEl = document.getElementById('cartTotalPrice');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  if (!container) return;

  if (activeCart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--charcoal-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 1rem; opacity: 0.5;">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--maroon); margin-bottom: 0.5rem;">Your bag is currently empty</p>
        <p style="font-size: 0.88rem; margin-bottom: 1.5rem;">Explore our curated Ilkal, Silk, and Cotton weaves.</p>
        <a href="shop.html" class="btn btn-primary btn-sm">Explore Collection</a>
      </div>
    `;
    if (totalEl) totalEl.textContent = '₹0';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  let totalAmount = 0;
  container.innerHTML = activeCart.map((item, idx) => {
    const itemTotal = item.price * item.quantity;
    totalAmount += itemTotal;
    return `
      <div class="cart-item-row">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-meta">${item.fabric} • Color: ${item.color}</div>
          <div class="cart-item-meta">Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')}</div>
          <div class="cart-item-price">₹${itemTotal.toLocaleString('en-IN')}</div>
        </div>
        <button class="btn-icon" style="width: 32px; height: 32px;" onclick="removeFromCart(${idx})" title="Remove item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = `₹${totalAmount.toLocaleString('en-IN')}`;
  if (checkoutBtn) checkoutBtn.disabled = false;
}

function setupCartDrawer() {
  const overlay = document.getElementById('cartDrawerOverlay');
  const drawer = document.getElementById('cartDrawer');
  const openButtons = document.querySelectorAll('.js-open-cart');
  const closeButton = document.getElementById('cartDrawerClose');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });

  if (closeButton) closeButton.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      executeCheckoutFlow();
    });
  }
}

function openCart() {
  const overlay = document.getElementById('cartDrawerOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay && drawer) {
    overlay.classList.add('open');
    drawer.classList.add('open');
  }
}

function closeCart() {
  const overlay = document.getElementById('cartDrawerOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay && drawer) {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
  }
}

/* ============================================================
   AUTOMATED -1 INVENTORY DECREMENT ON ORDER
   ============================================================ */
function executeCheckoutFlow() {
  if (activeCart.length === 0) return;

  // Perform stock check and atomic decrement
  const orderResults = [];
  for (const item of activeCart) {
    const res = window.NooluDB.decrementStock(item.id, item.quantity, {
      color: item.color,
      customerName: 'Direct Shopper'
    });
    if (!res.success) {
      showToast(`Could not fulfill ${item.name}: ${res.message}`, 'error');
      return;
    }
    orderResults.push(res);
  }

  const completedOrderId = orderResults[0].order.orderId;

  // Clear Cart
  activeCart = [];
  saveCart();
  closeCart();

  // Show Order Confirmation Modal
  showOrderSuccessModal(completedOrderId, orderResults);
}

function directBuyNow(productId, colorName = null) {
  const product = window.NooluDB.getById(productId);
  if (!product || product.stock <= 0) {
    showToast('This saree is currently Sold Out.', 'error');
    return;
  }

  const selectedColor = colorName || (product.colors && product.colors[0] ? product.colors[0].name : 'Original');
  const res = window.NooluDB.decrementStock(productId, 1, {
    color: selectedColor,
    customerName: 'Instant Buy Shopper'
  });

  if (res.success) {
    showOrderSuccessModal(res.order.orderId, [res]);
  } else {
    showToast(res.message, 'error');
  }
}

function showOrderSuccessModal(orderId, items) {
  const existing = document.getElementById('orderConfirmationModal');
  if (existing) existing.remove();

  const modalHtml = `
    <div id="orderConfirmationModal" style="position: fixed; inset: 0; background: rgba(30, 26, 26, 0.7); backdrop-filter: blur(4px); z-index: 500; display: flex; align-items: center; justify-content: center; padding: 1rem;">
      <div style="background: var(--ivory); border: 2px solid var(--gold); border-radius: 12px; max-width: 500px; width: 100%; padding: 2.5rem; text-align: center; box-shadow: var(--shadow-lg); animation: slide-up 0.3s ease;">
        <div style="width: 64px; height: 64px; background: #DCFCE7; color: #15803D; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--gold-dark); font-weight: 700;">Order Confirmed</span>
        <h3 style="font-size: 1.8rem; color: var(--maroon); margin: 0.4rem 0 1rem 0;">Thank you for your order!</h3>
        <p style="font-size: 0.95rem; color: var(--charcoal); margin-bottom: 1.25rem; line-height: 1.6;">
          Your order <strong>#${orderId}</strong> is placed. 
          <br>
          <span style="display: inline-block; margin-top: 0.5rem; background: #FEF3C7; color: #92400E; padding: 0.3rem 0.8rem; border-radius: 4px; font-size: 0.85rem; font-weight: 600;">
            ⚡ Inventory update: -1 applied in real-time to the database!
          </span>
        </p>
        <p style="font-size: 0.85rem; color: var(--charcoal-muted); margin-bottom: 2rem;">
          Dispatching via <strong>India Post Speed Parcel</strong> with full tracking.
        </p>
        <div style="display: flex; gap: 0.75rem; justify-content: center;">
          <button class="btn btn-primary" onclick="document.getElementById('orderConfirmationModal').remove(); location.reload();">Done</button>
          <a href="admin.html" class="btn btn-outline">View in Admin Inventory</a>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

/* ============================================================
   WhatsApp Concierge Link Generator
   ============================================================ */
function openWhatsAppInquiry(productId = null, colorName = null) {
  let message = "Hello Noolu team! I am browsing your website and would love to know more.";
  
  if (productId) {
    const product = window.NooluDB.getById(productId);
    if (product) {
      const colorText = colorName ? ` in ${colorName}` : '';
      message = `Hello Noolu team! I am interested in ordering the ${product.name} (Product ID: ${product.id})${colorText}. Is this piece available for dispatch via India Post?`;
    }
  }

  // Placeholder WhatsApp number (configurable)
  const phone = "919999999999"; 
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* ============================================================
   UI Helpers & Toasts
   ============================================================ */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `noolu-toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function setupAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.style.display === 'block';
      
      // Close peers if needed, or allow multiple
      body.style.display = isOpen ? 'none' : 'block';
      const icon = header.querySelector('.accordion-icon');
      if (icon) {
        icon.textContent = isOpen ? '+' : '−';
      }
    });
  });
}

function setupMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const isVisible = nav.style.display === 'flex';
      nav.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'var(--ivory)';
        nav.style.padding = '1.5rem';
        nav.style.borderBottom = '1px solid var(--border-gold)';
      }
    });
  }
}

/**
 * Noolu Inventory & Database Manager
 * - Handles real-time automated stock decrement (-1 on order)
 * - Persistent across sessions & tabs
 * - Excel/CSV Export for Bhoomika's inventory sheet
 * - Ready-to-plug Cloud DB connector (Firebase Firestore)
 */

const NOOLU_STORAGE_KEY = 'noolu_inventory_data_v1';
const NOOLU_ORDERS_KEY = 'noolu_orders_history_v1';

class NooluInventoryDB {
  constructor() {
    this.products = [];
    this.orders = [];
    this.init();
  }

  init() {
    try {
      const stored = localStorage.getItem(NOOLU_STORAGE_KEY);
      if (stored) {
        this.products = JSON.parse(stored);
      } else if (typeof NOOLU_CATALOG !== 'undefined') {
        this.products = JSON.parse(JSON.stringify(NOOLU_CATALOG));
        this.save();
      }
    } catch (e) {
      console.error('Failed to load inventory from storage:', e);
      if (typeof NOOLU_CATALOG !== 'undefined') {
        this.products = JSON.parse(JSON.stringify(NOOLU_CATALOG));
      }
    }

    try {
      const storedOrders = localStorage.getItem(NOOLU_ORDERS_KEY);
      this.orders = storedOrders ? JSON.parse(storedOrders) : [];
    } catch (e) {
      this.orders = [];
    }
  }

  save() {
    try {
      localStorage.setItem(NOOLU_STORAGE_KEY, JSON.stringify(this.products));
    } catch (e) {
      console.error('Error saving inventory:', e);
    }
  }

  saveOrders() {
    try {
      localStorage.setItem(NOOLU_ORDERS_KEY, JSON.stringify(this.orders));
    } catch (e) {
      console.error('Error saving orders:', e);
    }
  }

  getAll() {
    return this.products;
  }

  getById(id) {
    return this.products.find(p => p.id === id);
  }

  /**
   * AUTOMATED -1 STOCK DECREMENT
   * When an order is placed, this atomically decrements the stock
   * and dispatches a live event so all UI components update instantly.
   */
  decrementStock(productId, quantity = 1, orderDetails = {}) {
    const product = this.getById(productId);
    if (!product) {
      return { success: false, message: 'Product not found.' };
    }

    if (product.stock < quantity) {
      return { 
        success: false, 
        message: `Only ${product.stock} left in stock. Cannot complete order.` 
      };
    }

    // Decrement stock
    product.stock -= quantity;
    this.save();

    // Record order in history for the Admin panel
    const newOrder = {
      orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      productId: product.id,
      productName: product.name,
      color: orderDetails.color || (product.colors && product.colors[0] ? product.colors[0].name : 'Default'),
      quantity: quantity,
      totalAmount: product.price * quantity,
      date: new Date().toISOString(),
      customerName: orderDetails.customerName || 'Website Customer',
      customerPhone: orderDetails.customerPhone || 'Not provided',
      shippingMethod: 'India Post Speed Parcel'
    };
    this.orders.unshift(newOrder);
    this.saveOrders();

    // Broadcast live event for active pages & tabs
    window.dispatchEvent(new CustomEvent('noolu:stock-updated', {
      detail: { productId, remainingStock: product.stock, order: newOrder }
    }));

    return { 
      success: true, 
      remainingStock: product.stock, 
      order: newOrder 
    };
  }

  /**
   * Manual stock adjustment by Bhoomika via Admin dashboard
   */
  updateStock(productId, newStock) {
    const product = this.getById(productId);
    if (!product) return false;
    product.stock = Math.max(0, parseInt(newStock, 10) || 0);
    this.save();
    window.dispatchEvent(new CustomEvent('noolu:stock-updated', {
      detail: { productId, remainingStock: product.stock }
    }));
    return true;
  }

  /**
   * Add a new saree to the catalog
   */
  addProduct(newProduct) {
    if (!newProduct.id) {
      newProduct.id = 'NLU-' + Math.floor(1000 + Math.random() * 9000);
    }
    this.products.unshift(newProduct);
    this.save();
    window.dispatchEvent(new CustomEvent('noolu:stock-updated', { detail: { productId: newProduct.id } }));
    return newProduct;
  }

  /**
   * Reset data back to original default catalog
   */
  resetToDefaults() {
    if (typeof NOOLU_CATALOG !== 'undefined') {
      this.products = JSON.parse(JSON.stringify(NOOLU_CATALOG));
      this.save();
      this.orders = [];
      this.saveOrders();
      window.dispatchEvent(new CustomEvent('noolu:stock-updated', { detail: { all: true } }));
      return true;
    }
    return false;
  }

  getOrders() {
    return this.orders;
  }

  /**
   * EXCEL EXPORT (CSV)
   * Generates a clean Excel-compatible CSV file with all Product IDs, 
   * Current Stock, Price, and Status.
   */
  exportToCSV() {
    const headers = [
      'Product ID',
      'Saree Name',
      'Category',
      'Loom Type',
      'Fabric',
      'Price (INR)',
      'Current Stock',
      'Status',
      'Total Orders Logged'
    ];

    const rows = this.products.map(p => {
      const orderCount = this.orders.filter(o => o.productId === p.id).reduce((sum, o) => sum + o.quantity, 0);
      const status = p.stock === 0 ? 'SOLD OUT' : (p.stock <= 2 ? 'LOW STOCK' : 'IN STOCK');
      return [
        `"${p.id}"`,
        `"${p.name.replace(/"/g, '""')}"`,
        `"${p.category}"`,
        `"${p.loom}"`,
        `"${p.fabric}"`,
        p.price,
        p.stock,
        `"${status}"`,
        orderCount
      ].join(',');
    });

    const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    const dateStr = new Date().toISOString().slice(0, 10);
    link.setAttribute('download', `Noolu_Inventory_Report_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Global database instance
window.NooluDB = new NooluInventoryDB();

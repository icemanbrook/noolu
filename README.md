# NOOLU — Every Thread Tells a Story 🌾✨

> A modern, elegant digital boutique showcasing handcrafted Indian sarees, founded by Bhoomika. Featuring authentic Ilkal, fine combed cottons, and festive silks.

---

## 🌸 About NOOLU

**NOOLU** is an artisanal tribute to Indian weaving traditions — from the iconic red *Tope Teni* pallus of North Karnataka's Ilkal to lightweight everyday cottons and heirloom occasion silks.

### Key Features
* **Multi-Page Architecture**:
  * `index.html`: Hero editorial, curated category highlights, Bhoomika's story preview, and trust badges.
  * `shop.html`: Filterable catalog by category (*Ilkal, Cotton, Silk*) and loom (*Handloom, Powerloom*) with price sorting.
  * `product.html`: Comprehensive Product Detail Page (PDP) with high-res galleries, dynamic color swatches, full weave specifications, wash & care tips, and India Post delivery guidelines.
  * `story.html`: The founding journey of turning uncertainty into a creative venture, honoring master weaving clusters.
  * `contact.html`: Saree Care 101, India Post Speed Parcel policies, and direct WhatsApp concierge.
  * `admin.html`: Live Inventory & Stock Management portal with automated `-1` stock decrement on orders, stock adjustment buttons, and 1-click **Excel (CSV) Export**.
* **Automated Real-Time Inventory**:
  * Every completed order deducts `-1` directly from the database/storage.
  * Automatically updates badges to *"Only 2 Left"* or *"Sold Out"*.
* **WhatsApp Concierge Funnel**:
  * Direct 1-tap inquiries pre-formatted with the exact Saree Name, Color, and Product ID (SKU).
* **India Post Pan-India Delivery**:
  * Integrated delivery guidelines for 100% pin code coverage across India.

---

## 🚀 Local Development

Since this project is built with clean modern web standards (HTML5, CSS3, vanilla ES6+ JavaScript), it requires zero build steps or heavy dependencies.

### Run with Python:
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
├── index.html              # Home page
├── shop.html               # All collections & catalog filters
├── product.html            # Product Detail Page (PDP) with swatches & specs
├── story.html              # Our Story & founder journey
├── contact.html            # Care tips, FAQs & concierge
├── admin.html              # Live Inventory Manager & CSV export
├── data/
│   └── sarees.js           # Saree master data with official SKUs / Product IDs
├── assets/
│   ├── css/style.css       # Official brand styles (Maroon, Ivory, Gold)
│   ├── js/
│   │   ├── inventory.js    # Stock decrement logic & Excel export
│   │   └── main.js         # Cart, checkout & WhatsApp helpers
│   └── images/
│       ├── noolu-logo.jpg   # Brand logo
│       └── noolu-welcome.png# Official welcome note
└── README.md
```

---

## 📦 Deployment

The website can be deployed for **free** in under a minute on **Netlify**, **Cloudflare Pages**, or **GitHub Pages**.

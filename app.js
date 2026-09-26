/* Petallique Core Atelier State and Shopping Mechanics */

// 1. Initial State Definitions
const products = [
  {
    id: 1,
    name: 'Elysian Meadow Bouquet',
    price: 135.00,
    category: 'signature',
    badge: 'Limited Yield',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=600',
    description: 'An expansive wild prairie arrangement of soft garden roses, stems of field chamomile, clustered solidago, and dynamic sage greens.',
    meaning: 'Innocence, fresh perspectives, and deep abundance.'
  },
  {
    id: 2,
    name: 'Siren Velvet Garden',
    price: 185.00,
    category: 'signature',
    badge: 'Florist Choice',
    image: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?auto=format&fit=crop&q=80&w=600',
    description: 'A luxurious presentation of deep red velvet roses, dark calla lilies, burgundy peonies, and heavy eucalyptus clusters.',
    meaning: 'Undying love, high passion, and poetic luxury.'
  },
  {
    id: 3,
    name: 'Alabaster Whispers',
    price: 95.00,
    category: 'minimalist',
    badge: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600',
    description: 'A minimal, monochromatic focus. Crisp white hydrangeas with delicate cloud-like baby\'s breath in structured ceramic styling.',
    meaning: 'Devotion, crystal clarity, and quiet peace.'
  },
  {
    id: 4,
    name: 'Sorbet Peony Curated Basket',
    price: 165.00,
    category: 'signature',
    badge: 'Limited Yield',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600',
    description: 'Vibrant sunset peonies flanked by soft apricot ranunculus, pastel sweet peas, and fresh silver dollar eucalyptus leaves.',
    meaning: 'Good fortune, joyful beauty, and dynamic change.'
  },
  {
    id: 5,
    name: 'Gilded Pampas & Sage',
    price: 110.00,
    category: 'dried',
    badge: 'Everlasting Crop',
    image: 'https://images.unsplash.com/photo-1508784932211-422329b319fb?auto=format&fit=crop&q=80&w=600',
    description: 'An elegant preserved dried harvest. Ivory pampas plumes, sun-bleached lavender, wild sage foliage, and preserved strawflowers.',
    meaning: 'Resilience, eternal warmth, and silent depth.'
  },
  {
    id: 6,
    name: 'Quiet Lavender Mist',
    price: 85.00,
    category: 'minimalist',
    badge: 'Atelier Specimen',
    image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=600',
    description: 'Curated stems of french lavender, soft sage leaves, and white wild tulips arranged in a linen wrapping envelope.',
    meaning: 'Peace, serene balance, and natural grace.'
  },
  {
    id: 7,
    name: 'Noir Orchid Cluster',
    price: 210.00,
    category: 'minimalist',
    badge: 'Premium Selection',
    image: 'https://images.unsplash.com/photo-1507504038482-76210374c545?auto=format&fit=crop&q=80&w=600',
    description: 'An exotic editorial showcase of deep indigo-black orchids, monstera framing, and clean charcoal branches.',
    meaning: 'Prestige, rare refinement, and timeless mystery.'
  },
  {
    id: 8,
    name: 'Everlasting Terracotta Bunches',
    price: 120.00,
    category: 'dried',
    badge: 'Everlasting Crop',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600',
    description: 'A dried bouquet rich with warm clay tones: terracotta banksia, dried thistle, wheat spikelets, and sage eucalyptus.',
    meaning: 'Earthy warmth, timeless memory, and natural safety.'
  }
];

// Bouquet Builder Elements Data
const builderData = {
  wrappers: [
    { id: 'kraft', name: 'Raw Kraft Paper', price: 10.00, desc: 'Eco-friendly rustic charm', color: 'bg-[#D2B48C]' },
    { id: 'linen', name: 'Premium Natural Linen', price: 20.00, desc: 'High-end flowy editorial look', color: 'bg-[#EAE5D9]' },
    { id: 'mesh', name: 'Textured Champagne Mesh', price: 15.00, desc: 'Contemporary airy framing', color: 'bg-[#F2E3C6]' },
    { id: 'none', name: 'Bare Stem twine', price: 5.00, desc: 'Minimalist ribbon-bound structural stalk', color: 'bg-[#8FBC8F]' }
  ],
  focals: [
    { id: 'rose_velvet', name: 'Siren Velvet Rose', price: 8.50, desc: 'Deep burgundy velvet', svgColor: '#800020' },
    { id: 'peony_sorbet', name: 'Sorbet Coral Peony', price: 11.00, desc: 'Slightly open lush blossom', svgColor: '#FF6B6B' },
    { id: 'lily_alabaster', name: 'Cream Alabaster Lily', price: 9.50, desc: 'Fragrant pristine lily', svgColor: '#FDFBF7' },
    { id: 'hydrangea_cloud', name: 'Soft Hydrangea Cloud', price: 12.00, desc: 'Pastel sky-blue dome', svgColor: '#B0E0E6' }
  ],
  fillers: [
    { id: 'baby_breath', name: 'Mist Baby\'s Breath', price: 4.50, desc: 'Adds cloud-like starry framing', svgColor: '#FFFFFF' },
    { id: 'eucalyptus', name: 'Silver Dollar Eucalyptus', price: 5.00, desc: 'Silvery-green structural foliage', svgColor: '#8FBC8F' },
    { id: 'lavender_wild', name: 'French Lavender Stems', price: 6.00, desc: 'Brings dynamic fragrance & length', svgColor: '#9370DB' },
    { id: 'dusty_miller', name: 'Velvet Dusty Miller', price: 5.50, desc: 'Soft frosted felt-textured leaves', svgColor: '#D3D3D3' }
  ],
  ribbons: [
    { id: 'ribbon_rose', name: 'Satin Velvet Rose Ribbon', price: 8.00, desc: 'Plush wine ribbon', hex: '#9C4153' },
    { id: 'ribbon_gold', name: 'Champagne Silk Gold Ribbon', price: 10.00, desc: 'Light catching gold', hex: '#C29F5D' },
    { id: 'ribbon_cotton', name: 'Ivory Raw Cotton Bow', price: 6.00, desc: 'Minimal organic drape', hex: '#F5F5F0' },
    { id: 'none', name: 'No Ribbon (twine finish)', price: 0.00, desc: 'Organic simple look', hex: '' }
  ]
};

// Local Storage State Cart Container
let cart = [];

// Bouquet Builder Active Selection State
let selectedWrapper = null;
let selectedFocals = {};
let selectedFillers = {};
let selectedRibbon = null;
let builderStep = 1;

// 2. Initial Setup on Document Load
document.addEventListener('DOMContentLoaded', () => {
  // Load cart from Local Storage
  const storedCart = localStorage.getItem('petallique_cart');
  if (storedCart) {
    try {
      cart = JSON.parse(storedCart);
    } catch (e) {
      cart = [];
    }
  }
  
  updateCartBadge();
  setupUniversalEventListeners();
  
  // Check if current page is the Shop
  if (document.getElementById('shop-products-grid')) {
    renderShop(products);
    applySelectedCategoryFromURL();
    setupShopFilters();
  }
  
  // Check if current page is Bouquet Builder
  if (document.getElementById('wrap-options-container')) {
    initBouquetBuilder();
    setupBuilderEventListeners();
  }

  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Scroll header effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-sticky');
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }
  });

  // Mobile navigation trigger event wiring
  const menuTrigger = document.getElementById('mobile-menu-trigger');
  const menuClose = document.getElementById('mobile-menu-close');
  const navPanel = document.getElementById('mobile-nav-panel');

  if (menuTrigger && navPanel) {
    menuTrigger.addEventListener('click', () => {
      navPanel.classList.remove('translate-x-full');
    });
  }

  if (menuClose && navPanel) {
    menuClose.addEventListener('click', () => {
      navPanel.classList.add('translate-x-full');
    });
  }
});

// 3. Setup programmatic Event Listeners
function setupUniversalEventListeners() {
  // Cart drawer toggles
  document.querySelectorAll('.js-cart-toggle').forEach(btn => {
    btn.addEventListener('click', toggleCart);
  });

  // Cart items delegator (Handles quantity and removal dynamically)
  const cartWrapper = document.getElementById('cart-items-wrapper');
  if (cartWrapper) {
    cartWrapper.addEventListener('click', (e) => {
      const qtyBtn = e.target.closest('.js-cart-qty-btn');
      if (qtyBtn) {
        const index = parseInt(qtyBtn.getAttribute('data-index'));
        const delta = parseInt(qtyBtn.getAttribute('data-delta'));
        updateCartQuantity(index, delta);
      }
      
      const removeBtn = e.target.closest('.js-cart-remove-btn');
      if (removeBtn) {
        const index = parseInt(removeBtn.getAttribute('data-index'));
        removeCartItem(index);
      }
    });
  }

  // Checkout triggers
  const checkoutTrigger = document.getElementById('checkout-trigger-btn');
  if (checkoutTrigger) {
    checkoutTrigger.addEventListener('click', openCheckoutModal);
  }

  const checkoutClose = document.getElementById('checkout-close-btn');
  if (checkoutClose) {
    checkoutClose.addEventListener('click', closeCheckoutModal);
  }

  const checkoutOverlay = document.getElementById('checkout-modal');
  if (checkoutOverlay) {
    checkoutOverlay.addEventListener('click', (e) => {
      if (e.target === checkoutOverlay) {
        closeCheckoutModal();
      }
    });
  }

  // Quickview modal triggers on homepage
  document.querySelectorAll('.js-quickview-trigger').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-product-id'));
      openQuickView(id);
    });
  });

  // Dynamic modal button event delegation
  const qvModal = document.getElementById('quickview-modal');
  if (qvModal) {
    qvModal.addEventListener('click', (e) => {
      const closeBtn = e.target.closest('.js-qv-close');
      if (closeBtn || e.target === qvModal) {
        closeQuickView();
      }

      const addToCartModalBtn = e.target.closest('.js-modal-add-to-cart');
      if (addToCartModalBtn) {
        const id = parseInt(addToCartModalBtn.getAttribute('data-product-id'));
        addDirectToCartAndClose(id);
      }
    });
  }

  // Accordion list
  document.querySelectorAll('.js-accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-accordion-id'));
      toggleAccordion(id);
    });
  });

  // Forms
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', handleNewsletter);
  }

  const consultForm = document.getElementById('styling-consultation-form');
  if (consultForm) {
    consultForm.addEventListener('submit', submitConsultation);
  }
}

function setupShopFilters() {
  document.querySelectorAll('input[name="category-filter"]').forEach(input => {
    input.addEventListener('change', filterProducts);
  });
  
  document.querySelectorAll('input[name="price-filter"]').forEach(input => {
    input.addEventListener('change', filterProducts);
  });

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', filterProducts);
  }

  // Product list interactive clicks via event delegation inside grid
  const grid = document.getElementById('shop-products-grid');
  if (grid) {
    grid.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.js-add-to-basket');
      if (addBtn) {
        e.stopPropagation();
        const id = parseInt(addBtn.getAttribute('data-product-id'));
        addDirectToCart(id);
      }
    });
  }
}

function setupBuilderEventListeners() {
  const resetBtn = document.getElementById('reset-builder-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetBuilder);
  }

  const addCustomBtn = document.getElementById('add-custom-bouquet-btn');
  if (addCustomBtn) {
    addCustomBtn.addEventListener('click', addCustomBouquetToCart);
  }

  document.querySelectorAll('.builder-step-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const step = parseInt(tab.getAttribute('data-step'));
      setStep(step);
    });
  });

  const prevBtn = document.getElementById('prev-step-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', prevStep);
  }

  const nextBtn = document.getElementById('next-step-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', nextStep);
  }
}

// 4. Cart Drawer Visibility
function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      renderCartItems();
    }
  }
}

// 5. Shop Page Gallery Rendering and Dynamic Filtering
function renderShop(filteredProducts) {
  const grid = document.getElementById('shop-products-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <i data-lucide="search-slash" class="w-12 h-12 text-rose-muted mx-auto mb-4"></i>
        <p class="font-serif text-2xl mb-2">No blossoms found</p>
        <p class="text-rose-muted text-sm font-light">Try modifying your criteria parameters.</p>
      </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }
  
  filteredProducts.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'flower-card';
    card.innerHTML = `
      <div class="card-badge">${prod.badge}</div>
      <div class="card-img-wrapper cursor-pointer" onclick="openQuickView(${prod.id})">
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
      </div>
      <div class="p-6">
        <p class="text-xs uppercase tracking-wider text-rose-muted mb-1">${prod.category === 'dried' ? 'Everlasting Specimen' : 'Fresh Specimen'}</p>
        <h3 class="text-2xl mb-2 hover:text-rose-primary transition-colors cursor-pointer" onclick="openQuickView(${prod.id})">${prod.name}</h3>
        <div class="flex justify-between items-center mt-4 pt-4 border-t border-rose-border">
          <span class="text-rose-primary font-medium font-serif text-lg">$${prod.price.toFixed(2)}</span>
          <button data-product-id="${prod.id}" class="btn-text text-xs tracking-widest font-semibold uppercase flex items-center gap-1 js-add-to-basket">
            Add to Basket <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function filterProducts() {
  const catInput = document.querySelector('input[name="category-filter"]:checked');
  const priceInput = document.querySelector('input[name="price-filter"]:checked');
  const sortSelect = document.getElementById('sort-select');
  
  if (!catInput || !priceInput || !sortSelect) return;
  
  const catVal = catInput.value;
  const priceVal = priceInput.value;
  const sortVal = sortSelect.value;
  
  let filtered = [...products];
  
  // Apply categories
  if (catVal !== 'all') {
    filtered = filtered.filter(p => p.category === catVal);
  }
  
  // Apply pricing filters
  if (priceVal !== 'all') {
    if (priceVal === 'under-100') {
      filtered = filtered.filter(p => p.price < 100);
    } else if (priceVal === '100-150') {
      filtered = filtered.filter(p => p.price >= 100 && p.price <= 150);
    } else if (priceVal === 'over-150') {
      filtered = filtered.filter(p => p.price > 150);
    }
  }
  
  // Apply sorting
  if (sortVal === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }
  
  // Update counter text
  const counterText = document.getElementById('results-count');
  if (counterText) {
    counterText.textContent = `Showing ${filtered.length} gorgeous arrangements`;
  }
  
  renderShop(filtered);
}

// Read URL query parameters to set initial filter on Shop
function applySelectedCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    const radio = document.querySelector(`input[name="category-filter"][value="${cat}"]`);
    if (radio) {
      radio.checked = true;
      filterProducts();
    }
  }
}

// 6. Cart Management Logic
function saveCartToStorage() {
  localStorage.setItem('petallique_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const counts = document.querySelectorAll('#cart-badge-count');
  counts.forEach(badge => {
    if (count > 0) {
      badge.textContent = count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

function addDirectToCart(prodId) {
  const product = products.find(p => p.id === prodId);
  if (!product) return;
  
  const existing = cart.find(item => item.id === prodId && !item.isCustom);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      isCustom: false,
      quantity: 1
    });
  }
  
  saveCartToStorage();
  showToast(`Added "${product.name}" to your selected yield!`);
}

function updateCartQuantity(index, delta) {
  if (index >= 0 && index < cart.length) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCartToStorage();
    renderCartItems();
  }
}

function removeCartItem(index) {
  if (index >= 0 && index < cart.length) {
    const removedItemName = cart[index].name;
    cart.splice(index, 1);
    saveCartToStorage();
    renderCartItems();
    showToast(`Removed "${removedItemName}"`);
  }
}

function renderCartItems() {
  const wrapper = document.getElementById('cart-items-wrapper');
  const subtotalEl = document.getElementById('cart-subtotal');
  if (!wrapper || !subtotalEl) return;
  
  wrapper.innerHTML = '';
  
  if (cart.length === 0) {
    wrapper.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 text-center">
        <i data-lucide="flower" class="w-10 h-10 text-rose-border mb-4"></i>
        <p class="font-serif text-lg text-rose-text mb-1">The atelier basket is empty</p>
        <p class="text-xs text-rose-muted font-light max-w-[200px]">Choose a masterwork from our gallery, or design a custom creation.</p>
      </div>
    `;
    subtotalEl.textContent = '$0.00';
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }
  
  let subtotal = 0;
  
  cart.forEach((item, index) => {
    const itemCost = item.price * item.quantity;
    subtotal += itemCost;
    
    const itemCard = document.createElement('div');
    itemCard.className = 'flex items-center gap-4 py-4 border-b border-rose-border/50';
    
    // Image or default bouquet representation for custom items
    const imgHTML = item.isCustom 
      ? `<div class="w-16 h-20 bg-rose-bg border border-rose-border flex items-center justify-center"><i data-lucide="flower" class="w-6 h-6 text-rose-primary"></i></div>`
      : `<img src="${item.image}" alt="${item.name}" class="w-16 h-20 object-cover border border-rose-border">`;
      
    itemCard.innerHTML = `
      ${imgHTML}
      <div class="flex-1">
        <h3 class="text-sm font-medium text-rose-text line-clamp-1">${item.name}</h3>
        <p class="text-xs text-rose-primary font-serif mt-1">$${item.price.toFixed(2)} each</p>
        ${item.isCustom ? `<p class="text-[10px] text-rose-accent uppercase tracking-wider mt-1">Bespoke Recipe</p>` : ''}
        <div class="flex items-center gap-2 mt-3">
          <div class="qty-control">
            <button class="qty-btn js-cart-qty-btn" data-index="${index}" data-delta="-1" aria-label="Reduce quantity"><i data-lucide="minus" class="w-3 h-3"></i></button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn js-cart-qty-btn" data-index="${index}" data-delta="1" aria-label="Increase quantity"><i data-lucide="plus" class="w-3 h-3"></i></button>
          </div>
          <button class="text-xs text-rose-muted hover:text-rose-primary ml-2 uppercase tracking-wider js-cart-remove-btn" data-index="${index}">Remove</button>
        </div>
      </div>
      <div class="text-right">
        <span class="text-sm font-serif font-medium text-rose-text">$${itemCost.toFixed(2)}</span>
      </div>
    `;
    
    wrapper.appendChild(itemCard);
  });
  
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// 7. Quick View Product Modal Logic
function openQuickView(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  
  const modal = document.getElementById('quickview-modal');
  const modalBody = document.getElementById('quickview-modal-body');
  
  if (!modal || !modalBody) return;
  
  modalBody.innerHTML = `
    <div class="p-6 flex items-center justify-center bg-rose-bg border-r border-rose-border">
      <img src="${product.image}" alt="${product.name}" class="max-h-[450px] object-cover w-full shadow-md">
    </div>
    <div class="p-8 flex flex-col justify-between">
      <div>
        <span class="text-xs uppercase tracking-widest text-rose-accent font-semibold block mb-2">Specimen Collection</span>
        <h2 class="text-4xl font-serif text-rose-text mb-2">${product.name}</h2>
        <p class="text-2xl font-serif text-rose-primary mb-6">$${product.price.toFixed(2)}</p>
        <p class="text-rose-muted text-sm font-light mb-6 leading-relaxed">${product.description}</p>
        
        <div class="border-t border-rose-border pt-4 mt-4">
          <p class="text-xs uppercase tracking-wider text-rose-accent mb-1 font-semibold">Symbolic Meaning</p>
          <p class="text-xs text-rose-muted italic font-light">"${product.meaning}"</p>
        </div>
      </div>
      
      <div class="mt-8">
        <button data-product-id="${product.id}" class="w-full btn-primary justify-center js-modal-add-to-cart">
          Add to Selected Basket <i data-lucide="shopping-bag" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add('open');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) {
    modal.classList.remove('open');
  }
}

function addDirectToCartAndClose(id) {
  addDirectToCart(id);
  closeQuickView();
}

// 8. Toast Alerts Notification System
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="check" class="w-4 h-4 text-rose-primary"></i>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  
  setTimeout(() => {
    toast.style.animation = 'none';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// 9. Checkout Modal Controls
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your basket is currently empty.");
    return;
  }
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('open');
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('open');
    // Clear cart upon mock purchase confirmation
    cart = [];
    saveCartToStorage();
    // Hide drawer as well
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    }
    // Trigger content rerender
    renderCartItems();
  }
}

// 10. Premium Custom Bouquet Builder Logic
function initBouquetBuilder() {
  renderBuilderSteps();
  updateBuilderSummary();
}

function renderBuilderSteps() {
  // Wrap Base Step Render
  const wrapContainer = document.getElementById('wrap-options-container');
  if (wrapContainer) {
    wrapContainer.innerHTML = '';
    builderData.wrappers.forEach(wrap => {
      const card = document.createElement('div');
      card.className = `builder-option-card p-6 flex items-center justify-between ${selectedWrapper && selectedWrapper.id === wrap.id ? 'selected' : ''}`;
      card.addEventListener('click', () => selectWrapper(wrap));
      card.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 ${wrap.color} border border-rose-border"></div>
          <div>
            <h4 class="font-serif text-lg">${wrap.name}</h4>
            <p class="text-xs text-rose-muted">${wrap.desc}</p>
          </div>
        </div>
        <span class="font-serif text-rose-primary">+$${wrap.price.toFixed(2)}</span>
      `;
      wrapContainer.appendChild(card);
    });
  }
  
  // Focal Flowers Render
  const focalContainer = document.getElementById('focal-options-container');
  if (focalContainer) {
    focalContainer.innerHTML = '';
    builderData.focals.forEach(focal => {
      const count = selectedFocals[focal.id] || 0;
      const card = document.createElement('div');
      card.className = `builder-option-card p-6 flex flex-col justify-between ${count > 0 ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
          <div>
            <h4 class="font-serif text-lg">${focal.name}</h4>
            <p class="text-xs text-rose-muted mb-1">${focal.desc}</p>
            <span class="text-xs font-serif text-rose-primary">$${focal.price.toFixed(2)} / stem</span>
          </div>
          <div class="w-6 h-6 rounded-full border border-rose-border" style="background-color: ${focal.svgColor}"></div>
        </div>
        <div class="flex justify-between items-center pt-2 border-t border-rose-border/40">
          <span class="text-xs text-rose-muted">Stems Added: <strong>${count}</strong></span>
          <div class="qty-control">
            <button class="qty-btn js-focal-qty-btn" data-id="${focal.id}" data-delta="-1"><i data-lucide="minus" class="w-3 h-3"></i></button>
            <span class="qty-val">${count}</span>
            <button class="qty-btn js-focal-qty-btn" data-id="${focal.id}" data-delta="1"><i data-lucide="plus" class="w-3 h-3"></i></button>
          </div>
        </div>
      `;
      focalContainer.appendChild(card);
    });
    
    // Bind events to dynamically created buttons in focal flowers step
    focalContainer.querySelectorAll('.js-focal-qty-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const delta = parseInt(btn.getAttribute('data-delta'));
        updateBuilderFocal(id, delta);
      });
    });
  }
  
  // Fillers & Accents Render
  const fillerContainer = document.getElementById('filler-options-container');
  if (fillerContainer) {
    fillerContainer.innerHTML = '';
    builderData.fillers.forEach(filler => {
      const count = selectedFillers[filler.id] || 0;
      const card = document.createElement('div');
      card.className = `builder-option-card p-6 flex flex-col justify-between ${count > 0 ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
          <div>
            <h4 class="font-serif text-lg">${filler.name}</h4>
            <p class="text-xs text-rose-muted mb-1">${filler.desc}</p>
            <span class="text-xs font-serif text-rose-primary">$${filler.price.toFixed(2)} / stem</span>
          </div>
          <div class="w-6 h-6 rounded-full border border-rose-border" style="background-color: ${filler.svgColor}"></div>
        </div>
        <div class="flex justify-between items-center pt-2 border-t border-rose-border/40">
          <span class="text-xs text-rose-muted">Stems Added: <strong>${count}</strong></span>
          <div class="qty-control">
            <button class="qty-btn js-filler-qty-btn" data-id="${filler.id}" data-delta="-1"><i data-lucide="minus" class="w-3 h-3"></i></button>
            <span class="qty-val">${count}</span>
            <button class="qty-btn js-filler-qty-btn" data-id="${filler.id}" data-delta="1"><i data-lucide="plus" class="w-3 h-3"></i></button>
          </div>
        </div>
      `;
      fillerContainer.appendChild(card);
    });

    // Bind events to dynamically created buttons in filler step
    fillerContainer.querySelectorAll('.js-filler-qty-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const delta = parseInt(btn.getAttribute('data-delta'));
        updateBuilderFiller(id, delta);
      });
    });
  }

  // Ribbons Step Render
  const ribbonContainer = document.getElementById('ribbon-options-container');
  if (ribbonContainer) {
    ribbonContainer.innerHTML = '';
    builderData.ribbons.forEach(ribbon => {
      const card = document.createElement('div');
      card.className = `builder-option-card p-6 flex items-center justify-between ${selectedRibbon && selectedRibbon.id === ribbon.id ? 'selected' : ''}`;
      card.addEventListener('click', () => selectRibbon(ribbon));
      card.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 border border-rose-border flex items-center justify-center" style="background-color: ${ribbon.hex || 'transparent'}">
            ${!ribbon.hex ? '<i data-lucide="slash" class="w-4 h-4 text-rose-muted"></i>' : ''}
          </div>
          <div>
            <h4 class="font-serif text-lg">${ribbon.name}</h4>
            <p class="text-xs text-rose-muted">${ribbon.desc}</p>
          </div>
        </div>
        <span class="font-serif text-rose-primary">+$${ribbon.price.toFixed(2)}</span>
      `;
      ribbonContainer.appendChild(card);
    });
  }
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function selectWrapper(wrap) {
  selectedWrapper = wrap;
  renderBuilderSteps();
  updateBuilderSummary();
  
  // SVG container style response
  const svgWrap = document.getElementById('svg-wrapper');
  const wrapTag = document.getElementById('canvas-wrapper-tag');
  if (svgWrap && wrapTag) {
    svgWrap.className = `absolute bottom-4 w-32 h-44 border border-rose-primary/30 rounded-b-full z-10 flex items-center justify-center transition-all duration-300 ${wrap.color}`;
    wrapTag.textContent = wrap.name;
  }
}

function selectRibbon(ribbon) {
  selectedRibbon = ribbon;
  renderBuilderSteps();
  updateBuilderSummary();
  
  // Ribbon visible response representation
  const ribbonEl = document.getElementById('svg-ribbon');
  if (ribbonEl) {
    if (ribbon.hex) {
      ribbonEl.style.color = ribbon.hex;
      ribbonEl.classList.remove('opacity-20');
      ribbonEl.classList.add('opacity-100');
    } else {
      ribbonEl.classList.remove('opacity-100');
      ribbonEl.classList.add('opacity-20');
      ribbonEl.style.color = '';
    }
  }
}

function updateBuilderFocal(focalId, delta) {
  const current = selectedFocals[focalId] || 0;
  const updated = Math.max(0, current + delta);
  
  if (updated === 0) {
    delete selectedFocals[focalId];
  } else {
    selectedFocals[focalId] = updated;
  }
  
  renderBuilderSteps();
  updateBuilderSummary();
  redrawFlowerCluster();
}

// Trigger re-binding on dynamic updates
function updateBuilderFiller(fillerId, delta) {
  const current = selectedFillers[fillerId] || 0;
  const updated = Math.max(0, current + delta);
  
  if (updated === 0) {
    delete selectedFillers[fillerId];
  } else {
    selectedFillers[fillerId] = updated;
  }
  
  renderBuilderSteps();
  updateBuilderSummary();
  redrawFlowerCluster();
}

function redrawFlowerCluster() {
  const cluster = document.getElementById('svg-flowers-cluster');
  if (!cluster) return;
  
  cluster.innerHTML = '';
  
  // Render a tiny visual circle for each added stem to update canvas dynamically
  Object.entries(selectedFocals).forEach(([id, count]) => {
    const focalInfo = builderData.focals.find(f => f.id === id);
    if (!focalInfo) return;
    for (let i = 0; i < count; i++) {
      const stemDot = document.createElement('div');
      stemDot.className = 'w-6 h-6 rounded-full shadow-sm flex items-center justify-center animate-[toastIn_0.3s_ease-out]';
      stemDot.style.backgroundColor = focalInfo.svgColor;
      stemDot.innerHTML = '<i data-lucide="flower" class="w-3 h-3 text-white/40"></i>';
      cluster.appendChild(stemDot);
    }
  });
  
  Object.entries(selectedFillers).forEach(([id, count]) => {
    const fillerInfo = builderData.fillers.find(f => f.id === id);
    if (!fillerInfo) return;
    for (let i = 0; i < count; i++) {
      const stemDot = document.createElement('div');
      stemDot.className = 'w-4 h-4 rounded-full shadow-sm flex items-center justify-center opacity-80';
      stemDot.style.backgroundColor = fillerInfo.svgColor;
      cluster.appendChild(stemDot);
    }
  });
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function updateBuilderSummary() {
  const totalCostEl = document.getElementById('recipe-price');
  const countSummaryEl = document.getElementById('recipe-count-summary');
  const purchaseBtn = document.getElementById('add-custom-bouquet-btn');
  const canvasSummary = document.getElementById('preview-summary-text');
  
  if (!totalCostEl || !countSummaryEl || !purchaseBtn) return;
  
  let wrapCost = selectedWrapper ? selectedWrapper.price : 0;
  let ribbonCost = selectedRibbon ? selectedRibbon.price : 0;
  let focalCost = 0;
  let focalCount = 0;
  
  Object.entries(selectedFocals).forEach(([id, count]) => {
    const focal = builderData.focals.find(f => f.id === id);
    if (focal) {
      focalCost += focal.price * count;
      focalCount += count;
    }
  });
  
  let fillerCost = 0;
  let fillerCount = 0;
  
  Object.entries(selectedFillers).forEach(([id, count]) => {
    const filler = builderData.fillers.find(f => f.id === id);
    if (filler) {
      fillerCost += filler.price * count;
      fillerCount += count;
    }
  });
  
  const grandTotal = wrapCost + ribbonCost + focalCost + fillerCost;
  totalCostEl.textContent = `$${grandTotal.toFixed(2)}`;
  
  const totalStems = focalCount + fillerCount;
  countSummaryEl.textContent = `${selectedWrapper ? '1 wrap' : '0 wrap'}, ${totalStems} stem${totalStems === 1 ? '' : 's'}`;
  
  // Enable button only when wrapper and at least 3 stems of any items are loaded
  if (selectedWrapper && totalStems >= 3) {
    purchaseBtn.removeAttribute('disabled');
    canvasSummary.innerHTML = `Your couture design is complete! <strong>${selectedWrapper.name}</strong>, with <strong>${focalCount} focal stems</strong> and <strong>${fillerCount} accents</strong>. Ready to cut.`;
  } else {
    purchaseBtn.setAttribute('disabled', 'true');
    if (!selectedWrapper) {
      canvasSummary.textContent = 'Please choose your wrapping base style first.';
    } else {
      canvasSummary.textContent = `A certified arrangement requires at least 3 floral stems. Add ${3 - totalStems} more.`;
    }
  }
}

function setStep(step) {
  builderStep = step;
  
  // Manage visible tab styles
  for (let i = 1; i <= 4; i++) {
    const tab = document.getElementById(`tab-step-${i}`);
    const panel = document.getElementById(`panel-step-${i}`);
    if (tab && panel) {
      if (i === step) {
        tab.classList.add('active');
        panel.classList.remove('hidden');
      } else {
        tab.classList.remove('active');
        panel.classList.add('hidden');
      }
    }
  }
  
  // Enable/Disable step pagination controls
  const prevBtn = document.getElementById('prev-step-btn');
  const nextBtn = document.getElementById('next-step-btn');
  if (prevBtn && nextBtn) {
    if (step === 1) {
      prevBtn.setAttribute('disabled', 'true');
    } else {
      prevBtn.removeAttribute('disabled');
    }
    
    if (step === 4) {
      nextBtn.innerHTML = 'Review Canvas <i data-lucide="chevron-right" class="w-4 h-4"></i>';
    } else {
      nextBtn.innerHTML = 'Next Step <i data-lucide="chevron-right" class="w-4 h-4"></i>';
    }
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function nextStep() {
  if (builderStep < 4) {
    setStep(builderStep + 1);
  } else {
    // Highlight the canvas on mobile or final review
    showToast("Review complete! Tap 'Add Design to Basket' to secure your bouquet.");
  }
}

// Handle Step Back Navigation
function prevStep() {
  if (builderStep > 1) {
    setStep(builderStep - 1);
  }
}

function resetBuilder() {
  selectedWrapper = null;
  selectedFocals = {};
  selectedFillers = {};
  selectedRibbon = null;
  builderStep = 1;
  
  // Reset visual canvas
  const svgWrap = document.getElementById('svg-wrapper');
  const wrapTag = document.getElementById('canvas-wrapper-tag');
  const ribbonEl = document.getElementById('svg-ribbon');
  const cluster = document.getElementById('svg-flowers-cluster');
  
  if (svgWrap) svgWrap.className = 'absolute bottom-4 w-32 h-44 border border-rose-border/40 bg-rose-bg/60 rounded-b-full z-10 flex items-center justify-center transition-all duration-300';
  if (wrapTag) wrapTag.textContent = 'Select Wrapping';
  if (ribbonEl) {
    ribbonEl.classList.remove('opacity-100');
    ribbonEl.classList.add('opacity-20');
    ribbonEl.style.color = '';
  }
  if (cluster) cluster.innerHTML = '';
  
  setStep(1);
  renderBuilderSteps();
  updateBuilderSummary();
  showToast("Builder Selection Reset");
}

function addCustomBouquetToCart() {
  if (!selectedWrapper) return;
  
  let wrapCost = selectedWrapper.price;
  let ribbonCost = selectedRibbon ? selectedRibbon.price : 0;
  let totalCost = wrapCost + ribbonCost;
  let recipeStems = [];
  
  Object.entries(selectedFocals).forEach(([id, count]) => {
    const focal = builderData.focals.find(f => f.id === id);
    if (focal) {
      totalCost += focal.price * count;
      recipeStems.push(`${count}x ${focal.name}`);
    }
  });
  
  Object.entries(selectedFillers).forEach(([id, count]) => {
    const filler = builderData.fillers.find(f => f.id === id);
    if (filler) {
      totalCost += filler.price * count;
      recipeStems.push(`${count}x ${filler.name}`);
    }
  });
  
  const bouquetName = `Bespoke Curation (${selectedWrapper.name})`;
  
  cart.push({
    id: Date.now(), // Generate custom id block
    name: bouquetName,
    price: totalCost,
    isCustom: true,
    quantity: 1,
    recipe: recipeStems.join(', ') + (selectedRibbon ? `, ${selectedRibbon.name}` : '')
  });
  
  saveCartToStorage();
  showToast(`"${bouquetName}" added to selected yield!`);
  
  // Automatically open shopping cart to reveal creation
  setTimeout(() => {
    toggleCart();
  }, 500);
}

// 11. General Page Interactions
function toggleAccordion(id) {
  const body = document.getElementById(`acc-body-${id}`);
  const icon = document.getElementById(`acc-icon-${id}`);
  if (body && icon) {
    const isOpen = !body.classList.contains('hidden');
    
    // Hide all accordions first
    for (let i = 1; i <= 3; i++) {
      const b = document.getElementById(`acc-body-${i}`);
      const ic = document.getElementById(`acc-icon-${i}`);
      if (b && ic) {
        b.classList.add('hidden');
        ic.classList.remove('rotate-180');
      }
    }
    
    // Open selected accordion if it was closed
    if (!isOpen) {
      body.classList.remove('hidden');
      icon.classList.add('rotate-180');
    }
  }
}

function submitConsultation(event) {
  event.preventDefault();
  const form = document.getElementById('styling-consultation-form');
  if (form) {
    form.innerHTML = `
      <div class="text-center py-8 animate-[toastIn_0.3s_cubic-bezier(0.16,1,0.3,1)]">
        <div class="w-12 h-12 bg-rose-bg border border-rose-border rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="send" class="w-5 h-5 text-rose-accent"></i>
        </div>
        <h3 class="text-2xl font-serif mb-2">Commission Request Filed</h3>
        <p class="text-rose-muted text-sm font-light max-w-md mx-auto leading-relaxed">
          Thank you, Faizan. Your styling details have been sent straight to our master botanist. We will reach out within 24 hours to schedule your virtual alignment call.
        </p>
      </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    showToast("Bespoke Consultation Filed!");
  }
}

function handleNewsletter(event) {
  event.preventDefault();
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.innerHTML = `
      <div class="text-rose-accent font-serif tracking-wide py-3">
        Thank you, Faizan. You\'re now registered to receive seasonal private yields.
      </div>
    `;
    showToast("Subscribed to Private Yields!");
  }
}

/* =========================================================
   BAZAR DEL MUNDO — App JS
   ========================================================= */

'use strict';

/* ── Data ── */
const CATEGORIES = [
  { id: 'artesanias', name: 'Artesanías',  icon: '🏺', color: '#f0c4b0' },
  { id: 'especias',   name: 'Especias',    icon: '🌶️', color: '#fce8c3' },
  { id: 'joyeria',    name: 'Joyería',     icon: '💎', color: '#d4e8f0' },
  { id: 'textiles',   name: 'Textiles',    icon: '🧣', color: '#e8d4f0' },
  { id: 'ceramica',   name: 'Cerámica',    icon: '🫙', color: '#d4f0da' },
  { id: 'decoracion', name: 'Decoración',  icon: '🪔', color: '#f0f0d4' },
];

const PRODUCTS = [
  // Artesanías
  {
    id: 1, category: 'artesanias',
    name: 'Jarrón de barro talavera',
    origin: 'México', emoji: '🏺',
    desc: 'Pieza artesanal pintada a mano con técnica talavera poblana. Cada pieza es única.',
    price: 38.00, originalPrice: 52.00,
    rating: 4.8, reviews: 124, badge: 'Oferta', badgeType: '',
    bgColor: '#fdf0e8',
  },
  {
    id: 2, category: 'artesanias',
    name: 'Máscara de madera andina',
    origin: 'Perú', emoji: '🎭',
    desc: 'Tallada en cedro por artesanos del altiplano. Perfecta como pieza decorativa.',
    price: 45.50, originalPrice: null,
    rating: 4.7, reviews: 88, badge: null, badgeType: '',
    bgColor: '#f8f0e0',
  },
  {
    id: 3, category: 'artesanias',
    name: 'Canasta de bambú tejida',
    origin: 'Vietnam', emoji: '🧺',
    desc: 'Tejida artesanalmente en Hội An. Ideal para decoración o uso cotidiano.',
    price: 24.00, originalPrice: null,
    rating: 4.6, reviews: 67, badge: null, badgeType: '',
    bgColor: '#f0f8e8',
  },
  {
    id: 4, category: 'artesanias',
    name: 'Matrioshka pintada a mano',
    origin: 'Rusia', emoji: '🪆',
    desc: 'Set de 5 muñecas rusas con diseño floral tradicional. Regalo especial.',
    price: 32.00, originalPrice: null,
    rating: 4.9, reviews: 210, badge: 'Favorito', badgeType: 'gold',
    bgColor: '#f8e8e8',
  },
  {
    id: 5, category: 'artesanias',
    name: 'Tapiz beduino bordado',
    origin: 'Marruecos', emoji: '🪡',
    desc: 'Tapiz de lana con patrones geométricos bereberes. Tamaño 60x90 cm.',
    price: 58.00, originalPrice: 75.00,
    rating: 4.8, reviews: 55, badge: 'Oferta', badgeType: '',
    bgColor: '#f0e8d4',
  },

  // Especias
  {
    id: 6, category: 'especias',
    name: 'Set de especias de Oriente',
    origin: 'Turquía', emoji: '🌶️',
    desc: 'Colección de 8 especias premium: zaatar, sumac, baharat, comino, cardamomo y más.',
    price: 28.00, originalPrice: null,
    rating: 4.9, reviews: 345, badge: 'Más vendido', badgeType: 'gold',
    bgColor: '#fff0e0',
  },
  {
    id: 7, category: 'especias',
    name: 'Azafrán de La Mancha',
    origin: 'España', emoji: '🌸',
    desc: 'Azafrán DO La Mancha, el más preciado del mundo. Estuche de 1g.',
    price: 18.50, originalPrice: null,
    rating: 4.8, reviews: 189, badge: null, badgeType: '',
    bgColor: '#fff8e0',
  },
  {
    id: 8, category: 'especias',
    name: 'Vainilla de Madagascar',
    origin: 'Madagascar', emoji: '🫙',
    desc: '10 vainas de vainilla tipo Bourbon, aromáticas y carnosas. Sin aditivos.',
    price: 22.00, originalPrice: 29.00,
    rating: 4.7, reviews: 124, badge: 'Oferta', badgeType: '',
    bgColor: '#f5f0e8',
  },
  {
    id: 9, category: 'especias',
    name: 'Té de jazmín chino',
    origin: 'China', emoji: '🍵',
    desc: 'Té verde con flores de jazmín secas. 100g. Cosecha de primavera 2025.',
    price: 15.00, originalPrice: null,
    rating: 4.6, reviews: 98, badge: null, badgeType: '',
    bgColor: '#e8f5e8',
  },

  // Joyería
  {
    id: 10, category: 'joyeria',
    name: 'Collar de turquesa navajo',
    origin: 'EE.UU.', emoji: '📿',
    desc: 'Collar de plata 925 con turquesa natural auténtica, estilo nativo americano.',
    price: 75.00, originalPrice: null,
    rating: 4.9, reviews: 87, badge: 'Nuevo', badgeType: '',
    bgColor: '#e8f0f8',
  },
  {
    id: 11, category: 'joyeria',
    name: 'Pulsera de plata tibetana',
    origin: 'Tibet', emoji: '💍',
    desc: 'Pulsera de plata envejecida con medallón de mantra Om. Ajustable.',
    price: 42.00, originalPrice: 55.00,
    rating: 4.7, reviews: 143, badge: 'Oferta', badgeType: '',
    bgColor: '#f0e8f8',
  },
  {
    id: 12, category: 'joyeria',
    name: 'Aretes de amber báltico',
    origin: 'Polonia', emoji: '✨',
    desc: 'Aretes de ámbar natural del Mar Báltico engarzados en plata. Color miel.',
    price: 35.00, originalPrice: null,
    rating: 4.8, reviews: 60, badge: null, badgeType: '',
    bgColor: '#fff8e0',
  },

  // Textiles
  {
    id: 13, category: 'textiles',
    name: 'Pashmina de cachemira',
    origin: 'India', emoji: '🧣',
    desc: 'Pashmina 100% cachemira. Suave, ligera y cálida. 70x200 cm. Varios colores.',
    price: 62.00, originalPrice: 85.00,
    rating: 4.9, reviews: 278, badge: 'Más vendido', badgeType: 'gold',
    bgColor: '#f8e8f0',
  },
  {
    id: 14, category: 'textiles',
    name: 'Kimono de seda bordado',
    origin: 'Japón', emoji: '👘',
    desc: 'Kimono tradicional de seda con bordado de grullas. Talla única ajustable.',
    price: 95.00, originalPrice: null,
    rating: 4.8, reviews: 45, badge: 'Premium', badgeType: 'gold',
    bgColor: '#e8f0f8',
  },
  {
    id: 15, category: 'textiles',
    name: 'Manta de lana alpaca',
    origin: 'Bolivia', emoji: '🛏️',
    desc: 'Manta tejida con lana de alpaca baby. Suavísima, hipoalergénica. 130x180 cm.',
    price: 55.00, originalPrice: null,
    rating: 4.7, reviews: 112, badge: null, badgeType: '',
    bgColor: '#f0f8f0',
  },

  // Cerámica
  {
    id: 16, category: 'ceramica',
    name: 'Tazas de cerámica árabe',
    origin: 'Túnez', emoji: '🫖',
    desc: 'Set de 4 tazas pintadas a mano con motivos geométricos. Para té o café.',
    price: 33.00, originalPrice: 44.00,
    rating: 4.8, reviews: 196, badge: 'Oferta', badgeType: '',
    bgColor: '#e8f8f0',
  },
  {
    id: 17, category: 'ceramica',
    name: 'Cuenco de celadon coreano',
    origin: 'Corea del Sur', emoji: '🍵',
    desc: 'Cuenco de cerámica celadon con esmalte jade. Apto para lavavajillas.',
    price: 28.00, originalPrice: null,
    rating: 4.6, reviews: 74, badge: null, badgeType: '',
    bgColor: '#e0f5f0',
  },
  {
    id: 18, category: 'ceramica',
    name: 'Plato hondo de barro negro',
    origin: 'Oaxaca, México', emoji: '🏺',
    desc: 'Barro negro oaxaqueño pulido a piedra. Artesanía de San Bartolo Coyotepec.',
    price: 30.00, originalPrice: null,
    rating: 4.9, reviews: 88, badge: 'Nuevo', badgeType: '',
    bgColor: '#f0e8d4',
  },

  // Decoración
  {
    id: 19, category: 'decoracion',
    name: 'Lámpara de sal del Himalaya',
    origin: 'Pakistan', emoji: '🪔',
    desc: 'Lámpara de cristal de sal rosa natural. Efecto ambientador y decorativo.',
    price: 24.00, originalPrice: null,
    rating: 4.7, reviews: 320, badge: 'Más vendido', badgeType: 'gold',
    bgColor: '#fff0e8',
  },
  {
    id: 20, category: 'decoracion',
    name: 'Farolillo marroquí de metal',
    origin: 'Marruecos', emoji: '🏮',
    desc: 'Farolillo calado hecho a mano en cobre y latón. Para vela o LED.',
    price: 38.00, originalPrice: 50.00,
    rating: 4.8, reviews: 159, badge: 'Oferta', badgeType: '',
    bgColor: '#fff8e0',
  },
  {
    id: 21, category: 'decoracion',
    name: 'Dreamcatcher apache',
    origin: 'EE.UU.', emoji: '🕸️',
    desc: 'Atrapasueños tejido a mano con plumas naturales y cuentas de madera. Ø 25 cm.',
    price: 19.50, originalPrice: null,
    rating: 4.6, reviews: 88, badge: null, badgeType: '',
    bgColor: '#f0e8f8',
  },
  {
    id: 22, category: 'decoracion',
    name: 'Incienso japonés Nippon Kodo',
    origin: 'Japón', emoji: '🕯️',
    desc: 'Caja de 200 varitas de incienso. Aroma floral sutil. Marca clásica japonesa.',
    price: 14.00, originalPrice: null,
    rating: 4.9, reviews: 412, badge: 'Favorito', badgeType: 'gold',
    bgColor: '#f0f8e0',
  },
];

/* ── State ── */
let cart      = JSON.parse(localStorage.getItem('bazarCart') || '[]');
let wishlist  = JSON.parse(localStorage.getItem('bazarWishlist') || '[]');
let activeFilter = 'all';
let searchQuery  = '';
let sortOrder    = 'default';
let modalQty     = 1;
let currentModalProduct = null;

/* ── Helpers ── */
const $ = id => document.getElementById(id);

function saveCart() {
  localStorage.setItem('bazarCart', JSON.stringify(cart));
}

function formatPrice(n) {
  return '$' + n.toFixed(2);
}

function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating - full >= .5;
  let html = '';
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '½';
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) html += '☆';
  return html;
}

function showToast(msg, type = '') {
  const t = $('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.className = 'toast'; }, 3000);
}

/* ── Render Categories ── */
function renderCategories() {
  const grid = $('categoriesGrid');
  const counts = {};
  PRODUCTS.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });

  grid.innerHTML = CATEGORIES.map(c => `
    <div class="category-card ${activeFilter === c.id ? 'active' : ''}"
         onclick="setFilter('${c.id}')" style="background:${c.color}22">
      <div class="category-icon">${c.icon}</div>
      <div class="category-name">${c.name}</div>
      <div class="category-count">${counts[c.id] || 0} productos</div>
    </div>
  `).join('');
}

/* ── Render Filter Tabs ── */
function renderFilterTabs() {
  const tabs = $('filterTabs');
  const allBtn = `<button class="filter-tab ${activeFilter === 'all' ? 'active' : ''}"
                          data-filter="all" onclick="setFilter('all')">Todos</button>`;
  const catBtns = CATEGORIES.map(c => `
    <button class="filter-tab ${activeFilter === c.id ? 'active' : ''}"
            data-filter="${c.id}" onclick="setFilter('${c.id}')">${c.icon} ${c.name}</button>
  `).join('');
  tabs.innerHTML = allBtn + catBtns;
}

/* ── Filter / Sort products ── */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (activeFilter !== 'all') {
    list = list.filter(p => p.category === activeFilter);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      CATEGORIES.find(c => c.id === p.category)?.name.toLowerCase().includes(q)
    );
  }

  if (sortOrder === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if (sortOrder === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (sortOrder === 'name')       list.sort((a,b) => a.name.localeCompare(b.name, 'es'));
  if (sortOrder === 'rating')     list.sort((a,b) => b.rating - a.rating);

  return list;
}

/* ── Render Products ── */
function renderProducts() {
  const list  = getFilteredProducts();
  const grid  = $('productsGrid');
  const empty = $('emptyState');
  const count = $('resultsCount');

  count.textContent = list.length
    ? `Mostrando ${list.length} producto${list.length !== 1 ? 's' : ''}`
    : '';

  if (!list.length) {
    grid.innerHTML  = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = list.map(p => {
    const inWishlist = wishlist.includes(p.id);
    const discount   = p.originalPrice
      ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

    return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="product-image" style="background:${p.bgColor}">
        <span>${p.emoji}</span>
        ${p.badge ? `<span class="product-badge ${p.badgeType}">${p.badge}</span>` : ''}
        <button class="product-wishlist ${inWishlist ? 'active' : ''}"
                onclick="toggleWishlist(event, ${p.id})"
                aria-label="Favorito">
          ${inWishlist ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-info">
        <p class="product-origin">📍 ${p.origin}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-rating">
          <span class="stars">${starsHTML(p.rating)}</span>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">${formatPrice(p.price)}</span>
            ${p.originalPrice ? `<span class="price-original">${formatPrice(p.originalPrice)} (−${discount}%)</span>` : ''}
          </div>
          <button class="btn-add-cart" onclick="addToCart(event, ${p.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Añadir
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ── Filter controls ── */
function setFilter(cat) {
  activeFilter = cat;
  renderFilterTabs();
  renderCategories();
  renderProducts();
  if (cat !== 'all') {
    document.getElementById('tienda').scrollIntoView({ behavior: 'smooth' });
  }
}

function resetFilters() {
  activeFilter = 'all';
  searchQuery  = '';
  $('searchInput').value = '';
  $('sortSelect').value  = 'default';
  sortOrder = 'default';
  renderFilterTabs();
  renderCategories();
  renderProducts();
}

/* ── Cart ── */
function addToCart(event, id, qty = 1) {
  if (event) event.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart();
  updateCartUI();
  showToast(`✅ "${product.name}" añadido al carrito`);

  // bump badge animation
  const badge = $('cartBadge');
  badge.classList.remove('bump');
  void badge.offsetWidth;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartUI();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((n, i) => n + i.qty, 0);
}

function updateCartUI() {
  // Badge
  const count = getCartCount();
  $('cartBadge').textContent = count;

  // Items list
  const itemsEl = $('cartItems');
  if (!cart.length) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>Tu carrito está vacío</p>
        <p style="font-size:.8rem;margin-top:6px;color:var(--clr-muted)">¡Explora nuestros productos!</p>
      </div>`;
    $('cartFooter').style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
    <div class="cart-item">
      <div class="cart-item-emoji">${p.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">${formatPrice(p.price)} c/u</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${p.id}, +1)">+</button>
        </div>
      </div>
      <div>
        <div style="font-weight:700;font-size:.9rem;color:var(--clr-primary);margin-bottom:6px">
          ${formatPrice(p.price * item.qty)}
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})" aria-label="Eliminar">🗑️</button>
      </div>
    </div>`;
  }).join('');

  const total = getCartTotal();
  $('cartSubtotal').textContent = formatPrice(total);
  $('cartTotal').textContent    = formatPrice(total);
  $('cartFooter').style.display = 'block';
  $('checkoutTotalDisplay').textContent = formatPrice(total);
}

/* ── Cart Sidebar ── */
function openCart() {
  $('cartSidebar').classList.add('open');
  $('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $('cartSidebar').classList.remove('open');
  $('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Wishlist ── */
function toggleWishlist(event, id) {
  event.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    showToast('❤️ Añadido a favoritos');
  } else {
    wishlist.splice(idx, 1);
    showToast('🤍 Eliminado de favoritos');
  }
  localStorage.setItem('bazarWishlist', JSON.stringify(wishlist));
  renderProducts();
}

/* ── Product Modal ── */
function openModal(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) return;
  currentModalProduct = p;
  modalQty = 1;

  const discount = p.originalPrice
    ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

  $('modalBody').innerHTML = `
    <div class="modal-emoji" style="background:${p.bgColor}">${p.emoji}</div>
    <div class="modal-info">
      <p class="modal-origin">📍 ${p.origin} · ${CATEGORIES.find(c => c.id === p.category)?.name || ''}</p>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-rating">
        <span class="stars">${starsHTML(p.rating)}</span>
        <span class="rating-count" style="font-size:.85rem;color:var(--clr-muted)">${p.rating} (${p.reviews} reseñas)</span>
      </div>
      <p class="modal-desc">${p.desc}</p>
      <p class="modal-price">${formatPrice(p.price)}</p>
      ${p.originalPrice ? `<p class="modal-original">${formatPrice(p.originalPrice)} (−${discount}% descuento)</p>` : '<p style="margin-bottom:24px"></p>'}
      <div class="modal-qty-row">
        <span style="font-size:.9rem;font-weight:600;color:var(--clr-muted)">Cantidad:</span>
        <button class="qty-btn" onclick="changeModalQty(-1)">−</button>
        <span class="modal-qty-num" id="modalQtyNum">1</span>
        <button class="qty-btn" onclick="changeModalQty(+1)">+</button>
      </div>
      <button class="btn-modal-cart" onclick="addToCartFromModal()">
        🛒 Añadir al carrito · ${formatPrice(p.price)}
      </button>
    </div>`;

  $('productModal').classList.add('open');
  $('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('productModal').classList.remove('open');
  $('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function changeModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  $('modalQtyNum').textContent = modalQty;
  const p = currentModalProduct;
  if (p) {
    document.querySelector('.btn-modal-cart').textContent =
      `🛒 Añadir al carrito · ${formatPrice(p.price * modalQty)}`;
  }
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  addToCart(null, currentModalProduct.id, modalQty);
  closeModal();
  openCart();
}

/* ── Checkout ── */
function openCheckout() {
  closeCart();
  $('checkoutModal').classList.add('open');
  $('checkoutOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCheckout() {
  $('checkoutModal').classList.remove('open');
  $('checkoutOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Contact form ── */
function setupContactForm() {
  $('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast('✅ ¡Mensaje enviado! Te contactaremos pronto.', 'success');
    e.target.reset();
  });
}

/* ── Init ── */
function init() {
  renderCategories();
  renderFilterTabs();
  renderProducts();
  updateCartUI();

  // Search
  $('searchInput').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // Sort
  $('sortSelect').addEventListener('change', e => {
    sortOrder = e.target.value;
    renderProducts();
  });

  // Cart toggle
  $('cartToggle').addEventListener('click', openCart);
  $('cartClose').addEventListener('click', closeCart);
  $('cartOverlay').addEventListener('click', closeCart);

  // Modal close
  $('modalClose').addEventListener('click', closeModal);
  $('modalOverlay').addEventListener('click', closeModal);

  // Checkout
  $('checkoutBtn').addEventListener('click', openCheckout);
  $('checkoutClose').addEventListener('click', closeCheckout);
  $('checkoutOverlay').addEventListener('click', closeCheckout);

  $('checkoutForm').addEventListener('submit', e => {
    e.preventDefault();
    const total = getCartTotal();
    closeCheckout();
    cart = [];
    saveCart();
    updateCartUI();
    showToast(`🎉 ¡Pedido confirmado! Total: ${formatPrice(total)}`, 'success');
  });

  // Contact form
  setupContactForm();

  // Keyboard close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
      closeCheckout();
    }
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', init);

// Product Data
const allProducts = {
  clothes: [
    { id: 1, name: "Gray T-Shirt", price: 499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1amjS-BbJ0m2QTeG72IHbXu9aBioUFgnVw&s" },
    { id: 2, name: "Levi Jean", price: 999, image: "https://levi.in/cdn/shop/files/236770314_02_Front_8c32557a-5565-4d90-a7d7-d471839ac35a.jpg?v=1767769751&width=1445" }
  ],
};

// Cart Data
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

// Render products
function loadProducts(category, searchTerm = "") {
  const productList = document.getElementById("productList");
  if (!productList) return;
  productList.innerHTML = "";

  let products = allProducts[category];
  if (searchTerm) {
    products = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  products.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="product-name">${p.name}</div>
      <div class="price">₹${p.price}</div>
      <button onclick="addToCart(${p.id}, '${p.name}', ${p.price}, '${p.image}')">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}


// Add to Cart
function addToCart(id, name, price, image) {
  const existing = cartItems.find(item => item.id === id);
  if (existing) existing.qty++;
  else cartItems.push({ id, name, price, image, qty: 1 });
  saveCart();
}

// Save cart
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cartItems));
  updateCartCount();
}

// Update cart count
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (cartCount) cartCount.innerText = cartItems.reduce((sum, i) => sum + i.qty, 0);
}

// Update quantity
function updateQuantity(id, change) {
  const item = cartItems.find(i => i.id === id);
  if (item) {
    item.qty += change;
    if (item.qty <= 0) cartItems = cartItems.filter(i => i.id !== id);
  }
  saveCart();
  loadCartPage();
}

// Remove item
function removeItem(id) {
  cartItems = cartItems.filter(i => i.id !== id);
  saveCart();
  loadCartPage();
}


// Proceed to Checkout
function proceedToCheckout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty 🛒");
    return;
  }
  alert("✅ Thank you for your order! Your products have been booked 🎉");
  cartItems = []; // clear cart
  saveCart();
  loadCartPage();
}

// Load Cart Page
function loadCartPage() {
  const container = document.getElementById("cartContainer");
  if (!container) return;

  if (cartItems.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>Your cart is empty 🛒</p>";
    return;
  }

  container.innerHTML = "";
  let total = 0;

  cartItems.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-details">
        <h3>${item.name}</h3>
        <p class="cart-price">₹${item.price}</p>
        <div class="cart-quantity">
          <button onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
        <p>Subtotal: ₹${subtotal}</p>
      </div>
      <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
    `;
    container.appendChild(div);
  });

  const summary = document.createElement("div");
  summary.classList.add("cart-summary");
  summary.innerHTML = `<h3>Total: ₹${total}</h3>`;
  container.appendChild(summary);
}




// Handle Search Input
const searchInput = document.querySelector(".search-bar input");

if (searchInput) {
  searchInput.addEventListener("keyup", (e) => {
    const term = e.target.value.trim().toLowerCase();

    // Get the productList container (works on any page)
    const productList = document.getElementById("productList");
    if (!productList) return;

    let results = [];

    if (term) {
      // Search across all categories
      Object.values(allProducts).forEach(category => {
        results = results.concat(
          category.filter(p => p.name.toLowerCase().includes(term))
        );
      });
    } else {
      // If empty search, fallback to page category
      let currentCategory = "clothes"; // default
      if (window.location.pathname.includes("electronics")) currentCategory = "electronics";
      else if (window.location.pathname.includes("clothes")) currentCategory = "clothes";
      else if (window.location.pathname.includes("index")) currentCategory = "clothes";

      results = allProducts[currentCategory];
    }

    // Render results
    productList.innerHTML = "";
    if (results.length === 0) {
      productList.innerHTML = "<p style='text-align:center;'>No products found 🔍</p>";
      return;
    }

    results.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="product-name">${p.name}</div>
        <div class="price">₹${p.price}</div>
        <button onclick="addToCart('${p.id}, '${p.name}', ${p.price}, '${p.image}')">Add to Cart</button>
      `;
      productList.appendChild(card);
    });
  });
}



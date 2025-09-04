// Register
function registerUser(e) {
  e.preventDefault();
  let username = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value;
  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Registrasi berhasil! Silakan login.");
  window.location.href = "login.html";
}

// Login
function login(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && username === user.username && password === user.password) {
    localStorage.setItem("isLoggedIn", true);
    alert("Login berhasil! Selamat datang " + username);
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah!");
  }
}

// Cek login
function checkLogin() {
  let loggedIn = localStorage.getItem("isLoggedIn");
  if (!loggedIn) {
    window.location.href = "login.html";
  }
}

// Logout
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

// Keranjang
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " ditambahkan ke keranjang!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cartItems");
  let total = 0;

  if (cartItems) {
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
      cartItems.innerHTML += `<p>${item.name} - Rp${item.price.toLocaleString()} 
      <button onclick="removeItem(${index})">Hapus</button></p>`;
      total += item.price;
    });
    document.getElementById("totalPrice").innerText = "Total: Rp " + total.toLocaleString();
  }
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Checkout
function checkout() {
  let payment = document.getElementById("paymentMethod").value;
  alert("Pembayaran berhasil menggunakan " + payment);
  localStorage.removeItem("cart");
  window.location.href = "index.html";
  }
                   

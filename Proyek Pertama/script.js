const navbar =
document.getElementById("navbar");
navbar.innerHTML =`
<div class="navbar">
<a href="#">home</a>
<a href="#">about</a>
<a href="#">service</a>
<a href="#">contact</a>

`;
const products = [
  {name: "Sepatu", price: 200000, img: "sepatu.jpg"},
  {name: "Tas", price: 150000, img: "tas.jpg"},
  {name: "Jaket", price: 300000, img: "jaket.jpg"},
  {name: "Topi", price: 50000, img: "topi.jpg"},
  {name: "sempak",price: 25000, img:"sempak.jpg"},
  {name: "kutang",price: 25000, img:"kutang.jpg"}
];

let cart = [];

const productList = document.getElementById("product-list");

products.forEach((p, index) => {
  productList.innerHTML += `
    <div class="product">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>Rp ${p.price}</p>
      <button onclick="addToCart(${index})">Tambah</button>
    </div>
  `;
});

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  document.getElementById("count").innerText = cart.length;

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    cartItems.innerHTML += `
      <div class="cart-item">
        ${item.name} - Rp ${item.price}
      </div>
    `;
  });
}

function toggleCart() {
  document.getElementById("cartBox").classList.toggle("active");
}
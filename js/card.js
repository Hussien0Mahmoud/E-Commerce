let Cart = JSON.parse(localStorage.getItem("cart")) || [];
let CartCount = document
  .querySelector(".fa-cart-shopping")
  .setAttribute("Cart-Length", Cart.length);
let shoppingCart = document.querySelector(".shopping-cart");
let Products;

if (Cart) {
  DisplayData();
}

function DisplayData() {
  Products = Cart.map((product) => {
    shoppingCart.innerHTML += `
        <div class="cart-product-box">  
        <img class="cart-img-product" src="${product.images[0]}" alt="">
    <div class="product-details">
    <div class="product-name">
    <h4>${product.title}</h4>
            <i class="fa-solid fa-xmark fa-1xs"></i>
        </div>
        <div class="product-price">
        <div>
        <span class="price">$${product.price}
        </span>
        </div>
        <div>
        <i onclick="minProduct(${product.id})" class="fa-solid fa-minus"></i>
        <span class="count">
        ${product.quantity}
        </span>
        <i onclick="plusProduct(${product.id})" class="fa-solid fa-plus"></i>
        </div>
        </div>
        </div>
        </div>`;
  });
}

function minProduct(id) {
  let currantProduct = Cart.find((product) => product.id === id);
  if (currantProduct) {
    currantProduct.quantity--;
    localStorage.setItem("cart", JSON.stringify(Cart));
  }
}

function plusProduct(id) {
  let currantProduct = Cart.find((product) => product.id === id);
  if (currantProduct) {
    currantProduct.quantity++;
    console.log(currantProduct);
    DisplayData();
  }
}

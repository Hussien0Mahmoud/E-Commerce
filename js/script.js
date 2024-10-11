let productsContainer = document.querySelector(".cards");
let products = [];

(function getAllProducts() {
  fetch("https://dummyjson.com/products")
  // fetch('https://products-api-delta.vercel.app/api/products')
  .then((res) => res.json())
  .then((data) => {
    renderProducts(data.products);
    products = data.products;
  });
})();

function renderProducts(products) {
  // <div class="card" style="width: 18rem;">
  products.forEach((product, index) => {
    productsContainer.innerHTML += `
    
    
    <div class="  col-md-4" >
    <div class=" card  my-1" >
  <img src="${product.thumbnail}" class="card-img-top" alt="Card-Image">
  <div class="card-body flex-grow-1">
    <h5 class="card-title flex-grow-1">${product.title}</h5>
    <h6 class="card-title">${product.price}</h6>

    <p class="card-text ">${product.description}</p>
    <button href="#" class="btn btn-primary bottom-0" onclick="addToCart(${index})">Add To Card</button>
  </div>
</div>
</div>


        `;
      });
}

let Cart = JSON.parse(localStorage.getItem("cart")) || [];
let CartCount = document.querySelector(".fa-cart-shopping").setAttribute("Cart-Length" , Cart.length)

function addToCart(index) {
  const CurrentProduct = products[index];
  
  const cartProduct = Cart.find(item => item.id === CurrentProduct.id);
  
  if (!cartProduct) {
    Cart.push({ ...CurrentProduct, quantity: 1 });
  } else {  
    cartProduct.quantity++;
    }
    localStorage.setItem("cart", JSON.stringify(Cart));
    let CartCount = document.querySelector(".fa-cart-shopping").setAttribute("Cart-Length" , Cart.length)
  }
  

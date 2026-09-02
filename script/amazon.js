import {products} from '../data/products.js';
import {cart,cartItemCount,addToCart} from '../data/cart.js';

let productsHTML = '';
products.forEach(product => {
  productsHTML += `
    <div class="product-item">
      <img src="${product.image}" alt="${product.name}">

      <div class="product-info">
        ${product.name}
      </div>

      <div class="product-review">
        <img src="images/ratings/rating-${(product.rating.stars)*10}.png" class="rating">
        <div class="review-count">${product.rating.count}</div>
      </div>

      <div class="product-price">$${((product.priceCents)/100).toFixed(2)}</div>

      <select class="my-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

      <div class="button-section">
        <button class="add-to-cart-btn" data-id="${product.id}">Add To Cart</button>
      </div>
    </div>
  `;
})

document.querySelector('.products').innerHTML = productsHTML;

document.querySelectorAll('.add-to-cart-btn').forEach( button => {
  button.addEventListener('click', ()=>{
    let productId = button.dataset.id;
    if(!quantity){
      quantity = 1;
    }
    addToCart(productId,quantity);

    document.querySelector('.cart-item').textContent = cartItemCount();
    console.log(cart);
  });
});

let selects = document.querySelectorAll('.my-select');
let quantity;
selects.forEach( select => {
  select.addEventListener('change', (event) =>{
    quantity = Number(event.target.value);
  });
});
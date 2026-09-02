import {cart,cartItemCount} from '../data/cart.js';
import {products} from '../data/products.js';

let matchingItem;
let cartHtml = '';

cart.forEach( item => {
  products.forEach( product => {
    if(product.id === item.productId){
      matchingItem = product;
      console.log(matchingItem);
    }
  });

  cartHtml += 
  ` <div class="cart">
      <div class="delivary-date">
        Delivery date: Tuesday, June 21
      </div>
      <div class="cart-info">
        <div class="product-info">
          <img src="${matchingItem.image}" alt="product image">
          <div class="info">
            <div>
              ${matchingItem.name} 
            </div>
            <div class="product-price">
              $${((matchingItem.priceCents)/100).toFixed(2)}
            </div>
            <div>
              Quantity: ${item.quantity} 
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>
        </div>

        <div class="delivery-info">
          <h3>Choose a delivery option:</h3>
          <div class="delivery-option">
            <input type="radio" name="${matchingItem.id}">

            <div class="delivery-time">
              <div>Tuesday, June 21</div>
              <div>FREE Shipping</div>
            </div>
          </div>

          <div class="delivery-option">
            <input type="radio" name="${matchingItem.id}">

            <div class="delivery-time">
              <div>Wednesday, June 15</div>
              <div>$4.99 - Shipping</div>
            </div>
          </div>

          <div class="delivery-option">
            <input type="radio" name="${matchingItem.id}">

            <div class="delivery-time">
              <div>Monday, June 13</div>
              <div>$9.99 - Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.cart-item-container').innerHTML = cartHtml;
document.querySelector('.js-cart-item').textContent = `${cartItemCount()} items`;
import { products } from "../data/products.js";
import { cart, addToCart, cartItemCount } from "../data/cart.js"; 

let productHTML = ' ';

products.forEach( (product) => {
    productHTML += `
        <div class="product-card">
            <div class="product-img">
                <img src="${product.image}">
            </div>

            <div class="product-info">
                ${product.name}
            </div>

            <div class="review-sec">
                <img src="images/ratings/rating-${(product.rating.stars) * 10}.png" alt="review-image">
                <div class="review-count">${product.rating.count}</div>
            </div>

            <div class="product-price">$
                ${((product.priceCents) / 100).toFixed(2)}
            </div>

            <div class="product-quantity">
                <select class="quantity-option-js">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div class="add-to-cart-btn">
                <button data-product-id="${product.id}" class="add-to-cart-btn-js">Add To Cart</button>
            </div>
        </div>`;
});


document.querySelector('.cards').innerHTML = productHTML;

document.querySelectorAll('.add-to-cart-btn-js').forEach((button) => {
    button.addEventListener('click', () =>{
        let productId = button.dataset.productId;
        let productCard = button.closest('.product-card');
        let selectElement = productCard.querySelector('.quantity-option-js');
        let quantity = Number(selectElement.value);
        
        addToCart(productId,quantity);
        cartItemCount();

        console.log(cart);
    });    
});
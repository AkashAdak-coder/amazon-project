import { products } from "../data/products.js";
import { cart } from "../data/cart.js"; 

let productHTML = ' ';

products.forEach( (product) => {
    productHTML += `
        <div class=" product-card">
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
                <select>
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

function cartItemCount(){
    let count = 0;

    cart.forEach( (cartItem) =>{
        count++;
    });

    document.querySelector('.cart-items').innerHTML = count;
}

function addToCart(productId){
    let matchingItem;

    cart.forEach( (cartItem) =>{
        if(cartItem.productId === productId){
            matchingItem = cartItem;
        }
    });

    if(matchingItem){
        matchingItem.quantity++;
    } else {
        cart.push(
            {
                productId: productId,
                quantity: 1
            }
        );
    } 
}

document.querySelector('.cards').innerHTML = productHTML;

document.querySelectorAll('.add-to-cart-btn-js').forEach((button) => {
    button.addEventListener('click', () =>{
        let productId = button.dataset.productId;
        
        addToCart(productId);
        cartItemCount();

        console.log(cart);
        
    });    
});
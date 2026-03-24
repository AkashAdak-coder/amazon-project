import { cart, cartItemCount, deleteCartItem } from '../data/cart.js';
import { products } from '../data/products.js';

let cartHTML = '';

cart.forEach( (cartItem) =>{
    let productId = cartItem.productId;

    let matchingItem;

    products.forEach( (product) =>{
        if(product.id === productId){
            matchingItem = product;
        }
    })

    cartHTML += `<div class="cart-item">
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
        </div>
        <div class="delivery-item-info">
            <div class="item-info">
                <div class="item-img">
                    <img src="${matchingItem.image}">
                </div>

                <div class="img-info">
                    <div>${matchingItem.name}</div>
                    <div class="item-price">$${(matchingItem.priceCents / 100).toFixed(2)}</div>
                    <div>Quantity: ${cartItem.quantity} <a href="#">Upadte</a> <a href="#" class='js-cartItem-delete-link' data-product-id='${matchingItem.id}'>Delete</a></div>
                </div>
            </div>

            <div class="date-info">
                <div>Choose a delivery option:</div>

                <div class="date">
                    <div>
                        <input type="radio" name="${matchingItem.id}">
                    </div>

                    <div>
                        <div>Tuesday, June 21</div>
                        <div>FREE Shipping</div>
                    </div>
                </div>

                <div class="date">
                    <div>
                        <input type="radio" name="${matchingItem.id}">
                    </div>

                    <div>
                        <div>Wednesday, June 15</div>
                        <div>$4.99 - Shipping</div>
                    </div>
                </div>

                <div class="date">
                    <div>
                        <input type="radio" name="${matchingItem.id}">
                    </div>

                    <div>
                        <div>Monday, June 13</div>
                        <div>$9.99 - Shipping</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;  
});

document.querySelector('.cart-items').innerHTML = cartHTML;
document.querySelector('.js-cart-item-count').innerText = `${cartItemCount()} items`;

document.querySelectorAll('.js-cartItem-delete-link').forEach( (deleteButton) =>{
    deleteButton.addEventListener('click',() =>{
        let deleteId = deleteButton.dataset.productId;
        deleteCartItem(deleteId);

        let cartItemElement = deleteButton.closest('.cart-item');
        cartItemElement.remove();

        document.querySelector('.js-cart-item-count').innerText = `${cartItemCount()} items`;
    })
})
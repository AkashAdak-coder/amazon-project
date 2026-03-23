export let cart = [];

export function cartItemCount(){
    let count = 0;

    cart.forEach( (cartItem) =>{
        count++;
    });

    document.querySelector('.cart-items').innerHTML = count;
}

export function addToCart(productId,quantity){
    let matchingItem;

    cart.forEach( (cartItem) =>{
        if(cartItem.productId === productId){
            matchingItem = cartItem;
        }
    });

    if(matchingItem){
        matchingItem.quantity += quantity;
    } else {
        cart.push(
            {
                productId: productId,
                quantity: quantity
            }
        );
    } 
}
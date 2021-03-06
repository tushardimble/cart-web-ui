function showCart(){
    let cart = document.getElementById("cart");
    if(cart.style.display === "none"){
        cart.style.display = "block";
    }else{
        cart.style.display = "none";
    }
    cartData();
}

function cartData(){
    let myCart = [
        {
            image: '1.jpeg',
            name: 'cake1',
            price: 430
        },
        {
            image: 'cake-2.jpeg',
            name: 'cake2',
            price: 270
        },
        {
            image: '1.jpeg',
            name: 'cake3',
            price: 320
        },
    ];
    let myCartLength = myCart.length;
    document.getElementById("item-count").innerHTML = myCartLength;
    let i;
    let text = "";
    let total = 0;
    for(let i in myCart){
        total += myCart[i]['price'];
        text += "<div class='cart-item d-flex justify-content-between text-capitalize my-3'><img src='assets/images/"+myCart[i]['image']+"' class='img-fluid rounded-circle' alt=''><div class='item-text'> <p id='cart-item-title' class='font-weight-bold mb-0'>"+myCart[i]['name']+"</p><span>$</span><span id='cart-item-price' class='cart-item-price'>"+myCart[i]['price']+"</span></div></div>"
    }
    console.log(total);
    document.getElementById("cart-total").innerHTML = total;
    //document.getElementById("item-total").innerHTML = total;
    document.getElementById("mycartdata").innerHTML = text;
}
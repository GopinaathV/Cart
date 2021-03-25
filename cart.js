

updateCart()

var plusItem=document.getElementsByClassName('plus-btn')
var minusItem=document.getElementsByClassName('minus-btn')
var couponItem=document.getElementsByClassName('couponcode')[0]
var applycoupon=document.getElementsByClassName("applycoupon")

for(var i = 0;i<minusItem.length;i++){
    var minus=minusItem[i]
    minus.addEventListener('click',function(event){
        subtotal()
        updateCart()
    })
}
for(var i = 0;i<plusItem.length;i++){
    var plus=plusItem[i]
    plus.addEventListener('click',function(event){
        subtotal()
        updateCart()
    })
}

function coupon(){
if (couponItem){
    total=total-200
    }    
}
function subtotal(){
    
    var cartItemContainer=document.getElementsByClassName('cartItemContainer')  
    for(var i = 0;i<cartItemContainer.length;i++){ 
       var priceTag=cartItemContainer[i].getElementsByClassName('price')[0]
       var quantityTag=cartItemContainer[i].getElementsByClassName('cart-quantity-input')[0]
       var price=parseFloat(priceTag.innerHTML.replace("Rs.",''))
       var quantity=quantityTag.value
       var subtotal=price*quantity
       cartItemContainer[i].getElementsByClassName('subtotal')[0].innerHTML=subtotal
}
}
var removeItem=document.getElementsByClassName('delete-btn')
for(var i = 0;i<removeItem.length;i++){
    var button = removeItem[i]
    button.addEventListener('click',function(event){
        var buttonClicked=event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        updateCart()    
    })
                                  
}
function updateCart(){
   var cartItemContainer=document.getElementsByClassName('cartItemContainer')
   var total=0
   for(var i = 0;i<cartItemContainer.length;i++){ 
       var priceTag=cartItemContainer[i].getElementsByClassName('price')[0]
       var quantityTag=cartItemContainer[i].getElementsByClassName('cart-quantity-input')[0]
       var price=parseFloat(priceTag.innerHTML.replace("Rs.",''))
       var quantity=quantityTag.value
       var subtotal=price*quantity
       cartItemContainer[i].getElementsByClassName('subtotal')[0].innerHTML=subtotal
       total=total+(price*quantity)
       
   }
   document.getElementsByClassName('sub-total')[0].innerHTML=total    
   document.getElementsByClassName('total')[0].innerHTML=total        
   
}
    

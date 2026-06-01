const cartcontainer = document.querySelector(".cart-container");
const basket = document.getElementById("basket");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart-count");
let cartItems = [];
basket.addEventListener("click", function () {
  cartcontainer.classList.toggle("show-cart");
});

for (let button of addToCartButtons) {
  button.addEventListener("click", function (event) {
    const pizzaName =
      event.target.previousElementSibling.children[0].textContent;
    console.log(pizzaName);
    const pizzaPrice = event.target.previousElementSibling.children[2].textContent.replace("ksh.", "");
    console.log(pizzaPrice);
   const pizzaImage = event.target.parentElement.querySelector('.types3img').src;
console.log(pizzaImage);   

   
    
    
    if (button.textContent.toLowerCase() === "add to cart") {
      button.textContent = "Remove  from cart  ";
      button.style.backgroundColor = "red";

       const pizaItem = {
        name: pizzaName,
        price: pizzaPrice,
        image: pizzaImage
       
      };

    
      cartItems.push(pizaItem);
     
      cartCount.textContent = cartItems.length;

      updateCartContainer();
    
  
   }
  
  

    else{
    button.textContent = "Add to cart";
    button.style.backgroundColor = "green";
    const indexToRemove = cartItems.findIndex((item) => item.name === pizzaName);
    cartItems.splice(indexToRemove, 1);
    cartCount.textContent = cartItems.length;   
    updateCartContainer();

  } 



});
}
function updateCartContainer() {
  cartcontainer.innerHTML = "";
      cartItems.map((item) =>{
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-items");
    cartItemElement.innerHTML = `
        <div class="image">
      
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="name">
      
        <p>${item.name}</p>
      </div>
      <div class="price">
        <p>ksh.${item.price}</p>
      </div>
     
 
<div class="quantityy">
    <p class="decreament">-</p>
        <p class="quantity">1</p>
        <p class="increament">+</p>
      
     </div>
      <div>
        
        <p>ksh.${item.price }</p>
      </div>
    `;
    cartcontainer.appendChild(cartItemElement);
  });
}  

cartcontainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("increament")) {
    const quantityElement = event.target.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
updatesubtotal()
    const priceElement = event.target.parentElement.nextElementSibling.children[0];
    const price = parseInt(priceElement.textContent.replace("ksh.", ""));
    const itemTotalPrice = price * quantity;
    priceElement.textContent = `ksh.${itemTotalPrice}`;
  } 
else if (event.target.classList.contains("decreament")) {
  const quantityElement = event.target.nextElementSibling;
  let quantity = parseInt(quantityElement.textContent);
  
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    
    
    updatesubtotal(); 
  }
}
}); 
function updatesubtotal() {
  
  let total = 0;
  
  
  const cartItemsElements = document.querySelectorAll(".cart-items");

    for (let item of cartItemsElements) {
    
    const singlePrice = parseInt(item.children[2].textContent.replace("ksh.", ""));
    
    
    const quantity = parseInt(item.children[3].children[1].textContent);
    
   
    const subtotal = singlePrice * quantity;
    
 
    item.children[4].textContent = `ksh.${subtotal}`;
    
    
    total += subtotal;
  }

 
  const totalElement = document.getElementById("total-price");
  
  if (totalElement) {
    totalElement.textContent = `ksh.${total}`;
  } else {
    console.error("Element with ID 'total-price' not found in HTML");
  }
}   

   


 
  
  



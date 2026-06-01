const selecttabs = document.querySelectorAll(".item");
console.log(selecttabs);
const pizzaCategory = document.querySelector(".type3bcategory");
console.log(pizzaCategory);

for (let tab of selecttabs) {
  if(tab.textContent.toLowerCase() === "chicken pizza"){
    tab.classList.add("active");
  }
  tab.addEventListener('click',() => {
    for (let tab of selecttabs) {
      tab.classList.remove("active");
    }
    tab.classList.add("active");
    })
}



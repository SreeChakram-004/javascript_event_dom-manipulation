let printWishMessage = (message,color) => {
    let h1Tag=document.querySelector(".msg-1");
    h1Tag.innerText=message;
    h1Tag.style.backgroundcolor=color;
    h1Tag.style.padding="10px";
    h1Tag.style.boxShadow="1px pink";
    h1Tag.style.color="orange";
};
let gmButton=document.querySelector(".gm-btn");
gmButton.addEventListener("click",function(){
    printWishMessage("Good Morning",'color:green');

});
let gaButton=document.querySelector(".ga-btn");
gaButton.addEventListener("click",function(){
    printWishMessage("Good Afternoon",'color:green');

});
let geButton=document.querySelector(".ge-btn");
geButton.addEventListener("click",function(){
    printWishMessage("Good Evening",'color:green');

});
let gnButton=document.querySelector(".gn-btn");
gnButton.addEventListener("click",function(){
    printWishMessage("Good Night",'color:green');

});
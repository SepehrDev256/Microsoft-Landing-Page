var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "130px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}
var menuIcon=document.querySelector('.hamburger-menu');
var navbar=document.querySelector('.nav-bar');

menuIcon.addEventListener("click",() =>{
    navbar.classList.toggle("change")
})
var slide=document.getElementsByClassName('slide');
var prev=document.querySelector('.prev');
var next=document.querySelector('.next');
var coun=0;
function displayNone() {
    for(var i=0; i<slide.length;i++){
        slide[i].style.display='none';
    }
}
next.addEventListener("click",function(e) {
    e.preventDefault();
    coun++;
    if (coun>slide.length-1){
        coun=0;
    }
    displayNone()
    slide[coun].style.display='block';
})
prev.addEventListener("click",function(e) {
    e.preventDefault();
    coun--;
    if (coun<0) {
        coun=slide.length-1;
    }
    displayNone()
    slide[coun].style.display='block';
})
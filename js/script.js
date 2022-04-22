$(document).ready(function () {
    $(".owl-carousel").owlCarousel({items:4,nav:true});
});

const navbar ={
    button:"",
    nav : document.querySelector(".main-nav-bar"),
    element:document.querySelector(".main-nav-bar-elements")
}

function scrollHandler(e){
    if(window.pageYOffset > 300) {
        navbar.nav.classList.add('fixed');
    }
    else{
        navbar.nav.classList.remove('fixed');
    } 
};

const schedule = {
    schedule: document.querySelector("#schedule"),
    buttons:document.querySelectorAll(".schedule-nav a"),
    days:document.querySelectorAll(".schedule-day")
};
function hideDays(){
    schedule.days.forEach(function(elm){
        elm.classList.remove("active");
        elm.classList
    });
};
function hideColor(){
    schedule.buttons.forEach(function(elm,i){
    elm.classList.remove("active")
});
};
schedule.buttons.forEach(function(elm,i){
    elm.onclick = function(){
        hideDays();
        hideColor()
        elm.classList.add("active")
        schedule.days[i].classList.add("active");
    };
});



document.onscroll = scrollHandler;
scrollHandler();



// modal 
var modal = document.querySelector(".modal");


var btn = document.getElementById("reg");


var span = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "flex";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





const icon = document.getElementsByClassName("icon")[0];
const bar = document.getElementsByClassName("bar");
icon.addEventListener('click',function(e){
   document.querySelector('.main-nav-bar .main-nav-bar-elements').classList.toggle('show');
   navbar.nav.style.position = "fixed";

});







var counter = document.querySelectorAll(".about-counters h3");


let count1 = 0 ;

setInterval(() => {
    if(count1 <03){
        count1++;
        counter[0].innerHTML="0"+count1+"+";
    }
},900)

let count2 = 1 ;

setInterval(() => {
    if(count2 <10){
        count2++;
        counter[1].innerHTML=+count2+"+";
    }
},400)

let count3= 1 ;

setInterval(() => {
    if(count3 <20){
        count3++;
        counter[2].innerHTML=count3+"+";
    }
},200)





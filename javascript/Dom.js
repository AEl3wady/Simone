// Header 

var barIcon =document.querySelector(".fa-bars");
var bar =document.querySelector(".barLink");

barIcon.addEventListener("click", function () {
    bar.classList.toggle("d-none");
})


// About
var section = document.querySelector(".About");
var started = false;
// console.log(section);

window.addEventListener("scroll", function(){

    if(window.scrollY >= section.offsetTop - 300 && !started){

        var counters = document.querySelectorAll(".counter");

        counters.forEach(function(counter){

            var target = Number(counter.dataset.target);
            var count = 0;

            var interval = setInterval(function(){

                count++;

                counter.innerHTML = count + "+";

                if(count >= target){
                    clearInterval(interval);
                }

            },20);

        });

        started = true;
    }

});
// protofolio

var barAll=document.querySelector(".all");
var barDesign=document.querySelector(".design");
var barBrand=document.querySelector(".brand");
var barPhoto=document.querySelector(".photo");

var parts =document.querySelectorAll(".part")

barAll.addEventListener("click",function(){
    for(let i = 0; i < parts.length; i++){
        parts[i].classList.remove("d-none");
    }
})

barDesign.addEventListener("click",function(){
    parts[0].classList.remove("d-none");
    parts[1].classList.add("d-none");
    parts[2].classList.add("d-none");
})

barBrand.addEventListener("click",function(){
    parts[0].classList.add("d-none");
    parts[1].classList.remove("d-none");
    parts[2].classList.add("d-none");
})

barPhoto.addEventListener("click",function(){
    parts[0].classList.add("d-none");
    parts[1].classList.add("d-none");
    parts[2].classList.remove("d-none");
})

// Testimonial

var firstSpan = document.querySelector(".first span");
var secSpan = document.querySelector(".sec span");



var first = document.querySelector(".first");
var sec = document.querySelector(".sec");
var clients = document.querySelectorAll(".clint");
// console.log(clients)

first.addEventListener("click", function () {
    clients[0].classList.remove("d-none");
    clients[1].classList.remove("d-none");
    clients[2].classList.add("d-none");
    clients[3].classList.add("d-none");

    firstSpan.classList.add("active");
    secSpan.classList.remove("active");
});

sec.addEventListener("click", function () {

    clients[0].classList.add("d-none");
    clients[1].classList.add("d-none");
    clients[2].classList.remove("d-none");
    clients[3].classList.remove("d-none");

    firstSpan.classList.remove("active");
    secSpan.classList.add("active");
});
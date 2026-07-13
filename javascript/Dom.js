
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
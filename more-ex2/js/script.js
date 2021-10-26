var slideIndex = 9;
const slide = document.getElementsByClassName("slide")[0]; 
const slideAni = document.getElementsByClassName("slide-ani")[0]; 
const slideItem = document.getElementsByClassName("slide-img");
const btnPrev = document.getElementsByClassName("btn-prev")[0];
const btnNext = document.getElementsByClassName("btn-next")[0];

btnPrev.onclick = function() {
    clearInterval(runSlide);
    slideAni.style.animation = "prev 1s linear";
    slideAni.style["animation-fill-mode"] = "forwards";
    slideIndex--;
    setTimeout (function () {
        if (slideIndex > 10)
        slideIndex = 1;
        for (let i = 0; i < 7; i++) {
            var currentSlide = (slideIndex + i) % 10 + 1;
            slideItem[i].src = "../img/meo" + currentSlide + ".jpg";
        }
    }, 1000)
    setTimeout (function () {
        slideAni.style.animation = null;
    }, 1000) 
    runSlide = setInterval(showSlide, 2000);
}
btnNext.onclick = function() {
    clearInterval(runSlide);
    showSlide();
    runSlide = setInterval(showSlide, 2000);
}

function showSlide() {
    slideAni.style.animation = "next 1s linear";
    slideAni.style["animation-fill-mode"] = "forwards";
    setTimeout (function () {
        if (slideIndex > 10)
        slideIndex = 1;
        for (let i = 0; i < 7; i++) {
            var currentSlide = (slideIndex + i) % 10 + 1;
            slideItem[i].src = "./img/meo" + currentSlide + ".jpg";
        }
    }, 1000)
    slideIndex++;

    setTimeout (function () {
        slideAni.style.animation = null;
    }, 1000) 
}
showSlide();
var runSlide = setInterval(showSlide, 3000);





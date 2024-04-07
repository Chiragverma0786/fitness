function toggleDiv(divNumber) {
    // Hide all divs
    var divs = document.querySelectorAll('.box');
    divs.forEach(function(div) {
        div.style.display = 'none'; // Hide all divs
    });

    // Hide all buttons background color
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn) {
        btn.style.backgroundColor = '';
    });

    // Show the selected div
    var divToShow = document.getElementById('div' + divNumber);
    divToShow.style.display = 'flex'; // Show the selected div

    // Highlight the clicked button
    var btn = document.getElementById('btn' + divNumber);
    btn.style.backgroundColor = 'orangered';
    btn.style.transition = '0.2s';
}

var menuImg = document.querySelector('.menu-img')
var menu = document.querySelector('.showmenu')
var close = document.querySelector('.closemenu')
menuImg.addEventListener("click", function() {
    menu.style.top = 0
})
close.addEventListener("click", function() {
    menu.style.top = "-110%"
})




function piczoom(){
    const images = document.querySelectorAll('#imgzoom');

    // Function to scale the image when mouse enters
    function scaleImage(event) {
        gsap.to(event.target, { scale: 1.5 });
    }

    // Function to reset the image scale when mouse leaves
    function resetImage(event) {
        gsap.to(event.target, { scale: 1 });
    }

    // Event listeners to trigger scaling for all images
    images.forEach(img => {
        img.addEventListener('mouseenter', scaleImage);
        img.addEventListener('mouseleave', resetImage);
    });
}
piczoom();

function zoom(){
    gsap.to(".zoom", {
        scale: 300,
        stagger: 0.25,
        duration: 3,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page1",
            pin: true,
            start: "top top",
            end: "bottom 10%",
            scrub: 1,
            // markers: true,
            onEnterBack: function() {
                gsap.set(".zoom", { display: "flex", pointerEvents: "none" }); // Reset display property and disable pointer events
            },
            onEnter: function() {
                gsap.set(".zoom", { pointerEvents: "none" }); // Enable pointer events when entering trigger area
            }
        }
    });
}
zoom();

function vdo(){
    var tll = gsap.timeline({
        scrollTrigger:{
            trigger: ".page6",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "bottom top",
            // markers: true,
        }
    })
    
    tll.to(".page6 h1",{
        top: "-20%",
    })
    
    var tll1 = gsap.timeline({
        scrollTrigger:{
            trigger: ".page7",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "bottom top",
            // markers: true,
        }
    })
    
    tll1.to(".page7 h1",{
        top: "-20%",
    })
    
}
vdo();

//image change animation
function gsapla(){
    gsap.set(".animation-page1 img", { xPercent: -100 });

    const images = document.querySelectorAll(".animation-page1 img");
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "power2.inOut" } });

    tl.fromTo(images[0], { xPercent: 0, opacity: 1 }, { xPercent: 0, opacity: 1 })
    .to(images[0], { xPercent: -100, opacity: 0 }, "+=1")
    .fromTo(images[1], { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, "-=2")
    .to(images[1], { xPercent: -100, opacity: 0 }, "+=3")
    .fromTo(images[2], { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, "-=2")
    .to(images[2], { xPercent: -100, opacity: 0 }, "+=3")
    tl.fromTo(images[0], { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 },"-=2")

    tl.repeat(-1);

    document.addEventListener("DOMContentLoaded", () => {
        tl.play();
    });
}
gsapla();

function scrollpage(){
    gsap.to("#elems11",{
        scrollTrigger:{
            trigger: ".page8",
            start: "top top",
            end: "bottom bottom",
            // pin: true,
            // markers: true,
            scrub: 1,
        },
        xPercent: -200,
        ease: Power2,
    })
}
scrollpage();

function bodycolorchange(){
    document.querySelectorAll("#section-lala")
.forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start: "top 20%",
        end: "bottom 20%",
        scrub: 1,
        ease: "power4.out", // Easing function
        // markers: true,
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color);
        }
    })
})
}
bodycolorchange();

function teamphoto(){
document.querySelectorAll(".mems-cont")
.forEach(function(el){
    el.addEventListener("mousemove", function(dets){
        gsap.to(this.querySelector(".pics"),
         {  opacity: 1,
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
            ease: Power4,
            duration: .4,
            scale: 1,})
    })

    el.addEventListener("mouseleave", function(dets){
        gsap.to(this.querySelector(".pics"), {opacity: 0})
    })
})

document.querySelectorAll(".mems-cont1")
.forEach(function(ele){
    ele.addEventListener("mousemove", function(dets){
        gsap.to(this.querySelector(".pics1"),
         {  opacity: 1,
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
            ease: Power4,
            duration: .4,
            scale: 1,})
    })

    ele.addEventListener("mouseleave", function(dets){
        gsap.to(this.querySelector(".pics1"), {opacity: 0})
    })
})

document.querySelectorAll(".mems-cont2")
.forEach(function(ele){
    ele.addEventListener("mousemove", function(dets){
        gsap.to(this.querySelector(".pics2"),
         {  opacity: 1,
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
            ease: Power4,
            duration: .4,
            scale: 1,})
    })

    ele.addEventListener("mouseleave", function(dets){
        gsap.to(this.querySelector(".pics2"), {opacity: 0})
    })
})
}
teamphoto();

function photodis(){
    gsap.to(".dance7 img", {
        opacity: 0,
        scrollTrigger:{
            trigger: ".page9",
            // markers: true,
            start: "top 20%",
            // end: "top 30%",
            toggleActions: "play reverse play reverse"
        }
    })
}
photodis();

function membership(){
    gsap.to(".purchase h1",{
        // opacity:1,
        y: 10,
        scale: 1,
        scrollTrigger:{
            trigger: ".page10",
            start: "top 20%",
            end: "top 40%",
            scrub: true,
            ease: Power4,
            // markers: true,
        }
    })
    
    gsap.to(".purchase h1",{
        duration: 1,
        opacity: 100,
        scrollTrigger:{
            trigger: ".page10",
            start: "top 70%",
            end: "bottom bottom",
            scrub: true,
            ease: Power4,
            // markers: true,
        }
    })
    
    gsap.to(".card-cont1",{
        duration: 2,
        scale: 1,
        opacity: 100,
        scrollTrigger:{
            trigger: ".page10",
            start: "top 20%",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
            ease: Power2,
        }
    })
    
    gsap.to(".card-cont2",{
        duration: 10,
        scale: 1,
        opacity: 100,
        scrollTrigger:{
            trigger: ".page10",
            start: "top 20%",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
            ease: Power2,
        }
    })
}
membership();

//BMI Calculator

function calculateBMI() {
    // Retrieve input values
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;

    // BMI calculation (example calculation, you may adjust this based on your BMI formula)
    var bmi = weight / Math.pow(height / 100, 2);

    // Display BMI result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "BMI: " + bmi.toFixed(2);

    // Optionally, you can add further analysis based on age and gender
    if (age < 18) {
        resultDiv.innerHTML += "<br>You are under 18 years old.";
    }

    if (gender === "male") {
        resultDiv.innerHTML += "<br>You are male.";
    } else if (gender === "female") {
        resultDiv.innerHTML += "<br>You are female.";
    }
}

// card slide function

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('active');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
handleScroll();

// fade

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle fade-in effect
function handleFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });
}

function handleFadeOut() {
    const elements = document.querySelectorAll('.fade-out');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('low');
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('scroll', handleFadeOut);

// Initial check for elements in viewport on page load
document.addEventListener('DOMContentLoaded', handleFadeIn);
document.addEventListener('DOMContentLoaded', handleFadeOut);



//Cursor

var page1Content = document.querySelector(".page1")
var cursor = document.querySelector(".cursor-page1")

page1Content.addEventListener("mousemove",function(dada){
    gsap.to(cursor,{
        x:dada.x,
        y:dada.y
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

(function() {
        const locomotiveScroll = new LocomotiveScroll();
})();
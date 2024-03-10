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
}

//image change animation
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
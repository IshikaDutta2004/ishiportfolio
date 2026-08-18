const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Active Navigation Links
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// ================================
// Mobile Menu
// ================================

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});
// Close menu after clicking a link

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});
// ===============================
// Scroll Reveal Animation
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach((section)=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// ===============================
// Dark Mode with Local Storage
// ===============================

const themeToggle = document.querySelector(".theme-toggle");

const themeIcon = document.querySelector(".theme-toggle i");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeIcon.classList.replace("fa-moon","fa-sun");

        localStorage.setItem("theme","dark");

    }

    else{

        themeIcon.classList.replace("fa-sun","fa-moon");

        localStorage.setItem("theme","light");

    }

});
// ===============================
// Preloader
// ===============================

window.addEventListener("load",()=>{

    const preloader=document.getElementById("preloader");

    preloader.style.opacity="0";

    setTimeout(()=>{

        preloader.style.display="none";

    },500);

});
window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});
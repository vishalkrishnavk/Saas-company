// Select all FAQ items
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", () => {

        // Close all other items
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
            }
        });

        // Toggle current item
        item.classList.toggle("active");

    });
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


const counters = document.querySelectorAll(".count");
const statsSection = document.querySelector(".stats");

let started = false;

const startCounting = () => {

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const duration = 3000; // total animation time
        const increment = target / (duration / 16);

        let current = 0;

        const updateCount = () => {
            current += increment;

            if (current < target) {
                if (target >= 1000) {
                    counter.textContent = (current / 1000).toFixed(0) + "K+";
                } else {
                    counter.textContent = Math.floor(current);
                }
                                requestAnimationFrame(updateCount);
            } else {
                if (target >= 1000) {
                    counter.textContent = (target / 1000).toFixed(0) + "K+";
                } else {
                    counter.textContent = target;
                }
            }
        };

        updateCount();
    });
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            startCounting();
            started = true;
        }
    });
}, {
    threshold: 0.5
});

observer.observe(statsSection);

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

hamburger.addEventListener("click", () => {
    //navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
});


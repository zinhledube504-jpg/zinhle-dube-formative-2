/*================================
  DUBE TECHNOLOGIES
  Main JS File
  =================================*/

  document.addEventListener("DOMContentLoaded", function() {

    //1. MOILE NAVIGATION MENUE
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector(".nav-links");

    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', function() {
            navigation.classList.toggle("show-menu");
        
            const isOpen = navigation.classList.contains("show-menu");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });
    }
});

//2. WELCOME MESSAGE ON THE HOME PAGE
const welcomeButton = document.querySelector("#welcome-buton");
const welcomeMessage = document.querySelector("#welcome-message");

if (welcomeButton && welcomeMessage) {
    welcomeButton.addEventListener("click", function() {
        welcomeMessage.textContent = 
        "Welcome to Dube Technologies!" +
        "Discover smart technology solutions that enhance your digital experience. " +
        "Explore our innovative products and services designed to meet your needs.";
    });
}

//3. SERVICES SEARCH FUNCTIONALITY
const servicesSearch = document.querySelector("#services-search");
const serviceCards = document.querySelectorAll(".service-card");
const noServices = document.querySelector("#no-services");

if (servicesSearch && serviceCards.length > 0) {
    servicesSearch.addEventListener("input", function() {
        const searchText = servicesSearch.value.toLowerCase().trim();
        let visibleCount = 0;

        serviceCards.forEach(function(card) {
            const serviceText = card.textContent.toLowerCase();

            if (serviceText.includes(searchText)) {
                card.hidden = false;
                visibleCount++;
            } else {
                card.hidden = true;
            }
        });

        if (noServices) {
            noServices.hidden = visibleCount > 0;
        }
    });
}


//4. LEARN MORE ABOUT SERVICES
const learnMoreButtons = document.querySelectorAll(".services-more");
learnMoreButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const details = button.nextElementSibling;

        if (!details) return;

        const isHidden = details.hidden;

        details.hidden = !isHidden;

        button.textContent = isHidden ? "Show Less" : "Learn More";
    });
});

//5. FAQ ACCORDITION FUNCTIONALITY
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {
    const answer = question.nextElementSibling;

    if (!answer || !answer.classList.contains("faq-answer")) {
        return;
    }
    const isExpanded = question.getAttribute("aria-expanded") === "true";
    answer.hidden = isExpanded;
    question.setAttribute("aria-expanded", String(!isExpanded));
    });
});

//6. IMAGE GALLERY LIGHTBOX FUNCTIONALITY
const galleryImages = document.querySelectorAll("[data-lightbox]");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxClose = document.querySelector("#lightbox-close");

function closeImageLightbox() {
    if (lightbox) {
        lightbox.hidden = true;
    }
}

galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
        if (!lightbox || !lightboxImage) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.hidden = false;
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener("click", function(event) {
        closeImageLightbox();
    });
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeImageLightbox();
    }
});

//7. CONTACT FORM VALIDATION
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!formMessage) return;

        const name = contactForm.querySelector("#name").value.trim();
        const email = contactForm.querySelector("#email").value.trim();
        const message = contactForm.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill in all required fields.";
            formMessage.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Thank you! Your message has been submitted.";
        formMessage.style.color = "green";
        contactForm.reset();
    });
}

//8. SCROLL REVEAL ANIMATION
const revealElements =document.querySelectorAll(".reveal");
 if ("intersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
     { threshold: 0.15  }
    );
    revealElements.forEach(function(element) {
        observer.observe(element);
    });
    } else {
    revealElements.forEach(function(element) {
        element.classList.add("visible");
    });
}

//9. AUTOMATIC FOOTER YEAR
const yearElements = documentation.querySelectorAll(".current-year");
yearElements.forEach(function(element) {
    element.textContent = new Date().getFullYear();
});


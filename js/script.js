// Sidebar functionality
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.querySelector(".sidebar-toggle");

  if (
    !sidebar.contains(event.target) &&
    !sidebarToggle.contains(event.target) &&
    sidebar.classList.contains("active")
  ) {
    sidebar.classList.remove("active");
  }
});

// Typing effect
const typingText = document.getElementById("typing-text");
const phrases = [
  "seamless experiences",
  "digital solutions",
  "innovative applications",
  "robust systems",
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newPhraseDelay = 1500;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    // Remove character
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = erasingDelay;
  } else {
    // Add character
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }

  // Check if phrase is complete
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingDelay = newPhraseDelay;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingDelay = 500;
  }

  setTimeout(type, typingDelay);
}

// Start typing effect when page loads
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000);

  // Initialize scroll animations
  initScrollAnimations();

  // Initialize back to top button
  initBackToTop();
});

// Scroll animations
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => {
    fadeInObserver.observe(element);
  });
}

// Back to top functionality
function initBackToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Form validation
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  let isValid = true;

  // Reset error messages
  document.querySelectorAll(".error-message").forEach((el) => {
    el.style.display = "none";
  });

  // Validate name
  if (name.value.trim() === "") {
    document.getElementById("name-error").textContent = "Name is required";
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    document.getElementById("email-error").textContent =
      "Please enter a valid email address";
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }

  // Validate subject
  if (subject.value.trim() === "") {
    document.getElementById("subject-error").textContent =
      "Subject is required";
    document.getElementById("subject-error").style.display = "block";
    isValid = false;
  }

  // Validate message
  if (message.value.trim() === "") {
    document.getElementById("message-error").textContent =
      "Message is required";
    document.getElementById("message-error").style.display = "block";
    isValid = false;
  }

  if (isValid) {
    // Form is valid, you can submit it here
    alert("Thank you for your message! I will get back to you soon.");
    event.target.reset();
  }
}

// Project demo and code functions - removed as onclick handlers are no longer used
// Links now work directly through href attributes

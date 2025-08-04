'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");


select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}
// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
    
      if (this.innerText.trim().toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Certificate modal functionality
const certificateItems = document.querySelectorAll(".project-item");
const modalContainer = document.createElement("div");
modalContainer.classList.add("modal-container");
modalContainer.innerHTML = `
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <img class="modal-img" src="" alt="Certification">
  </div>
`;
document.body.appendChild(modalContainer);

const modalImg = modalContainer.querySelector(".modal-img");
const closeModal = modalContainer.querySelector(".close-modal");

// Open modal when clicking on the eye icon
certificateItems.forEach(item => {
  const eyeButton = item.querySelector(".project-item-icon-box");
  eyeButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents any other click interference

    // Get the image source
    const imgSrc = item.querySelector(".project-img img").src;
    modalImg.src = imgSrc;

    // Show modal
    modalContainer.classList.add("active");
  });
});

// Close modal when clicking outside the image or on close button
modalContainer.addEventListener("click", function (event) {
  if (event.target === modalContainer || event.target === closeModal) {
    modalContainer.classList.remove("active");
  }
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  // Total animation time: text fades (~1.3s) + SVG slides (2s) + small buffer
  const totalTime = 3000; // 3 seconds total duration

  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 1s ease";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000); // match fade out duration
  }, totalTime);
});

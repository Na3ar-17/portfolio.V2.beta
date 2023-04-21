const link = document.querySelector("#about-site");
const aboutDeveloper = document.querySelector("#about-developer");
const modal = document.querySelector(".modal-window");
const modalWindow = modal.querySelector(".window");
const modalOverlay = modal.querySelector(".overlay");
const modalClose = document.querySelector(".modal-close");

const windowTitle = document.querySelector(".window-title");
const windowDescription = document.querySelector(".description");
const firstLink = document.getElementById("first-link");
const secondLink = document.getElementById("second-link");

const btnNotWorking = document.querySelectorAll(".not-working");

const html = document.querySelector("html");

const dataElementsForModalWindow = [
  {
    title: "About Site",
    description:
      "This site was made according to the template from figma, and slightly modified",
    firstLink:
      "https://www.figma.com/file/AdhgWwFp8djwU1NOtrduD1/Portofolio-Website-Template-(Community)?node-id=0-1&t=PvVp8hnuY5fpQtr8-0",
    secondLink: "https://portofolio-web-nu.vercel.app/",
    textContentFirstLink: "Template from figma",
    textContentSecondLink: "Original version",
  },
  {
    title: "Error",
    description:
      "Sorry, this feature is currently unavailable ,please try again later",
  },

  {
    title: "About Developer",
    description: "Gavrylyk Nazar",
    firstLink: "https://www.instagram.com/gavruluk_nazar/",
    secondLink: "https://github.com/Na3ar-17",
    textContentFirstLink: "instagram",
    textContentSecondLink: "github",
  },
];

link.addEventListener("click", () => {
  modal.classList.remove("hidden");
  html.classList.add("html-hidden");
  if (!modal.classList.contains("hidden")) {
    modalWindow.classList.add("window-active");
    modalOverlay.classList.add("overlay-active");
    addElements(dataElementsForModalWindow, 0);
  }
});

for (let i = 0; i < btnNotWorking.length; i++) {
  btnNotWorking[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    html.classList.add("html-hidden");
    if (!modal.classList.contains("hidden")) {
      modalWindow.classList.add("window-active");
      modalOverlay.classList.add("overlay-active");
      addElements(dataElementsForModalWindow, 1, false);
    }
  });
}

aboutDeveloper.addEventListener("click", () => {
  modal.classList.remove("hidden");
  html.classList.add("html-hidden");
  if (!modal.classList.contains("hidden")) {
    modalWindow.classList.add("window-active");
    modalOverlay.classList.add("overlay-active");
    addElements(dataElementsForModalWindow, 2);
  }
});

modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
  html.classList.remove("html-hidden");
  clearElements();
});

function addElements(data, id, isLink = true) {
  windowTitle.innerHTML = data[id].title;
  windowDescription.innerHTML = data[id].description;
  if (isLink) {
    firstLink.setAttribute("href", data[id].firstLink);
    secondLink.setAttribute("href", data[id].secondLink);
    firstLink.innerHTML = data[id].textContentFirstLink;
    secondLink.innerHTML = data[id].textContentSecondLink;
  }
}

function clearElements() {
  windowTitle.innerHTML = "";
  windowDescription.innerHTML = "";
  firstLink.setAttribute("href", "#!");
  secondLink.setAttribute("href", "#!");
  firstLink.innerHTML = "";
  secondLink.innerHTML = "";
}

// preloader

document.body.onload = () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.classList.add("preloader-hidden");
  }, 1 * 1000);
};

/* slider */
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  speed: 400,
});

document.addEventListener("DOMContentLoaded", function () {
  const navIcon = document.querySelector("#nav-icon1");
  const mediaMenu = document.querySelector(".list");
  const mediaMuneOverlay = document.querySelector(".menu-overlay");
  navIcon.addEventListener("click", function () {
    navIcon.classList.toggle("open");
    html.classList.toggle("html-hidden");
    navIcon.classList.toggle("nav-icon-fixed");
    mediaMenu.classList.toggle("list-active");
    mediaMuneOverlay.classList.toggle("menu-overlay-active");
  });
});

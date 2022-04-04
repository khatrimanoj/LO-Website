//header fixed on scroll
window.addEventListener("scroll", function (e) {
  var height = window.scrollY;
  if (
    height >= 75
      ? document.querySelector("header").classList.add("fixed-menu")
      : document.querySelector("header").classList.remove("fixed-menu")
  );
});

//responsive menu js
let btnToggle = document.querySelector(".menu-toggle");
let menuToggle = document.querySelector(".menu-collapse");
let menuLink = document.querySelectorAll(
  ".menu-collapse ul li:not(.hasDropdown) a, .menu-collapse .btn"
);
let menuOverlay = document.querySelector(".menu-overlay");
let logo = document.createElement("div");
logo.setAttribute("class", "mob-logo");
logo.innerHTML = `<a class="brand-logo" href="#" tabindex="-1" aria-label="brand name" aria-labelledby="Lo website">
<img src="images/logo.png" alt="Lo website logo" />
</a>`;
btnToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  btnToggle.classList.toggle("active");
  menuToggle.append(logo);
});

menuOverlay.addEventListener("click", () => {
  menuToggle.classList.remove("active");
  btnToggle.classList.remove("active");
});

//dropdown menu js
const dropdown = document.querySelectorAll(".hasDropdown .menu-item");
dropdown.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.target.nextElementSibling.classList.toggle("open");
  });
});

document.onclick = function (e) {
  const menuVisible = document.querySelectorAll(".dropdown.open");
  menuVisible.forEach(function (el) {
    if (
      el != e.target.nextElementSibling &&
      el != e.target.parentNode.parentNode
    ) {
      el.classList.toggle("open");
    }
  });
};

//tab js
const tab = document.querySelector(".tab");
const tabButtons = tab.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(e) {
  tabPanels.forEach((panel) => {
    panel.hidden = "true";
  });

  tabButtons.forEach((button) => {
    button.setAttribute("aria-selected", "false");
  });

  e.currentTarget.setAttribute("aria-selected", "true");

  const { id } = e.currentTarget;

  const currentTab = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );

  currentTab.hidden = false;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", tabClickHandler);
});

//Latest New Slider Js
$(function () {
  var $slider = $(".news__slider");
  $slider.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 400,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//range slider js
//https://codepen.io/jjjrmy/pen/GRpqLEZ?editors=1010
const range = document.getElementById("range"),
  setValue = () => {
    const newValue = Number(
        ((range.value - range.min) * 100) / (range.max - range.min)
      ),
      newPosition = 16 - newValue * 0.32;
    document.documentElement.style.setProperty(
      "--range-progress",
      `calc(${newValue}% + (${newPosition}px))`
    );
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener("input", setValue);

//equal height js for client review
var matchHeight = (function () {
  function init() {
    eventListeners();
    matchHeight();
  }

  function eventListeners() {
    $(window).on("load", function () {
      matchHeight();
    });
    $(window).on("resize", function () {
      matchHeight();
    });
  }

  function matchHeight() {
    var groupName = $(".flex-item .review-card .reviews");
    var groupHeights = [];

    groupName.css("min-height", "auto");

    groupName.each(function () {
      groupHeights.push($(this).outerHeight());
    });

    var maxHeight = Math.max.apply(null, groupHeights);
    groupName.css("min-height", maxHeight);
  }

  return {
    init: init,
  };
})();

$(document).ready(function () {
  matchHeight.init();
});

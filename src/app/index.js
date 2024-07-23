import $ from "jquery";
import LocomotiveScroll from "locomotive-scroll";
// import Odometer from "odometer";

$(function () {
  $("a:not(.list-links .link)").on("click", function (e) {
    e.preventDefault();
  });

  $(document).on("click", ".list-links .link", function () {
    $(this)
      .closest(".list-links")
      .find("li")
      .each(function (index, item) {
        $(item).find("a").removeClass("active");
      });

    $(this).addClass("active");

    $(".menu-toggle-input").trigger("click");
  });
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});

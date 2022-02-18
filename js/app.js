$(document).ready(() => {
  const addEvent = document.querySelectorAll(".copy-event");
  const popup = document.querySelector(".popup");
  const closePopup = document.querySelectorAll(".close-popup");
  const addEventButton = document.querySelector(".eventPopup");
  const addEventPopup = document.querySelector(".popup-form");
  const nextEvent = document.querySelector("#nextEvent");
  const back = document.querySelector("#back");
  const form1 = document.querySelector(".form-1");

  // make a copy popup

  $(".form-switch .form-check-input").on("change", function () {
    $("body").toggleClass("th-dark-blue");
  });

  addEvent.forEach(elm => {
    elm.addEventListener("click", function () {
      popup.classList.add("in");
      const closeControl = document.querySelector(".popup.in");
      const eventPopup = document.querySelector(".event-popup");
      closeControl.addEventListener("click", function () {
        popup.classList.remove("in");
        eventPopup.classList.remove("in");
        addEventPopup.classList.remove("in");
      });
      eventPopup.classList.add("in");
    });
  });

  closePopup.forEach(elm => {
    elm.addEventListener("click", function () {
      const popup = document.querySelector(".popup");
      popup.classList.remove("in");
      $(".event-popup").removeClass("in");
      addEventPopup.classList.remove("in");
    });
  });

  $(".eventPopup").on("click", function () {
    addEventPopup.classList.add("in");
    popup.classList.add("in");
    const closeControl = document.querySelector(".popup.in");
    const eventPopup = document.querySelector(".popup-form");
    closeControl.addEventListener("click", function () {
      popup.classList.remove("in");
      eventPopup.classList.remove("in");
      addEventPopup.classList.remove("in");
    });
  });

  if (nextEvent) {
    nextEvent.addEventListener("click", function () {
      form1.style.marginLeft = "-100%";
    });
    back.addEventListener("click", function () {
      form1.style.marginLeft = "0";
    });
  }
  $(".nice").niceScroll({
    cursorcolor: "#3457D1",
    cursorwidth: "4px"
  });

  $(".video-clip").on("click", function () {
    const url = $(this).attr("data-src");
    $(".video-popup iframe").attr("src", url);

    $(".video-popup").addClass("in");
  });
  $("#leader-board").on("click", function () {
    $(".leader-board").addClass("in");
  });
  $(".view-player").on("click", function () {
    $(".player-popup").addClass("in");
  });

  $("#close").on("click", function () {
    $(".dashborad-navbar").addClass("slide-out");

    $(".sidebar.side").addClass("slide-out");
  });

  $("#open").on("click", function () {
    $(".dashborad-navbar").removeClass("slide-out");
    $(".sidebar.side").removeClass("slide-out");
  });

  $(".d-close").on("click", function () {
    $(".popup").removeClass("in");
    if ($(".video-popup iframe")) {
      $(".video-popup iframe").attr("src", "");
    }
  });
  $(".d-location").on("click", function () {
    $(".deactivate").addClass("in");
    if ($(".video-popup iframe")) {
      $(".video-popup iframe").attr("src", "");
    }
  });
  $(".popup .layer").on("click", function () {
    $(this).closest(".popup").removeClass("in");
    if ($(".video-popup iframe")) {
      $(".video-popup iframe").attr("src", "");
    }
  });

  // $("#datetimepicker1").data("DateTimePicker").show();

  // <div class="datepicker"><input type="text" autocomplete="off" name="date" id="date" placeholder="no"></input>
  $("#date").datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: "dd/mm/yy",
    yearRange: "-90:+00"
  });
  // $("#date").datepicker("show");

  $("#event-date").datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: "dd/mm/yy",
    yearRange: "-90:+00"
  });
});

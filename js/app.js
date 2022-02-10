$(document).ready(() => {
  $(".nice").niceScroll({
    cursorcolor: "#3457D1",
    cursorwidth: "4px"
  });

  $("#close").on("click", function () {
    $(".dashborad-navbar").addClass("slide-out");

    $(".sidebar.side").addClass("slide-out");
  });

  $("#open").on("click", function () {
    $(".dashborad-navbar").removeClass("slide-out");
    $(".sidebar.side").removeClass("slide-out");
  });

  // $("#datetimepicker1").data("DateTimePicker").show();

  // <div class="datepicker"><input type="text" autocomplete="off" name="date" id="date" placeholder="no"></input>
  // $("#date").datepicker({
  //   changeMonth: true,
  //   changeYear: true,
  //   dateFormat: "dd/mm/yy",
  //   yearRange: "-90:+00"
  // });
  // $("#date").datepicker("show");
});

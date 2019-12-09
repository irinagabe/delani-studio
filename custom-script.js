$(document).ready(function () {
  $("#design").click(function () {
    $("#design-icon").slideToggle(1000);
    $("#design-description").slideToggle(1000);
  });
  $("#dev").click(function () {
    $("#dev-icon").slideToggle(1000);
    $("#dev-description").slideToggle(1000);
  });
  $("#prod").click(function () {
    $("#prod-icon").slideToggle(1000);
    $("#prod-description").slideToggle(1000);
  });

  $(".project").hover(function () {
    $(this).css({ opacity: "0.65", transition: "1s" });
  },
    function () {
      $(this).css({ opacity: "1", transition: "1s" });
    }
  );
});
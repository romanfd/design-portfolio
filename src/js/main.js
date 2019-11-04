$(document).ready(function () {

  $(".moreBox").slice(0, 6).show();
  if ($(".blogBox:hidden").length != 0) {
    $("#loadMore").show();
  }

  $("#loadMore").on('click', function (e) {
    e.preventDefault();

    if (window.matchMedia('(min-width: 1181px)').matches) {
      $(".moreBox:hidden").slice(0, 3).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    } else if (window.matchMedia('(min-width: 770px)').matches) {
      $(".moreBox:hidden").slice(0, 2).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    } else {
      $(".moreBox:hidden").slice(0, 1).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    }
  });

  $(".burger-menu").click(function () {
    $(this).toggleClass("burger-menu--active");
  });

});

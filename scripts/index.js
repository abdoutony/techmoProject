$(function () {
  $("#spanm").each(function (index) {
    $(this).on("click", function () {
      $(".detailsImg").removeClass("rotatereverce");
      $(".detailsImg").addClass("rotate");
      $(".pizzaImg").removeClass("pizzaDefaultDim");
      $(".pizzaImg").addClass("pizzaEditedDim");
    });
  });
});

$(function () {
  $("#spane").each(function () {
    $(this).on("click", function () {
      $(".detailsImg").removeClass("rotate");
      $(".detailsImg").addClass("rotatereverce");
      $(".pizzaImg").removeClass("pizzaEditedDim");
      $(".pizzaImg").addClass("pizzaDefaultDim");
    });
  });
});

$(function () {
  $("#spanz").each(function () {
    $(this).on("click", function () {
      $(".tooping1").css({ width: "154px" });
    });
  });
});

$(function () {
  $("#spanc").each(function () {
    $(this).on("click", function () {
      $(".tooping3").css({ width: "190px" });
    });
  });
});

function takeMeToThanks() {
  location.href = "./thanks.html";
}




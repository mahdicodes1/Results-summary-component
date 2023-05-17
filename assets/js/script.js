$(document).ready(function () {
  // FETCHING DATA FROM JSON FILE
  $.getJSON("./assets/data/data.json", function (data) {
    var test = "";
    var total = 0; // For calculating the total that will use to calculate the result.
    var result = 0; // For calculating the average, which is called: result.
    ScrollReveal({ reset: true });
    $.each(data, function (key, value) {
      var testCategory = value.category; // Category value in the data.json file
      var iconSrc = value.icon; // icon value in the data.json file (sorce of icon)
      var backgroundClrTest = value.background; // background color value in the data.json file
      var colorTest = value.color; // color value in the data.json file
      test += "<tr>";
      test +=
        "<td id='" +
        testCategory +
        "'> <div class='test-name'>" +
        "<img src=" +
        iconSrc +
        ">" +
        value.category +
        "</div>" +
        "<div class='test-score'>" +
        value.score +
        "<span> / 100 </span>" +
        " </div></td>";

      test += "</tr>";
      $("#ability-test").append(test);

      $("#" + testCategory).css("background", backgroundClrTest);
      $("#" + testCategory + " .test-name").css("color", colorTest);

      total += value.score;
      test = "";
    });

    result = Math.round(total / 4); // Calculate the average, which is called: result.
    const resultText = document.querySelector(".result-pane .average-result p");
    $(resultText).text(result);

    //  Codes for animation

    // Animates result
    ScrollReveal().reveal(resultText, {
      distance: "150%",
      delay: 500,
      duration: 1000,
    });
    // Animates the status of the result that is Great!
    ScrollReveal().reveal(".result-description > h3", {
      distance: "150%",
      delay: 1000,
      duration: 1000,
    });
    // Animates the description of the result.
    ScrollReveal().reveal(".result-description > p", {
      distance: "150%",
      delay: 2000,
      duration: 1000,
    });

    const productDescription = document.querySelector("tbody"); // This variable saves all tr rows that contain data about the test.

    for (const child of productDescription.children) {
      child.classList.add("reveal-top");
    }
    // Animates test data
    ScrollReveal().reveal(".reveal-top", {
      distance: "150%",
      delay: 5000,
      duration: 1000,
      interval: 1750,
    });
    // Animates the button: Continue
    ScrollReveal().reveal(".summary-pane > button", {
      opacity: 0,
      delay: 12000,
      duration: 1000,
    });
    // ScrollReveal().clean(".summary-pane > button");
    // ScrollReveal().clean(".reveal-top");
    // ScrollReveal().clean(".result-description > p");
    // ScrollReveal().clean(".result-description > h3");
    // ScrollReveal().clean(resultText);
    //Solving conflict: The below code resolves the property (height) that ScrollReveal makes it height = 100%
    $("body").css("height", "100vh"); 
  });
    ScrollReveal().destroy();
});

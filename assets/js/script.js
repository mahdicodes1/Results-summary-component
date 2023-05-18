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
        " alt = " +
        testCategory +
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

    const resultDescriptionH3 = document.querySelector(
      ".result-description > h2"
    );
    const resultDescriptionP = document.querySelector(
      ".result-description > p"
    );
    const summaryPaneButton = document.querySelector(".summary-pane > button");
    // Animates result
    resultText.classList.add("reveal1");
    ScrollReveal().reveal(".reveal1", {
      distance: "150%",
      delay: 500,
      duration: 1000,
    });
    // Animates the status of the result that is Great!
    resultDescriptionH3.classList.add("reveal2");
    ScrollReveal().reveal(".reveal2", {
      distance: "150%",
      delay: 1000,
      duration: 1000,
    });
    // Animates the description of the result.
    resultDescriptionP.classList.add("reveal3");
    ScrollReveal().reveal(".reveal3", {
      distance: "150%",
      delay: 2000,
      duration: 1000,
    });

    const productDescription = document.querySelector("tbody"); // This variable saves all tr rows that contain data about the test.

    for (const child of productDescription.children) {
      child.classList.add("reveal4");
    }
    // Animates test data
    ScrollReveal().reveal(".reveal4", {
      distance: "150%",
      delay: 4000,
      duration: 750,
      interval: 1500,
    });
    // Animates the button: Continue
    summaryPaneButton.classList.add("reveal5");
    ScrollReveal().reveal(".reveal5", {
      opacity: 0,
      delay: 9500,
      duration: 1000, 
    });

    // Stopping animation
    ScrollReveal().reveal(".reveal1", {reset: false});
    ScrollReveal().reveal(".reveal2", { reset: false });
    ScrollReveal().reveal(".reveal3", { reset: false });
    for (const child of productDescription.children) {
      ScrollReveal().reveal(".reveal4", { reset: false });
    }
    ScrollReveal().reveal(".reveal5", { reset: false });

    //Solving conflict: The below code resolves the property (height) that ScrollReveal makes it height = 100%
    $("body").css("height", "100vh");
  });
});

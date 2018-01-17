
$("body").on("click", ".car", function(event) {
    event.preventDefault();
    $("#cars").empty();
    var currentCar = $(this).data("name");
    var apiURL = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10&q=" + currentCar;

    $.ajax({
        url: apiURL,
        method: 'GET'
    }).done(function(message) {
        var results = message.data;
        for (var i = 0; i < results.length; i++) {
            var carDiv = $("<div class='car-item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;

            var carImage = $("<img>");
            carImage.attr("src", still);
            carImage.attr("data-still", still);
            carImage.attr("data-animate", animated);
            carImage.attr("data-state", "still");
            carImage.addClass("car-image");

            carDiv.append(p);
            carDiv.append(carImage);

            $("#cars").append(carDiv);
}
    });
});

var cars = ["Corvette", "Mustang", "Charger", "Chevelle"];

function renderButtons() {
    $("#car-view").empty();

    for (var i = 0; i < cars.length; i++) {
        var a = $("<button>");
        a.addClass("car");
        a.attr("data-name", cars[i]);
        a.text(cars[i]);

        $("#car-view").append(a);
    }
}

$("#add-car").on("click", function (event) {
    event.preventDefault();

    var car = $("#car-input").val().trim();

    if (car === '') return;

    cars.push(car);

    $("#car-input").val("");

    renderButtons();
});

renderButtons();

$("body").on("click", ".car-image", function(event) {
    event.preventDefault();

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
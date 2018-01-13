

$("#car-button").on("click", function() {

      // Storing our giphy API URL for a random cat image
      var corvetteURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=corvette";

      //var mustangURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=mustang";

      //var carURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cars";

      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: corvetteURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var carImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        carImage.attr("src", imageUrl);
        carImage.attr("alt", "car image");

        // Prepending the catImage to the images div
        $("#images").prepend(carImage);
      });
    });

//==================code to add button================

/*var cars = ["Corvette", "Mustang", "Charger", "Chevelle"];

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#car-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < cars.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("car");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", cars[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(cars[i]);
          // Adding the button to the HTML
          $("#car-view").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#add-car").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var car = $("#car-input").val().trim();
        // The movie from the textbox is then added to our array
        cars.push(car);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();*/
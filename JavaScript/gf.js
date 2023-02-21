
//------------------------Images popping up------------------------
//Image Pop-Up
const links = document.querySelectorAll("a[data-image]");
const selectedImage = document.querySelector("#selected-image");
const imageContainer = document.querySelector(".image-container");


//Link for the image source
let currentLink = null;

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // prevent the default behavior of following the link
    if (link === currentLink) {
      imageContainer.classList.remove("visible");
      selectedImage.src = "";
      currentLink = null;
    } else { //Pressed
      selectedImage.src = link.getAttribute("data-image");
      imageContainer.classList.add("visible");
      currentLink = link;
    }
  });
});


//When image is clicked reddit post number one displays
selectedImage.addEventListener("click", function () {
  //From us to the reddit post
  if (selectedImage.src.endsWith("buttons/switch.jpg")) {
    selectedImage.src = "photos/buttons/reddit1.jpg";
  }
  //From the reddit post back to us
  else {
    selectedImage.src = "photos/buttons/switch.jpg";
  }
});





//------------------------Count down clock------------------------


// Set the date we're counting down to
var countDownDate = new Date("Apr 8, 2023 00:00:00").getTime();

// Get the countdown timer element
var countdownEl = document.getElementById("countdown");

// Update the countdown every 1 second
var x = setInterval(function () {

  // Get the current time
  var now = new Date().getTime();

  // Find the time remaining between now and the countdown date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with the corresponding ID
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message and hide the countdown timer
  if (distance < 0) {
    clearInterval(x);
    countdownEl.innerHTML = "It's finally here!";
    countdownEl.style.display = "none";
  }
}, 1000);


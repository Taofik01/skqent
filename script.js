// Set the date we're counting down to
var countDownDate = new Date("July 14, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "<h1>Countdown Expired!</h1>";
  }
}, 1000);

// Function to add leading zeros to numbers
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

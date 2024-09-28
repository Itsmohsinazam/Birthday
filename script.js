// Set the date we're counting down to
let countdownDate = new Date("Sep 21, 2025 00:00:00").getTime();

// Update the countdown every 1 second
let countdownInterval = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the countdown date
    let distance = countdownDate - now;

    // Calculate time components
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the timer element
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the countdown is finished, show the video, balloons, and message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "";
        document.getElementById("celebration").classList.remove("hidden");
        
        // Play the video when the timer ends
        document.getElementById("birthday-video").play();
        
        // Remove or hide the heading
        document.getElementById("heading").style.display = "none";
    }

}, 1000);

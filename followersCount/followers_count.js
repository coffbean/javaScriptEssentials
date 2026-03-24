let totalFollowers = 0; // Initialize count to 0
const countDisplay = document.getElementById("countDisplay");

function increaseCount () {
    totalFollowers++; // Increment count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check for milestone follower count and show alerts accordingly
}

function displayCount() {
    countDisplay.innerHTML = totalFollowers;
}

function checkCountValue () {   
    if (totalFollowers === 10) {
        alert ("Oh, shit! You've reached the 10-follower milestone! Let's go!");
    } else if (totalFollowers ===20) {
        alert ("Wait...! Stop the presses! You've got a whole 20 followers now! Let's fucking goooooooo!");
    }
}
// JavaScript for Continuously Rotating Speedometer Needle
const needle = document.querySelector('.needle');

// Function to update the rotation angle continuously
function updateSpeedometer() {
    // Set the rotation angle to continuously increase
    const maxRotation = 150; // Maximum rotation angle (adjust as needed)
    const minRotation = -150; // Minimum rotation angle (adjust as needed)
    let rotation = 0; // Initial rotation angle

    // Continuously update the rotation angle
    setInterval(() => {
        rotation += 1; // Adjust the rotation speed as needed

        // Reset rotation angle when it exceeds the maximum
        if (rotation > maxRotation) {
            rotation = minRotation;
        }

        // Update the needle rotation
        needle.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
    }, 20); // Adjust the interval for smoother or faster rotation
}

// Call the function to start continuous rotation
updateSpeedometer();
//<!... Coded By Syed Arshiya Anjum and Atheeq Ahmed In Internal Smart India Hackathon ...!>

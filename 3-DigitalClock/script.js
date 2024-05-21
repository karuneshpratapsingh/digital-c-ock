// Function to update the clock
function updateClock() {
  // Get the current date and time
  const now = new Date();
  
  // Extract hours, minutes, and seconds
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  // Format time as HH:MM:SS
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  // Display the formatted time in the clock div
  document.getElementById('clock').textContent = formattedTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately when the page loads
updateClock();

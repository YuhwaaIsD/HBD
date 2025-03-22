     document.addEventListener('DOMContentLoaded', function () {
         changeMessage(); // Call the function on page load
         document.getElementById('changeMessageButton').addEventListener('click', changeMessage); // Add event listener to button
      });
      document.addEventListener('DOMContentLoaded', function () {
         changePresent(); // Call the function on page load
         document.getElementById('presentButton').addEventListener('click', changePresent); // Add event listener to button
      });

      document.addEventListener('DOMContentLoaded', function () {
         start(); // Call the function on page load
         document.getElementById('start').addEventListener('click', start); // Add event listener to button
      });

      document.getElementById('container').style.display = "block";
      document.getElementById('contain').style.display = "none";
      document.getElementById('contains').style.display = "none";

     function start(){
           const audio = document.getElementById('birthdaySong');
           document.getElementById('container').style.display = "none";
           document.getElementById('contain').style.display = "block";
           document.getElementById('contains').style.display = "none";
           audio.play();
      }

      const messages = [
         "Ingat Sesuatu?",
         "2025-1975 berapa ya?",
         "Waduh udah 50 tuh",
         "Selamat Ulang Tahun Mama",
         "Semoga mama sehat selalu "
      ];
      let currentIndex = 0; // Initialize current index

      // Function to change the message in the message box
      function changeMessage() {
         const messageBox = document.getElementById('messageBox');
         messageBox.textContent = messages[currentIndex]; // Display the current message
         currentIndex++; // Move to the next message
         if (currentIndex >= messages.length) { // Reset if at the end
           document.getElementById('container').style.display = "none";
           document.getElementById('contain').style.display = "none";
           document.getElementById('contains').style.display = "block";
         }
      }

      function changePresent() {
         window.location('https://wa.me/+6285827653860?text=Halooo');
      }

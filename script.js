     document.getElementById('container').style.display = "block";
      document.getElementById('contain').style.display = "none";
      document.getElementById('contains').style.display = "none";

     document.addEventListener('DOMContentLoaded', function () {
         changeMessage(); // Call the function on page load
         document.getElementById('changeMessageButton').addEventListener('click', changeMessage); // Add event listener to button
      });

     function start(){
           const audio = document.getElementById('birthdaySong');
           document.getElementById('container').style.display = "none";
           document.getElementById('contain').style.display = "block";
           document.getElementById('contains').style.display = "none";
           audio.play();
      }

      const messages = [
         "Mama ingat sesuatu gaa?",
         "2025-1975 berapa ya?",
         "Yepp benerrr 50",
         "Selamat Ulang Tahun Mama",
         "Semoga mama sehat selalu ",
         "Selalu bahagia dan sayang Dharma sama wawa yaa 🥰🥰",
         "Thay Shang Bao You"
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

     function present(){
          Swal.fire({
                title: 'Yeay!',
                text: 'Mama Cayang Dharma',
                icon: 'success',
                confirmButtonText: 'Tell Me!'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'https://wa.me/+6285827653860?text=Mama Cayang Dharmaa Muachh 🥰💗';
                }
            });
     }

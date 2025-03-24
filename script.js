document.getElementById('container').style.display = "block";
document.getElementById('contain').style.display = "none";
document.getElementById('contains').style.display = "none";

document.addEventListener('DOMContentLoaded', function () {
     changeMessage(); // Call the function on page load
     document.getElementById('changeMessageButton').addEventListener('click', changeMessage); // Add event listener to button
});

function start(){
     const audio = document.getElementById('birthdaySong');
     audio.volume = 0.6;
     document.getElementById('container').style.display = "none";
     document.getElementById('contain').style.display = "block";
     document.getElementById('contains').style.display = "none";

     const container = event.target.parentElement;
     const offsets = [-300, 500]; // Left and right offsets

         offsets.forEach(offsetX => {
            for (let i = 0; i < 20; i++) {
               const confetti = document.createElement("div");
               confetti.classList.add("confetti");
               confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
               confetti.style.setProperty("--x", `${Math.random() * 300 - 150 + offsetX}px`);
               confetti.style.setProperty("--y", `${Math.random() * 300 - 150}px`);
               container.appendChild(confetti);
               setTimeout(() => confetti.remove(), 1500);
            }
         });
     
     audio.play();
}

const messages = [
     "Mama ingat sesuatu gaa?",
     "2025-1975 berapa ya?",
     "Yepp benerrr 50",
     "Ciee ulang tahunn",
     "Selamat Ulang Tahun Ya Mama",
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
          confirmButtonText: 'Kasih Tahu Dharma'
          }).then((result) => {
               if (result.isConfirmed) {
                    window.location.href = 'https://wa.me/+6285827653860?text=Mama Cayang Bangett Sama Dharmaa Muachh 🥰💗';
               }
          });
}

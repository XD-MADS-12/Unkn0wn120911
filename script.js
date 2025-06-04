// Initialize AOS
AOS.init();

// EmailJS setup
emailjs.init("dsCznFirAjuJr84Ng");

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm('service_evf73x3', 'template_24u275j', this)
    .then(() => alert("Message sent!"), (err) => alert("Failed to send!"));
  this.reset();
});

// Modal functions
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Visitor counter (localStorage based)
let visits = localStorage.getItem("visitCount") || 0;
visits++;
localStorage.setItem("visitCount", visits);
document.getElementById("visitor-count").innerText = visits;

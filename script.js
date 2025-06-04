// ====== script.js ======

// AOS Init AOS.init();

// EmailJS Init (function() { emailjs.init("dsCznFirAjuJr84Ng"); })();

document.getElementById("contact-form")?.addEventListener("submit", function (e) { e.preventDefault(); emailjs.sendForm("service_evf73x3", "template_24u275j", this) .then(() => alert("Message sent successfully!")) .catch(() => alert("Failed to send message. Please try again.")); this.reset(); });

// Visitor Counter fetch("https://api.countapi.xyz/hit/team-mads/visits") .then(res => res.json()) .then(data => { document.getElementById("visitor-count").innerText = data.value; });

// Modal Handling function openModal(id) { document.getElementById(id).style.display = "block"; }

function closeModal(id) { document.getElementById(id).style.display = "none"; }

// Terminal Animation const terminalText = [ "Welcome to TEAM MADS!", "I'm Atik Hasan — Unkn0wn 120911", "Full-Stack Developer | Security Enthusiast" ];

const terminalContainer = document.getElementById("terminal-bg");

if (terminalContainer) { const lines = document.createElement("div"); lines.classList.add("terminal-text");

terminalText.forEach((text, index) => { const span = document.createElement("span"); span.style.animationDelay = ${index * 2}s; span.textContent = text; lines.appendChild(span); });

terminalContainer.appendChild(lines); }

// Close modals on click outside window.onclick = function (event) { const modals = document.querySelectorAll(".modal"); modals.forEach(modal => { if (event.target === modal) { modal.style.display = "none"; } }); };

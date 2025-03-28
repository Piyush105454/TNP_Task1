// Dark Mode Toggle
        document.getElementById('darkModeToggle').addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

        // Hamburger Menu Toggle
        document.getElementById('menuToggle').addEventListener('click', () => {
            document.getElementById('navLinks').classList.toggle('show');
        });
    
    
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Open Image Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `<img src="${imageSrc}" style="max-width:100%;border-radius:10px;">`;
    lightbox.onclick = () => document.body.removeChild(lightbox);
    document.body.appendChild(lightbox);
}

// Form Submission Alert
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Registration Successful!");
});

<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

// Initialize EmailJS
emailjs.init('iONSFgNwdj5CqOC4i');

// Contact Form
const form = document.getElementById('contactForm');
const notification = document.getElementById('notification');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    emailjs.sendForm('service_i37nw48', 'template_gnfcazh', this)
        .then(() => {
            btn.textContent = 'Send Message';
            btn.disabled = false;

            // Show notification
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);

            form.reset();
        }, (err) => {
            btn.textContent = 'Send Message';
            btn.disabled = false;
            alert('Failed to send message. Please try again.');
            console.error(err);
        });
});

// Scroll to Top
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Resume download with animation
const resumeBtn = document.getElementById('downloadResume');
if (resumeBtn) {
    resumeBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

        // Trigger download
        const link = document.createElement('a');
        link.href = 'assets/AkhileshVadakkekkaraResume.pdf';
        link.download = 'AkhileshVadakkekkaraResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show success feedback
        const icon = this.querySelector('.download-icon');
        const originalPath = icon.querySelector('path').getAttribute('d');
        // Change to checkmark
        icon.querySelector('path').setAttribute('d', 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z');

        setTimeout(() => {
            icon.querySelector('path').setAttribute('d', originalPath);
        }, 1500);
    });
}

// Add ripple animation style
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(20);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);


// mail msg
// Initialize EmailJS with your public key (user ID)

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_i37nw48';
   const templateID = 'template_gnfcazh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
    //   alert('Sent!');
    showNotification();
     document.getElementById('form').reset();

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



function showNotification() {
    const note = document.getElementById('notification');
    note.style.display = 'block';

    setTimeout(() => {
        note.style.display = 'none';
    }, 3000);
}




const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll animation
const animatedElements = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.1
});

animatedElements.forEach(el => {
    el.classList.add('animate');
    observer.observe(el);
});





document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadResume");
  
    downloadBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = "assets/AkhileshVadakkekkaraResume.pdf";
      link.download = "AkhileshVadakkekkaraResume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
  
  


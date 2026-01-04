// Mobile menu toggle only
function toggleMobileMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu')?.classList.remove('active');
    });
});

// Contact form validation (pure JS - no libraries)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Clear errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
        let valid = true;
        
        // Name validation
        if (name.length < 2) {
            document.getElementById('nameError').textContent = 'Name must be 2+ characters';
            valid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Valid email required';
            valid = false;
        }
        
        // Message validation
        if (message.length < 10) {
            document.getElementById('messageError').textContent = 'Message must be 10+ characters';
            valid = false;
        }
        
        // Success
        if (valid) {
            document.getElementById('formSuccess').style.display = 'block';
            form.reset();
            form.scrollIntoView({ behavior: 'smooth' });
            
            // Hide success after 5s
            setTimeout(() => {
                document.getElementById('formSuccess').style.display = 'none';
            }, 5000);
        }
    });
    
    // Active page highlighting
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});

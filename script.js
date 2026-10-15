// Hamburger menu toggle for mobile
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const warrantySection = document.getElementById('warranty');
const warrantyNavBtn = document.getElementById('warrantyNavBtn');
const closeWarrantyBtn = document.getElementById('closeWarrantyBtn');
const footerWarrantyLink = document.querySelector('.footerWarrantyLink');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('open');
});

// Show warranty section only on click
function showWarranty(e) {
    e.preventDefault();
    warrantySection.classList.add('active-warranty');
    
    // Smooth scroll to warranty section
    warrantySection.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu if open
    navMenu.classList.remove('active');
    hamburgerBtn.classList.remove('open');
}

warrantyNavBtn.addEventListener('click', showWarranty);
if (footerWarrantyLink) {
    footerWarrantyLink.addEventListener('click', showWarranty);
}

// Hide warranty section when close button is clicked
closeWarrantyBtn.addEventListener('click', () => {
    warrantySection.classList.remove('active-warranty');
});

// Close mobile menu on regular link click with a slight delay for smooth scrolling
document.querySelectorAll('.nav-menu a:not(#warrantyNavBtn)').forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('open');
        }, 150);
    });
});
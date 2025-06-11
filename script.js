// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Set active navigation link
    setActiveNavLink();

    // Initialize mobile nav if needed
    if (window.innerWidth <= 768) {
        initMobileNav();
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                initMobileNav();
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenu = document.querySelector('nav ul.show');
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn.active');
                if (mobileMenu && mobileMenuBtn) {
                    mobileMenu.classList.remove('show');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });

    // Add animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature, .info-box, .program-card, .gallery-item, .news-item');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };

    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Run once on page load
    animateOnScroll();
});


// Function to set the active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();

    // Remove all active classes first
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Set active class based on current page
        if (currentPage === '' || currentPage === 'index.html') {
            document.getElementById('nav-home')?.classList.add('active');
        } else if (currentPage === 'schedule.html') {
            document.getElementById('nav-schedule')?.classList.add('active');
        } else if (currentPage === 'kids.html') {
            document.getElementById('nav-kids')?.classList.add('active');
        } else if (currentPage === 'gym.html') {
            document.getElementById('nav-gym')?.classList.add('active');
        } else if (currentPage === 'news.html') {
            document.getElementById('nav-news')?.classList.add('active');
        }
    }
}

// Function to initialize mobile navigation
function initMobileNav() {
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header');

    if (!nav || !header || document.querySelector('.mobile-menu-btn')) return;

    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';

    // Insert the button at the beginning of the header for proper positioning
    header.insertBefore(mobileMenuBtn, header.firstChild);

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target) && nav.classList.contains('show')) {
            nav.classList.remove('show');
            mobileMenuBtn.classList.remove('active');
        }
    });

    // Ensure the menu is hidden by default on mobile
    if (window.innerWidth <= 768) {
        nav.classList.remove('show');
    }
}
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.header-mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    // Toggle mobile menu
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (mobileMenuOverlay) {
                const isOpen = mobileMenuOverlay.classList.contains('active');
                if (isOpen) {
                    mobileMenuOverlay.classList.remove('active');
                    mobileMenuOverlay.style.display = 'none';
                } else {
                    mobileMenuOverlay.classList.add('active');
                    mobileMenuOverlay.style.display = 'flex';
                }
            }
        });
    }
    
    // Close mobile menu
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function(e) {
            e.preventDefault();
            if (mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('active');
                mobileMenuOverlay.style.display = 'none';
            }
        });
    }
    
    // Close menu when clicking outside
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('active');
                mobileMenuOverlay.style.display = 'none';
            }
        });
    }
});
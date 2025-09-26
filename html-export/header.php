<div class="header-section">
    <!-- Mobile top bar with 18+ logo and warning text -->
    <div class="header-top-bar-mobile">
        <div class="header-top-text-mobile">
            Jouer Comporte des Risques: Endettement, Isolement, Dépendance. Pour être aidé, appelez le 09-74-75-13-13 (Appel non surtaxé)
        </div>
        <div class="header-top-age-mobile">
            <img src="images/18+ logo.png" alt="18+ Age Restriction" />
        </div>
    </div>
    
    <div class="header-main">
        <div class="header-logo">
            <img src="images/megabet logo.png" alt="Megabet Logo" />
        </div>
        <div class="header-mobile-menu" onclick="toggleMobileMenu()"></div>
        
        <!-- Desktop elements - hidden on mobile -->
        <div class="header-age-restriction">
            <img src="images/18+ logo.png" alt="18+ Age Restriction" />
        </div>
    </div>
<!-- Desktop navigation - hidden on mobile -->
<nav class="header-navigation">
    <a href="index.php" class="nav-button active">
        <span class="nav-text nav-text-home">HOMEPAGE</span>
    </a>
    <a href="basketball.php" class="nav-button basketball">
        <span class="nav-text nav-text-basketball">BASKETBALL</span>
    </a>
    <a href="nba.php" class="nav-button nba">
        <span class="nav-text nav-text-nba">NBA</span>
    </a>
</nav>

<!-- Mobile Navigation Menu -->
<div class="mobile-menu-overlay" id="mobileMenuOverlay">
    <nav class="mobile-navigation">
        <a href="index.php" class="mobile-nav-button active">
            <span class="mobile-nav-text">ACCUEIL</span>
        </a>
        <a href="basketball.php" class="mobile-nav-button">
            <span class="mobile-nav-text">BASKETBALL</span>
        </a>
        <a href="nba.php" class="mobile-nav-button">
            <span class="mobile-nav-text">NBA</span>
        </a>
    </nav>
</div>

<script>
function toggleMobileMenu() {
    const overlay = document.getElementById('mobileMenuOverlay');
    overlay.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const overlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuButton = document.querySelector('.header-mobile-menu');
    
    if (!overlay.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        overlay.classList.remove('active');
    }
});
</script>

</div>
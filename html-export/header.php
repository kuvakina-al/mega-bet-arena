<div class="header-top-bar">
    <div class="header-top-text">
        Jouer Comporte des Risques: Endettement, Isolement, Dépendance. Pour être aidé, appelez le 09-74-75-13-13 (Appel non surtaxé)
    </div>
</div>

<div class="header-main">
    <div class="header-logo" onclick="window.location.reload();">
        <svg width="75.43" height="80" viewBox="0 0 75.43 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="75.43" height="80" rx="5" fill="#FFFFFF"/>
            <rect x="19.13" y="2.06" width="37.17" height="23.62" fill="#EF5908"/>
            <rect x="0" y="27.3" width="75.43" height="52.7" fill="#101C41"/>
            <rect x="17.86" y="0" width="39.71" height="26" fill="#101C41"/>
            <rect x="8.3" y="10.43" width="10.08" height="12.17" fill="#101C41"/>
            <rect x="57.05" y="10.53" width="10.08" height="12.17" fill="#101C41"/>
            <rect x="58.25" y="15.41" width="5.61" height="10.03" fill="#101C41"/>
            <rect x="12.98" y="15.41" width="4.21" height="10.15" fill="#101C41"/>
            <rect x="23.25" y="47.5" width="6.22" height="5.52" fill="#101C41"/>
            <rect x="30.39" y="47.5" width="7.84" height="5.51" fill="#101C41"/>
            <rect x="37.11" y="47.5" width="7.84" height="5.49" fill="#101C41"/>
            <rect x="43.82" y="47.5" width="7.84" height="5.49" fill="#101C41"/>
            <rect x="17.93" y="49.68" width="4.33" height="3.08" fill="#101C41"/>
            <rect x="52.46" y="49.67" width="4.21" height="3.1" fill="#101C41"/>
            <rect x="51.63" y="38.07" width="3.46" height="2.74" fill="#101C41"/>
            <rect x="51.63" y="32.73" width="3.16" height="3.65" fill="#101C41"/>
            <rect x="41.23" y="33.93" width="8.25" height="3.01" fill="#101C41"/>
        </svg>
    </div>
    
    <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
        <div class="mobile-menu-line"></div>
        <div class="mobile-menu-line"></div>
        <div class="mobile-menu-line"></div>
    </button>
    
    <nav class="header-nav" id="header-nav">
        <a href="index.php" class="nav-button nav-button-home <?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? 'active' : ''; ?>">
            <span class="nav-text nav-text-home">Accueil</span>
        </a>
        <a href="basketball.php" class="nav-button nav-button-basketball <?php echo (basename($_SERVER['PHP_SELF']) == 'basketball.php') ? 'active' : ''; ?>">
            <span class="nav-text nav-text-basketball">Basketball</span>
        </a>
        <a href="nba.php" class="nav-button nav-button-nba <?php echo (basename($_SERVER['PHP_SELF']) == 'nba.php') ? 'active' : ''; ?>">
            <span class="nav-text nav-text-nba">NBA</span>
        </a>
    </nav>
</div>

<script>
    function toggleMobileMenu() {
        const nav = document.getElementById('header-nav');
        const toggle = document.querySelector('.mobile-menu-toggle');
        nav.classList.toggle('mobile-open');
        toggle.classList.toggle('open');
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.getElementById('header-nav');
        const toggle = document.querySelector('.mobile-menu-toggle');
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggle = toggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('mobile-open')) {
            nav.classList.remove('mobile-open');
            toggle.classList.remove('open');
        }
    });
</script>
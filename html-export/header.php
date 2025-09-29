<?php 
// Get current page name for active states
$current_page = basename($_SERVER['PHP_SELF'], '.php');
?>

<div class="header-section">
    <!-- Desktop Warning Bar -->
    <div class="header-warning">
        <div class="header-warning-text">
            Jouer Comporte des Risques: Endettement, Isolement, Dépendance. Pour être aidé, appelez le 09-74-75-13-13 (Appel non surtaxé)
        </div>
    </div>
    
    <!-- Header Main -->
    <div class="header-main">
        <!-- 18+ Badge - Left Position -->
        <div class="header-age-restriction">
            <img src="images/18+ logo.png" alt="18+ Age Restriction" />
        </div>
        
        <!-- Logo - Center Left Position -->
        <div class="header-logo">
            <img src="images/megabet logo.png" alt="Megabet Logo" />
        </div>
        
        <!-- Desktop Navigation - Center Position -->
        <nav class="header-navigation">
            <a href="index.php" class="nav-button <?php echo ($current_page == 'index') ? 'active' : ''; ?>">
                <span class="nav-text nav-text-home">ACCUEIL</span>
            </a>
            <a href="basketball.php" class="nav-button <?php echo ($current_page == 'basketball') ? 'active' : ''; ?>">
                <span class="nav-text nav-text-basketball">BASKETBALL</span>
            </a>
            <a href="nba.php" class="nav-button <?php echo ($current_page == 'nba') ? 'active' : ''; ?>">
                <span class="nav-text nav-text-nba">NBA</span>
            </a>
        </nav>
        
        <!-- Mobile menu toggle - Only visible on mobile -->
        <a href="<?php echo basename($_SERVER['PHP_SELF']); ?>?menu=<?php echo $isMenuOpen ? 'close' : 'open'; ?>" class="header-mobile-menu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </a>
    </div>

    <!-- Mobile Navigation Menu - Only visible on mobile -->
    <?php
    $isMenuOpen = isset($_GET['menu']) && $_GET['menu'] == 'open';
    ?>
    <div class="mobile-menu-overlay <?php echo $isMenuOpen ? 'active' : ''; ?>" <?php echo $isMenuOpen ? 'style="display: flex;"' : 'style="display: none;"'; ?>>
        <!-- Mobile header replica in menu -->
        <div class="mobile-menu-header">
            <div class="header-logo">
                <img src="images/megabet logo.png" alt="Megabet Logo" />
            </div>
            <a href="<?php echo basename($_SERVER['PHP_SELF']); ?>" class="mobile-menu-close">✕</a>
        </div>
        
        <nav class="mobile-navigation">
            <a href="index.php" class="mobile-nav-button <?php echo ($current_page == 'index') ? 'active' : ''; ?>">
                <span class="mobile-nav-text">ACCUEIL</span>
            </a>
            <a href="basketball.php" class="mobile-nav-button <?php echo ($current_page == 'basketball') ? 'active' : ''; ?>">
                <span class="mobile-nav-text">BASKETBALL</span>
            </a>
            <a href="nba.php" class="mobile-nav-button <?php echo ($current_page == 'nba') ? 'active' : ''; ?>">
                <span class="mobile-nav-text">NBA</span>
            </a>
        </nav>
    </div>
</div>
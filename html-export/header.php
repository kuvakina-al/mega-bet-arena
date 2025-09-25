<?php
$current_page = basename($_SERVER['PHP_SELF'], '.php');
?>

<div class="header-section">
    <div class="header-top-bar">
        <div class="header-top-text">
            Jouer Comporte des Risques: Endettement, Isolement, Dépendance. Pour être aidé, appelez le 09-74-75-13-13 (Appel non surtaxé)
        </div>
        <div class="header-top-age">
            <div class="header-top-age-circle"></div>
            <div class="header-top-age-number">18</div>
            <div class="header-top-age-plus"></div>
        </div>
    </div>

    <!-- Mobile Menu Toggle -->
    <input type="checkbox" id="mobile-menu-toggle" class="mobile-menu-toggle">
    
    <!-- Mobile Menu Overlay for closing -->
    <label for="mobile-menu-toggle" class="mobile-menu-overlay"></label>

    <div class="header-main">
        <div class="header-logo"></div>
        
        <!-- Mobile Menu Button -->
        <label for="mobile-menu-toggle" class="mobile-menu-label"></label>
        
        <!-- Desktop Age Restriction -->
        <div class="header-age-restriction">
            <div class="header-age-circle"></div>
            <div class="header-age-number">18</div>
            <div class="header-age-plus">+</div>
        </div>
    </div>

    <!-- Desktop Navigation -->
    <nav class="header-navigation">
        <a href="index.php" class="nav-button <?php echo ($current_page == 'index') ? 'active' : ''; ?>">
            <span class="nav-text nav-text-home">ACCUEIL</span>
        </a>
        <a href="basketball.php" class="nav-button basketball <?php echo ($current_page == 'basketball') ? 'active' : ''; ?>">
            <span class="nav-text nav-text-basketball">BASKETBALL</span>
        </a>
        <a href="nba.php" class="nav-button nba <?php echo ($current_page == 'nba') ? 'active' : ''; ?>">
            <span class="nav-text nav-text-nba">NBA</span>
        </a>
    </nav>

    <div class="header-links">
        <a href="mentions-legales-conditions.php" class="header-link">
            <span class="header-link-text">Mentions Légales</span>
        </a>
        <a href="politique-protection-donnees.php" class="header-link">
            <span class="header-link-text">Protection des Données</span>
        </a>
        <a href="jeu-responsable-informations.php" class="header-link">
            <span class="header-link-text">Jeu Responsable</span>
        </a>
        <a href="regulation-francaise-jeux-en-ligne.php" class="header-link">
            <span class="header-link-text">Régulation Française</span>
        </a>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu">
        <div class="mobile-menu-header">
            <div class="header-logo"></div>
            <label for="mobile-menu-toggle" class="mobile-menu-label">✕</label>
        </div>
        
        <div class="mobile-menu-content">
            <a href="index.php" class="mobile-nav-button <?php echo ($current_page == 'index') ? 'active' : ''; ?>">
                <span class="mobile-nav-text">ACCUEIL</span>
            </a>
            <a href="basketball.php" class="mobile-nav-button <?php echo ($current_page == 'basketball') ? 'active' : ''; ?>">
                <span class="mobile-nav-text">BASKETBALL</span>
            </a>
            <a href="nba.php" class="mobile-nav-button <?php echo ($current_page == 'nba') ? 'active' : ''; ?>">
                <span class="mobile-nav-text">NBA</span>
            </a>
        </div>
    </div>
</div>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paris Sportifs en Ligne | Comparatifs, Pronostics &amp; Bonus | Mega Bet 3000</title>
    <meta name="description" content="Explorez le meilleur des paris sportifs avec Mega Bet 3000: comparatifs, pronostics détaillés, conseils d'experts et engagement pour un jeu responsable.">
    <meta name="robots" content="noindex, nofollow">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Saira:wght@100;200;300;400;500;600;700;800;900&family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Saira+Semi+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/cards.css">
    <link rel="stylesheet" href="css/text_container.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <?php $current_page = 'index'; ?>
    <!-- Hidden checkbox for mobile menu toggle -->
    <input type="checkbox" id="mobile-menu-toggle" />
    
    <!-- Mobile Navigation Menu Overlay -->
    <div class="mobile-menu-overlay">
        <div class="mobile-menu-header">
            <div class="header-logo">
                <img src="images/megabet logo.png" alt="Megabet Logo" />
            </div>
            <label for="mobile-menu-toggle" class="mobile-menu-close">✕</label>
        </div>
        
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
    
    <div class="site-wrapper">
        <!-- Desktop Warning Bar -->
        <div class="header-warning">
            <div class="header-warning-text">
                Jouer Comporte des Risques: Endettement, Isolement, Dépendance. Pour être aidé, appelez le 09-74-75-13-13 (Appel non surtaxé)
            </div>
        </div>
        
        <div class="site-content">
            <!-- Hero Section with Header, Background and Cards -->
            <section class="hero-section">
                <!-- Desktop Header -->
                <?php include 'header.php'; ?>
                
                <!-- Background Layers -->
                <div class="hero-bg-blur"></div>
                <div class="hero-gradient-overlay"></div>
                <div class="hero-fg-image"></div>
                <div class="hero-bottom-gradient"></div>
                
                <!-- Mobile top bar with warning -->
                <div class="header-top-bar-mobile">
                    <div class="header-top-age-mobile">
                        <img src="images/18+ logo.png" alt="18+ Age Restriction" />
                    </div>
                    <div class="header-top-text-mobile">
                        Jouer Comporte des Risques: Endettement, Isolement, Dépendance. Pour être aidé, appelez le 09-74-75-13-13 (Appel non surtaxé)
                    </div>
                </div>
                
                <!-- Mobile header container with logo and menu toggle -->
                <div class="mobile-logo-toggle-container">
                    <div class="mobile-logo">
                        <img src="images/megabet logo.png" alt="Megabet Logo" />
                    </div>
                    <label for="mobile-menu-toggle" class="mobile-toggle-button">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </label>
                </div>
                
                <!-- Background image container with titles -->
                <div class="hero-header-container">
                    <!-- Hero Content Text -->
                    <h1 class="hero-title">Bienvenue sur Mega Bet <span class="mobile-break-inline"><br></span>3000</h1>
                    <p class="hero-subtitle">Votre Guide Ultime des Paris Sportifs Légaux en France</p>
                </div>

            </section>
            
            <?php include 'cards.php'; ?>

            <!-- Text Container Section comes after hero/cards -->
            <?php 
            require_once 'text_container.php';
            displayTextContainer('homepage'); 
            ?>
        </div>
        
        <!-- Footer comes after all content -->
        <?php include 'footer.php'; ?>
        
        <!-- Footer Bottom - Full Width -->
        <div class="footer-bottom">
            <div class="footer-bottom-text">
                © 2025 megabet3000.fr - Tous Droits Réservés<br>
                Appelez le 0800 35 777 (Belgique), 1-888-230-3505 (Canada), 09 74 75 13 13 (France), 0800 801 381 (Suisse).
            </div>
        </div>
    </div>
</body>
</html>
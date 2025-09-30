<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Politique de Protection des Données | Mega Bet 3000</title>
    <meta name="description" content="Consultez notre politique de protection des données conforme au RGPD. Découvrez comment Mega Bet 3000 protège votre vie privée et respecte vos droits.">
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
            <a href="index.php" class="mobile-nav-button">
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
                    <h1 class="hero-title">Protection des Données</h1>
                    <p class="hero-subtitle">Votre vie privée</p>
                </div>

            </section>
            
            <!-- Text Container Section -->
            <section class="text-container">
                <div class="text-box">
                    <h2 class="text-title">Collecte des données</h2>
                    <p class="text-content">Mega Bet 3000 ne collecte aucune donnée personnelle de ses visiteurs. Nous nous limitons à des informations statistiques anonymes via des cookies techniques nécessaires au bon fonctionnement du site.</p>
                </div>
                
                <div class="text-box">
                    <h2 class="text-title">Utilisation des cookies</h2>
                    <p class="text-content">Notre site utilise uniquement des cookies techniques et analytiques anonymes qui ne permettent pas l'identification des utilisateurs. Ces cookies nous aident à améliorer l'expérience utilisateur et à analyser le trafic de manière globale.</p>
                </div>
                
                <div class="text-box">
                    <h2 class="text-title">Partage des données</h2>
                    <p class="text-content">Aucune donnée personnelle n'étant collectée, nous ne partageons aucune information personnelle avec des tiers. Les liens vers les sites partenaires sont accompagnés de paramètres de suivi anonymes à des fins statistiques uniquement.</p>
                </div>
                
                <div class="text-box">
                    <h2 class="text-title">Vos droits RGPD</h2>
                    <p class="text-content">Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de portabilité, de limitation du traitement et d'opposition. Toutefois, ces droits ne s'appliquent pas dans notre cas puisque nous ne collectons aucune donnée personnelle.</p>
                </div>
                
                <div class="text-box">
                    <h2 class="text-title">Sécurité des données</h2>
                    <p class="text-content">Bien que nous ne collections pas de données personnelles, nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger les informations transitant par notre site.</p>
                </div>
                
                <div class="text-box">
                    <h2 class="text-title">Modifications de la politique</h2>
                    <p class="text-content">Nous nous réservons le droit de modifier cette politique de protection des données à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour.</p>
                </div>
                
                <div class="text-box">
                    <h2 class="text-title">Contact</h2>
                    <p class="text-content">Pour toute question concernant cette politique de protection des données, vous pouvez nous contacter via notre formulaire de contact.</p>
                    
                    <p class="legal-note text-content">Dernière mise à jour : Janvier 2025</p>
                </div>
            </section>
        </div>
        
        <!-- Footer comes after all content -->
        <?php include 'footer.php'; ?>
    </div>
</body>
</html>
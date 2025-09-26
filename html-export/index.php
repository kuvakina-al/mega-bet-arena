<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paris Sportifs en Ligne | Comparatifs, Pronostics & Bonus | Mega Bet 3000</title>
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
    <div class="site-wrapper">
        <div class="site-content">
            <!-- Hero Section with Header -->
            <section class="hero-section">
                <!-- Background Layers -->
                <div class="hero-bg-blur"></div>
                <div class="hero-gradient-overlay"></div>
                <div class="hero-fg-image"></div>
                <div class="hero-bottom-gradient"></div>
                
                <!-- Header in Hero -->
                <div class="hero-header-wrapper">
                    <?php include 'header.php'; ?>
                </div>
                
                <!-- Hero Content -->
                <h1 class="hero-title">Bienvenue sur Mega Bet 3000</h1>
                <p class="hero-subtitle">Votre Guide Ultime des Paris Sportifs Légaux en France</p>
            </section>

            <?php include 'cards.php'; ?>
            
            <?php 
            include 'text_container.php';
            render_homepage_content();
            ?>

            <?php include 'footer.php'; ?>
        </div>
        
        <!-- Age Restriction Badge -->
        <div class="age-restriction">
            <div class="age-circle">
                <span class="age-number">18</span>
                <div class="age-plus">+</div>
            </div>
        </div>
    </div>
</body>
</html>
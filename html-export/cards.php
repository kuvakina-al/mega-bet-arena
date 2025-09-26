<?php
// Bookmaker data array
$bookmakers = [
    [
        'name' => 'UNIBET',
        'logo' => 'unibet logo.png',
        'logo_class' => 'logo-unibet',
        'bonus_amount' => '100€',
        'bonus_text' => 'de bonus',
        'bonus_description' => '1er pari perdu remboursé',
        'rating' => '95%',
        'rating_width' => '95%',
        'url' => 'https://www.unibet.fr/?utm=k3j8m9n2p5'
    ],
    [
        'name' => 'PMU.fr',
        'logo' => 'pmus logo.png',
        'logo_class' => 'logo-pmu',
        'bonus_amount' => '100€',
        'bonus_text' => 'de bonus',
        'bonus_description' => '1er pari perdu remboursé',
        'rating' => '87%',
        'rating_width' => '87%',
        'url' => 'https://www.pmu.fr/?utm=r7x2v9k8n4'
    ],
    [
        'name' => 'NETBET',
        'logo' => 'netbet logo.png',
        'logo_class' => 'logo-netbet',
        'bonus_amount' => '100€',
        'bonus_text' => 'de bonus',
        'bonus_description' => '1er pari perdu remboursé',
        'rating' => '73%',
        'rating_width' => '73%',
        'url' => 'https://www.netbetsport.fr/?utm=q8w5e3r9t2'
    ]
];

// Payment methods array
$payment_methods = [
    ['icon' => 'visa logo.png', 'alt' => 'Visa'],
    ['icon' => 'mastercard logo.png', 'alt' => 'Mastercard'],
    ['icon' => 'paypal logo.png', 'alt' => 'PayPal'],
    ['icon' => 'neteller logo.png', 'alt' => 'Neteller'],
    ['icon' => 'skrill logo.png', 'alt' => 'Skrill'],
    ['icon' => 'apple pay logo.png', 'alt' => 'Apple Pay']
];
?>

<section class="cards-container">
    <?php foreach ($bookmakers as $bookmaker): ?>
    <div class="betting-card">
        <div class="card-content">
            <div class="card-logo <?= $bookmaker['logo_class'] ?>"></div>
            
            <div class="card-bonus">
                <div class="bonus-amount">
                    <span class="amount"><?= $bookmaker['bonus_amount'] ?></span>
                    <span class="bonus-text"><?= $bookmaker['bonus_text'] ?></span>
                </div>
                <div class="bonus-description"><?= $bookmaker['bonus_description'] ?></div>
            </div>
            
            <div class="trust-section">
                <div class="trust-content">
                    <div class="trust-header">
                        <span class="trust-label">Évaluation</span>
                        <span class="trust-percentage"><?= $bookmaker['rating'] ?></span>
                    </div>
                    <div class="trust-progress">
                        <div class="progress-bg"></div>
                        <div class="progress-fill" style="width: <?= $bookmaker['rating_width'] ?>;"></div>
                    </div>
                </div>
            </div>
            
            <div class="payment-methods">
                <?php foreach ($payment_methods as $method): ?>
                <div class="payment-method">
                    <img src="images/<?= $method['icon'] ?>" alt="<?= $method['alt'] ?>" />
                </div>
                <?php endforeach; ?>
            </div>
            
            <a href="<?= $bookmaker['url'] ?>" target="_blank" rel="noopener noreferrer" class="card-cta">
                <span class="cta-text">Débloquez le bonus</span>
            </a>
        </div>
    </div>
    <?php endforeach; ?>
</section>
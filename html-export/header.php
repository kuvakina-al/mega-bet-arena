<div class="header-section">
    <!-- Mobile top bar with 18+ logo and warning text -->
    <div class="header-top-bar-mobile">
        
        <div class="header-top-text-mobile">
            Jouer Comporte des Risques: Endettement, Isolement, Dépendance. Pour être aidé, appelez le 09-74-75-13-13 (Appel non surtaxé)
        </div>
    </div>
    
    <!-- Header Main -->
    <div class="header-main">
        <div class="header-logo">
            <img src="images/megabet logo.png" alt="Megabet Logo" />
        </div>
        
        <!-- CSS-only mobile menu toggle -->
        <input type="checkbox" id="mobile-menu-toggle" class="mobile-menu-checkbox">
        <label for="mobile-menu-toggle" class="header-mobile-menu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </label>
        
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
    <div class="mobile-menu-overlay">
        <!-- Mobile header replica in menu -->
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
</div>

<style>
/* CSS-only mobile menu styles */
.mobile-menu-checkbox {
    display: none;
}

@media (max-width: 480px) {
    .header-mobile-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 23px;
        cursor: pointer;
        z-index: 1001;
    }

    .hamburger-line {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #FFFFFF;
        margin: 2px 0;
        transition: 0.3s;
        transform-origin: center;
    }

    .mobile-menu-close {
        font-size: 24px;
        color: #FFFFFF;
        cursor: pointer;
        padding: 10px;
        background: none;
        border: none;
    }

    /* Mobile menu overlay positioning */
    .mobile-menu-overlay {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 20px;
        gap: 10px;
        position: fixed;
        width: 440px;
        height: 334px;
        left: 0;
        top: 0;
        background: #010D1D;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        transform: translateY(-100%);
    }

    /* Show menu when checkbox is checked */
    .mobile-menu-checkbox:checked + .header-mobile-menu + .header-age-restriction + .mobile-menu-overlay,
    .mobile-menu-checkbox:checked ~ .mobile-menu-overlay {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    /* Hamburger animation */
    .mobile-menu-checkbox:checked + .header-mobile-menu .hamburger-line:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-checkbox:checked + .header-mobile-menu .hamburger-line:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-checkbox:checked + .header-mobile-menu .hamburger-line:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    .mobile-menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        height: 80px;
    }

    .mobile-navigation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
        gap: 24px;
        isolation: isolate;
        width: 400px;
        height: 224px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .mobile-nav-button {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        gap: 10px;
        width: 376px;
        height: 52px;
        border-radius: 5px;
        text-decoration: none;
        transition: all 0.3s ease;
        flex: none;
        align-self: stretch;
        flex-grow: 0;
    }

    .mobile-nav-button:nth-child(1) {
        background: radial-gradient(72.41% 218.13% at 0% 4.06%, rgba(12, 130, 243, 0.3) 0%, rgba(12, 130, 243, 0) 100%), radial-gradient(70.76% 253.22% at 100% 100%, rgba(255, 0, 3, 0.3) 0%, rgba(255, 0, 3, 0) 100%), rgba(255, 255, 255, 0.1);
        background-blend-mode: screen, screen, overlay;
        border: 1px solid rgba(255, 255, 255, 0.4);
        order: 0;
    }

    .mobile-nav-button:nth-child(2) {
        background: rgba(255, 255, 255, 0.3);
        background-blend-mode: overlay;
        border: 1px solid rgba(255, 255, 255, 0.4);
        order: 1;
    }

    .mobile-nav-button:nth-child(3) {
        background: transparent;
        order: 2;
        height: 48px;
    }

    .mobile-nav-text {
        font-family: 'Saira';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 31px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .mobile-nav-button:nth-child(1) .mobile-nav-text {
        font-weight: 600;
        width: 80px;
    }

    .mobile-nav-button:nth-child(2) .mobile-nav-text {
        width: 126px;
    }

    .mobile-nav-button:nth-child(3) .mobile-nav-text {
        width: 42px;
    }
}
</style>
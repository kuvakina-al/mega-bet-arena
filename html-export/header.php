<div class="frame-2">
    <div class="jouer-comporte-des-wrapper">
        <p class="jouer-comporte-des">
            JOUER COMPORTE DES RISQUES: ENDETTEMENT, ISOLEMENT, DÉPENDANCE. POUR ÊTRE AIDÉ, APPELEZ LE
            09-74-75-13-13 (APPEL NON SURTAXÉ)
        </p>
    </div>
    <header class="header">
        <div class="logo"><img class="group" src="images/megabet logo.png" /></div>
        <div class="element">
            <div class="ellipse"></div>
            <div class="text-wrapper">18</div>
            <div class="div-wrapper"><div class="text-wrapper-2">+</div></div>
        </div>
        <div class="frame-3">
            <a href="index.php" class="menu-buttons"><div class="basketball">ACCUEIL</div></a>
            <a href="basketball.php" class="basketball-wrapper"><div class="basketball-2">BASKETBALL</div></a>
            <a href="nba.php" class="menu-buttons-2"><div class="basketball-3">NBA</div></a>
        </div>
    </header>
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
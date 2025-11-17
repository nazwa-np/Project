function scrollToBrowsers() {
    const browsersSection = document.getElementById('browsers');
    if (browsersSection) {
        browsersSection.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

function downloadBrowser(browser) {
    const browserUrls = {
        chrome: 'https://www.google.com/chrome/',
        firefox: 'https://www.mozilla.org/firefox/',
        edge: 'https://www.microsoft.com/edge',
        safari: 'https://www.apple.com/safari/',
        opera: 'https://www.opera.com/'
    };

    if (browserUrls[browser]) {
        window.open(browserUrls[browser], '_blank');
    }
}

function initBrowserCardEffects() {
    const browserCards = document.querySelectorAll('.browser-card');
    
    browserCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

function initDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initBrowserCardEffects();
    initDownloadButtons();
});

let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
    }, 250);
});

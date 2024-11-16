function loadOptimizedImage(src, alt, className, isLCP = false) {
    // Netlify Image Transform
    const netlifyUrl = `${src}?nf_resize=fit&w=400&h=300`;

    return `
        <img src="${netlifyUrl}"
             alt="${alt}"
             class="${className}"
             width="400"
             height="300"
             ${isLCP ? '' : 'loading="lazy"'}
             fetchpriority="${isLCP ? 'high' : 'auto'}"
             decoding="${isLCP ? 'sync' : 'async'}"
             onload="this.classList.add('opacity-100')">
    `;
}

// ฟังก์ชันสำหรับหา LCP image
function getLCPImageUrl(games) {
    if (!games || games.length === 0) return null;
    return games[0].image;
}

// ฟังก์ชันสำหรับ preload LCP image
function preloadLCPImage(imageUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.fetchPriority = 'high';
        img.src = imageUrl;
    });
}

// เพิ่มฟังก์ชันนี้
function preloadLCPImage(imageUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.fetchPriority = 'high';
        img.src = imageUrl;
    });
}

// เรียกใช้ฟังก์ชันเมื่อ JavaScript โหลด
document.addEventListener('DOMContentLoaded', () => {
    addPreloadHint();
    // Preload LCP image
    const lcpImage = 'images/games/pummel-party.webp';
    preloadLCPImage(lcpImage)
        .then(() => {
            console.log('LCP image preloaded successfully');
            displayGames();
        })
        .catch(error => {
            console.error('Failed to preload LCP image:', error);
            displayGames(); // Still display games even if preload fails
        });
}); 
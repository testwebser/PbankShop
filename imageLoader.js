function loadOptimizedImage(src, alt, className, isPriority = false) {
    return `
        <picture>
            <source srcset="${src.replace(/\.(jpg|png)$/, '.webp')}" 
                    type="image/webp">
            <img src="${src}" 
                 alt="${alt}" 
                 class="${className} opacity-0 transition-opacity duration-300"
                 ${isPriority ? 'fetchpriority="high" decoding="sync"' : 'loading="lazy" decoding="async"'}
                 onload="this.classList.add('opacity-100')">
        </picture>
    `;
}

// สร้างฟังก์ชันสำหรับหา LCP image
function getLCPImageUrl(games) {
    // ตรวจสอบว่ามีเกมอยู่ในอาร์เรย์หรือไม่
    if (!games || games.length === 0) return null;
    
    // ใช้รูปแรกเป็น LCP image
    return games[0].image.replace(/\.(jpg|png)$/, '.webp');
}

// สร้าง preload link tag แบบ dynamic
function createPreloadLink(imageUrl) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageUrl;
    link.type = 'image/webp';
    link.fetchPriority = 'high';
    return link;
}

// เพิ่ม preload hint แบบ dynamic
function addPreloadHint() {
    const lcpImageUrl = getLCPImageUrl(games);
    if (lcpImageUrl) {
        const preloadLink = createPreloadLink(lcpImageUrl);
        document.head.appendChild(preloadLink);
    }
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
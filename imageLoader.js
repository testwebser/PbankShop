function loadOptimizedImage(src, alt, className) {
    // ตรวจสอบว่าเป็นรูปในเว็บเราหรือไม่
    if (src.includes('images/')) {
        const webpUrl = src.replace(/\.(jpg|png)$/, '.webp');
        return `
            <picture>
                <source srcset="${webpUrl}" type="image/webp">
                <img src="${src}" 
                     alt="${alt}" 
                     class="${className}"
                     loading="lazy"
                     width="640"
                     height="192">
            </picture>
        `;
    } else {
        // สำหรับรูปจากภายนอกที่อาจมีเพิ่มเติมในอนาคต
        return `
            <img src="${src}" 
                 alt="${alt}" 
                 class="${className}"
                 loading="lazy"
                 decoding="async">
        `;
    }
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

// เรียกใช้ฟังก์ชันเมื่อ JavaScript โหลด
document.addEventListener('DOMContentLoaded', () => {
    addPreloadHint();
}); 
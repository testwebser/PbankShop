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
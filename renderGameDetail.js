function renderGameDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    const game = gameDetails[gameId];


    if (!game) {
        document.getElementById('game-detail').innerHTML = '<p>ไม่พบข้อมูลเกม</p>';
        return;
    }

    function renderDownloadLinks(links, title) {
        if (!links || (Array.isArray(links) && links.length === 0)) return '';
        
        if (Array.isArray(links) && links.length > 1) {
            return `
                <h4 class="font-bold mt-4 mb-2">${title}:</h4>
                <ul class="list-disc list-inside">
                    ${links.map((link, index) => `
                        <li>
                            <a href="${typeof link === 'string' ? link : link.url}" target="_blank" class="text-blue-500 hover:text-blue-700">
                                ${typeof link === 'string' ? 
                                    (title === "Patch" ? `Patch Part ${index + 1}` : `Part ${index + 1}`) : 
                                    link.name}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            `;
        } else {
            // กรณีที่มีลิงก์เดียว
            const link = Array.isArray(links) ? links[0] : links;
            return `
                <h4 class="font-bold mt-4 mb-2">${title}:</h4>
                <a href="${link}" target="_blank" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    ดาวน์โหลด ${title}
                </a>
            `;
        }
    }

    const gameDetailHTML = `
        ${loadOptimizedImage(game.image, game.title, "w-full h-64 object-cover")}
        <div class="p-6">
            <h2 class="text-3xl font-semibold mb-4">${game.title}</h2>
            <p class="text-gray-600 mb-6">${game.description}</p>
            
            <h3 class="text-xl font-semibold mb-2">คุณสมบัติเกม:</h3>
            <ul class="list-disc list-inside mb-6">
                ${game.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>

            <h3 class="text-xl font-semibold mb-2">ความต้องการของระบบ:</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <h4 class="font-bold mb-2">ขั้นต่ำ:</h4>
                    <ul class="list-disc list-inside">
                        ${game.systemRequirements.minimum.map(req => `<li>${req}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-2">แนะนำ:</h4>
                    <ul class="list-disc list-inside">
                        ${game.systemRequirements.recommended.map(req => `<li>${req}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <h3 class="text-xl font-semibold mb-4">ลิงก์ดาวน์โหลด:</h3>
            ${renderDownloadLinks(game.downloadLinks.game, "ตัวเกม")}
            ${game.downloadLinks.patch ? `
                <div class="mt-4">
                    ${renderDownloadLinks(game.downloadLinks.patch, "Patch")}
                </div>
            ` : ''}
            ${game.downloadLinks.language ? renderDownloadLinks(game.downloadLinks.language, "แพ็คภาษา") : ''}
            ${game.downloadLinks.bonusContent ? renderDownloadLinks(game.downloadLinks.bonusContent, "เนื้อหาโบนัส") : ''}
            ${game.downloadLinks.credits ? renderDownloadLinks(game.downloadLinks.credits, "เครดิต") : ''}

            ${game.hasCrack && game.crackLink ? `
                <h4 class="font-bold mt-4 mb-2">Crack:</h4>
                <a href="${game.crackLink}" target="_blank" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    ดาวน์โหลด Crack
                </a>
            ` : ''}

            ${game.passwords ? `
                <div class="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600">รหัสแตกไฟล์:</h3>
                    ${game.passwords.game ? `
                        <div class="mb-3">
                            <p class="font-medium text-gray-900">ตัวเกม:</p>
                            <code class="block mt-1 p-2 bg-blue-100 border border-blue-200 rounded select-all text-gray-900">${game.passwords.game}</code>
                        </div>
                    ` : ''}
                    ${game.passwords.patch ? `
                        <div class="mb-3">
                            <p class="font-medium text-gray-900">Patch:</p>
                            <code class="block mt-1 p-2 bg-blue-100 border border-blue-200 rounded select-all text-gray-900">${game.passwords.patch}</code>
                        </div>
                    ` : ''}
                </div>
            ` : ''}
        </div>
    `;

    document.getElementById('game-detail').innerHTML = gameDetailHTML;
    document.title = `${game.title} - รายละเอียดเกม | PbankShop`;
}

window.addEventListener('load', renderGameDetail);

function renderGameDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    console.log("Game ID:", gameId);  // เพิ่มบรรทัดนี้
    const game = gameDetails[gameId];
    console.log("Game data:", game);  // เพิ่มบรรทัดนี้

    if (!game) {
        console.log("Game not found in gameDetails");  // เพิ่มบรรทัดนี้
        document.getElementById('game-detail').innerHTML = '<p>ไม่พบข้อมูลเกม</p>';
        return;
    }

    const gameDetailHTML = `
        <img src="${game.image}" alt="${game.title}" class="w-full h-64 object-cover">
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

            <div class="mt-8 flex space-x-4">
                <a href="${game.downloadLink}" target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    ดาวน์โหลดเกม
                </a>
                ${game.hasCrack ? `
                <a href="${game.crackLink}" target="_blank" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block">
                    ดาวน์โหลด Crack
                </a>
                ` : ''}
            </div>
        </div>
    `;

    document.getElementById('game-detail').innerHTML = gameDetailHTML;
    document.title = `${game.title} - รายละเอียดเกม | PbankShop`;
}

window.addEventListener('load', renderGameDetail);

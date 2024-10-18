const games = [
    {
        title: "Devour",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1274570/header.jpg",
        description: "เกมสยองขวัญแนว Co-op ที่คุณต้องร่วมมือกับเพื่อนเพื่อเอาชีวิตรอดจากพิธีกรรมปีศาจ",
        detailLink: "devour-detail.html"
    },
    {
        title: "Pummel Party",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/880940/header.jpg",
        description: "เกมปาร์ตี้สุดมันส์แบบ multiplayer ที่ผสมผสานระหว่างบอร์ดเกมและมินิเกมสุดป่วน",
        detailLink: "pummel-party-detail.html"
    },
    {
        title: "The Sims 4",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg",
        description: "เกมจำลองชีวิตที่คุณสามารถสร้างและควบคุมตัวละครในโลกเสมือนจริง",
        detailLink: "the-sims-4-detail.html"
    }
];

function createGameCard(game) {
    return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="${game.image}" alt="${game.title}" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="font-semibold text-xl mb-2">${game.title}</h3>
            <p class="text-gray-600 mb-4">${game.description}</p>
            <div class="flex justify-between items-center">
                <a href="${game.detailLink}" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">ดูรายละเอียด</a>
            </div>
        </div>
    </div>
    `;
}

function displayGames() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = games.map(game => createGameCard(game)).join('');
}

window.addEventListener('load', displayGames);

const games = [
    {
        id: "devour",
        title: "Devour",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1274570/header.jpg",
        description: "เกมสยองขวัญแนว Co-op ที่คุณต้องร่วมมือกับเพื่อนเพื่อเอาชีวิตรอดจากพิธีกรรมปีศาจ",
        detailLink: "devour-detail.html"
    },
    {
        id: "pummel-party",
        title: "Pummel Party",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/880940/header.jpg",
        description: "เกมปาร์ตี้สุดมันส์แบบ multiplayer ที่ผสมผสานระหว่างบอร์ดเกมและมินิเกมสุดป่วน",
        detailLink: "pummel-party-detail.html"
    },
    {
        id: "the-sims-4",
        title: "The Sims 4",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg",
        description: "เกมจำลองชีวิตที่คุณสามารถสร้างและควบคุมตัวละครในโลกเสมือนจริง",
        detailLink: "the-sims-4-detail.html"
    },
    {
        id: "silent-hill-2",
        title: "SILENT HILL 2",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/header.jpg",
        description: "เกมสยองขวัญทางจิตวิทยาที่เป็นตำนาน ผู้เล่นจะได้สำรวจเมืองที่ถูกปกคลุมด้วยหมอกและเผชิญหน้ากับความหวาดกลัวที่ซ่อนอยู่",
        detailLink: "silent-hill-2-detail.html"
    },
    {
        id: "dragon-ball-sparking-zero",
        title: "Dragon Ball Sparking Zero",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1790600/header.jpg",
        description: "เกมต่อสู้แนวอนิเมะที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ โดยมีตัวละครจากจักรวาล Dragon Ball",
        detailLink: "dragon-ball-sparking-zero-detail.html"
    },
    {
        id: "god-of-war-ragnarok",
        title: "God of War Ragnarök",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
        description: "เกมแอคชันผจญภัยที่สานต่อเรื่องราวของ Kratos และ Atreus ในโลกของเทพนอร์ส พวกเขาต้องเผชิญหน้ากับ Ragnarök ที่กำลังจะมาถึง",
        detailLink: "god-of-war-ragnarok-detail.html"
    },
    {
        id:"warhammer-40000-space-marine-2",
        title:"Warhammer 40,000: Space Marine 2",
        image:"https://cdn.cloudflare.steamstatic.com/steam/apps/2183900/header.jpg",
        description:"เกมต่อสู้แนวสยองขวัญที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ โดยมีตัวละครจากจักรวาล Warhammer 40,000",
        detailLink:"warhammer-40000-space-marine-2-detail.html"
    },
    {
        id:"jujutsu-kaisen-cursed-clash", 
        title:"Jujutsu Kaisen: Cursed Clash",
        image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1877020/header.jpg",
        description: "Jujutsu Kaisen Cursed Clash เป็นเกมต่อสู้แบบ 3D ที่อิงจากอนิเมะและมังงะยอดนิยม Jujutsu Kaisen ผู้เล่นจะได้ควบคุมตัวละครจากเรื่อง Jujutsu Kaisen เพื่อเผชิญหน้ากับคำสาปและพลังพิเศษต่างๆ ในการต่อสู้ที่รวดเร็วและตื่นเต้น",
        detailLink:"jujutsu-kaisen-cursed-clash-detail.html"
    },
    {
        id:"naruto-x-boruto-ultimate-ninja-storm-connections",
        title:"Naruto x Boruto: Ultimate Ninja Storm Connections",
        image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1020790/header.jpg",
        description:"เกมต่อสู้แนวอนิเมะที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ โดยมีตัวละครจากเรื่อง Naruto และ Boruto",
        detailLink:"naruto-x-boruto-ultimate-ninja-storm-connections-detail.html"
    },
    {
        id:"project-unknow",
        title:"Project Unknow",
        image:"https://cdn.cloudflare.steamstatic.com/steam/apps/2115390/header.jpg",
        description:"เกมสยองขวัญแนวสยองขวัญที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ โดยมีตัวละครจากเรื่อง Project Unknow",
        detailLink:"project-unknow-detail.html"
    },
    {
        id: "v-rising",
        title: "V Rising",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1604030/header.jpg",
        description: "เกมเอาชีวิตรอดแนวแวมไพร์ที่ผสมผสานการสร้างฐาน การต่อสู้ และการผจญภัยในโลกแฟนตาซีดาร์ก",
        detailLink: "v-rising-detail.html"
    },
    {
        id: "assassins-creed-valhalla",
        title: "Assassin's Creed Valhalla Complete Edition",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg",
        description: "เกมแอคชันผจญภัยในโลกเปิดที่นำคุณไปสู่ยุควิกกิ้ง พร้อมด้วยเนื้อหาเสริมทั้งหมดและ DLC ในฉบับสมบูรณ์",
        detailLink: "assassins-creed-valhalla-detail.html"
    },
    {
        id: "marvels-spider-man-remastered",
        title: "Marvel's Spider-Man Remastered",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg",
        description: "สวมบทบาทเป็น Peter Parker ในเวอร์ชันที่ได้รับการปรับปรุงใหม่ของ Marvel's Spider-Man ผจญภัยในนิวยอร์กซิตี้ด้วยกราฟิกที่สวยงามและฟีเจอร์ใหม่",
        detailLink: "marvels-spider-man-remastered-detail.html"
    },
    {
        id: "forza-horizon-5",
        title: "Forza Horizon 5",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
        description: "สัมผัสประสบการณ์การขับรถแบบโลกเปิดที่น่าตื่นตาตื่นใจในเม็กซิโก ด้วยภูมิประเทศที่หลากหลายและรถยนต์มากมายให้เลือก",
        detailLink: "forza-horizon-5-detail.html"
    },
    {
        id: "cyberpunk-2077",
        title: "Cyberpunk 2077",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
        description: "เกมแอคชันผจญภัยแนวสยองขวัญที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ",
        detailLink: "cyberpunk-2077-detail.html"
    },
    {
        id: "the-last-of-us-part-1",
        title: "The Last of Us Part I",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg",
        description: "The Last of Us™ Part I เป็นเกมแอคชั่นผจญภัยที่ได้รับการรีเมคใหม่ทั้งหมด",
        detailLink: "the-last-of-us-part-1-detail.html"
    },
    {
        id: "bully-scholarship-edition",
        title: "Bully Scholarship Edition",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/12200/header.jpg",
        description: "Bully: Scholarship Edition นำเสนอประสบการณ์การเล่นเกมแบบโรงเรียนมัธยมที่ไม่เหมือนใคร คุณจะได้สวมบทบาทเป็น Jimmy Hopkins นักเรียนวัยรุ่นที่ดื้อรั้นที่สุด ในการต่อสู้เพื่อความอยู่รอดในโรงเรียนประจำ Bullworth Academy",
        detailLink: "bully-scholarship-edition-detail.html"
    },
    {
        id: "red-dead-redemption-2",
        title: "Red Dead Redemption 2",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
        description: "Red Dead Redemption 2 เป็นเกมแอคชั่นผจญภัยในโลกเปิดที่พัฒนาโดย Rockstar Games",
        detailLink: "red-dead-redemption-2-detail.html"
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
                <a href="game-detail.html?id=${game.id}" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">ดูรายละเอียด</a>
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

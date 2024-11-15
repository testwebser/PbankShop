const games = [
    {
        id: "devour",
        title: "Devour",
        image: "images/games/devour.webp",
        description: "เกมสยองขวัญแนว Co-op ที่คุณต้องร่วมมือกับเพื่อนเพื่อเอาชีวิตรอดจากพิธีกรรมปีศาจ",
        detailLink: "devour-detail.html"
    },
    {
        id: "pummel-party",
        title: "Pummel Party",
        image: "images/games/pummel-party.webp",
        description: "เกมปาร์ตี้สุดมันส์แบบ multiplayer ที่ผสมผสานระหว่างบอร์ดเกมและมินิเกมสุดป่วน",
        detailLink: "pummel-party-detail.html"
    },
    {
        id: "the-sims-4",
        title: "The Sims 4",
        image: "images/games/the-sims-4.webp",
        description: "เกมจำลองชีวิตที่คุณสามารถสร้างและควบคุมตัวละครในโลกเสมือนจริง",
        detailLink: "the-sims-4-detail.html"
    },
    {
        id: "silent-hill-2",
        title: "SILENT HILL 2",
        image: "images/games/silent-hill-2.webp",
        description: "เกมสยองขวัญทางจิตวิทยาที่เป็นตำนาน ผู้เล่นจะได้สำรวจเมืองที่ถูกปกคลุมด้วยหมอกและเผชิญหน้ากับความหวาดกลัวที่ซ่อนอยู่",
        detailLink: "silent-hill-2-detail.html"
    },
    {
        id: "dragon-ball-sparking-zero",
        title: "Dragon Ball Sparking Zero",
        image: "images/games/dragon-ball-sparking-zero.webp",
        description: "เกมต่อสู้แนวอนิเมะที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ โดยมีตัวละครจากจักรวาล Dragon Ball",
        detailLink: "dragon-ball-sparking-zero-detail.html"
    },
    {
        id: "god-of-war-ragnarok",
        title: "God of War Ragnarök",
        image: "images/games/god-of-war-ragnarok.webp",
        description: "เกมแอคชันผจญภัยที่สานต่อเรื่องราวของ Kratos และ Atreus ในโลกของเทพนอร์ส พวกเขาต้องเผชิญหน้ากับ Ragnarök ที่กำลังจะมาถึง",
        detailLink: "god-of-war-ragnarok-detail.html"
    },
    {
        id:"warhammer-40000-space-marine-2",
        title:"Warhammer 40,000: Space Marine 2",
        image:"images/games/warhammer-40000-space-marine-2.webp",
        description:"เกมต่อสู้แนวสยองขวัญที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ โดยมีตัวละครจากจักรวาล Warhammer 40,000",
        detailLink:"warhammer-40000-space-marine-2-detail.html"
    },
    {
        id:"jujutsu-kaisen-cursed-clash", 
        title:"Jujutsu Kaisen: Cursed Clash",
        image:"images/games/jujutsu-kaisen-cursed-clash.webp",
        description: "Jujutsu Kaisen Cursed Clash เป็นเกมต่อสู้แบบ 3D ที่อิงจากอนิเมะและมังงะยอดนิยม Jujutsu Kaisen ผู้เล่นจะได้ควบคุมตัวละครจากเรื่อง Jujutsu Kaisen เพื่อเผชิญหน้ากับคำสาปและพลังพิเศษต่างๆ ในการต่อสู้ที่รวดเร็วและตื่นเต้น",
        detailLink:"jujutsu-kaisen-cursed-clash-detail.html"
    },
    {
        id:"naruto-x-boruto-ultimate-ninja-storm-connections",
        title:"Naruto x Boruto: Ultimate Ninja Storm Connections",
        image:"images/games/naruto-x-boruto-ultimate-ninja-storm-connections.webp",
        description:"เกมต่อสู้แนวอนิเมะที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ โดยมีตัวละครจากเรื่อง Naruto และ Boruto",
        detailLink:"naruto-x-boruto-ultimate-ninja-storm-connections-detail.html"
    },
    {
        id:"project-unknow",
        title:"Project Unknow",
        image:"images/games/project-unknow.webp",
        description:"เกมสยองขวัญแนวสยองขวัญที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ โดยมีตัวละครจากเรื่อง Project Unknow",
        detailLink:"project-unknow-detail.html"
    },
    {
        id: "v-rising",
        title: "V Rising",
        image: "images/games/v-rising.webp",
        description: "เกมเอาชีวิตรอดแนวแวมไพร์ที่ผสมผสานการสร้างฐาน การต่อสู้ และการผจญภัยในโลกแฟนตาซีดาร์ก",
        detailLink: "v-rising-detail.html"
    },
    {
        id: "assassins-creed-valhalla",
        title: "Assassin's Creed Valhalla Complete Edition",
        image: "images/games/assassins-creed-valhalla.webp",
        description: "เกมแอคชันผจญภัยในโลกเปิดที่นำคุณไปสู่ยุควิกกิ้ง พร้อมด้วยเนื้อหาเสริมทั้งหมดและ DLC ในฉบับสมบูรณ์",
        detailLink: "assassins-creed-valhalla-detail.html"
    },
    {
        id: "marvels-spider-man-remastered",
        title: "Marvel's Spider-Man Remastered",
        image: "images/games/marvels-spider-man-remastered.webp",
        description: "สวมบทบาทเป็น Peter Parker ในเวอร์ชันที่ได้รับการปรับปรุงใหม่ของ Marvel's Spider-Man ผจญภัยในนิวยอร์กซิตี้ด้วยกราฟิกที่สวยงามและฟีเจอร์ใหม่",
        detailLink: "marvels-spider-man-remastered-detail.html"
    },
    {
        id: "forza-horizon-5",
        title: "Forza Horizon 5",
        image: "images/games/forza-horizon-5.webp",
        description: "สัมผัสประสบการณ์การขับรถแบบโลกเปิดที่น่าตื่นตาตื่นใจในเม็กซิโก ด้วยภูมิประเทศที่หลากหลายและรถยนต์มากมายให้เลือก",
        detailLink: "forza-horizon-5-detail.html"
    },
    {
        id: "cyberpunk-2077",
        title: "Cyberpunk 2077",
        image: "images/games/cyberpunk-2077.webp",
        description: "เกมแอคชันผจญภัยแนวสยองขวัญที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ",
        detailLink: "cyberpunk-2077-detail.html"
    },
    {
        id: "the-last-of-us-part-1",
        title: "The Last of Us Part I",
        image: "images/games/the-last-of-us-part-i.webp",
        description: "The Last of Us™ Part I เป็นเกมแอคชั่นผจญภัยที่ได้รับการรีเมคใหม่ทั้งหมด",
        detailLink: "the-last-of-us-part-1-detail.html"
    },
    {
        id: "bully-scholarship-edition",
        title: "Bully Scholarship Edition",
        image: "images/games/bully-scholarship-edition.webp",
        description: "Bully: Scholarship Edition นำเสนอประสบการณ์การเล่นเกมแบบโรงเรียนมัธยมที่ไม่เหมือนใคร คุณจะได้สวมบทบาทเป็น Jimmy Hopkins นักเรียนวัยรุ่นที่ดื้อรั้นที่สุด ในการต่อสู้เพื่อความอยู่รอดในโรงเรียนประจำ Bullworth Academy",
        detailLink: "bully-scholarship-edition-detail.html"
    },
    {
        id: "red-dead-redemption-2",
        title: "Red Dead Redemption 2",
        image: "images/games/red-dead-redemption-2.webp",
        description: "Red Dead Redemption 2 เป็นเกมแอคชั่นผจญภัยในโลกเปิดที่พัฒนาโดย Rockstar Games",
        detailLink: "red-dead-redemption-2-detail.html"
    },
    {
        id: "smalland-survive-the-wilds",
        title: "Smalland: Survive the Wilds",
        image: "images/games/smalland-survive-the-wilds.webp",
        description: "Smalland: Survive the Wilds เป็นเกมเอาชีวิตรอดในโลกเปิดที่คุณถูกย่อขนาดลงเหลือเพียงไม่กี่เซนติเมตร ต่อสู้เพื่อความอยู่รอดในโลกที่แมลงกลายเป็นสัตว์ร้ายขนาดยักษ์",
        detailLink: "smalland-survive-the-wilds-detail.html"
    },
    {
        id: "tools-up-garden-party-episode-3",
        title: "Tools Up! Garden Party Episode 3",
        image: "images/games/tools-up-garden-party-episode-3.webp",
        description: "Tools Up! Garden Party Episode 3 เป็น DLC ตอนที่ 3 ของเกม Tools Up! ที่เพิ่มเนื้อหาใหม่เกี่ยวกับการจัดสวนและตกแต่งบ้าน เล่นกับเพื่อนได้สูงสุด 4 คนในโหมด co-op",
        detailLink: "tools-up-garden-party-episode-3-detail.html"
    },
    {
        id: "moving-out-2",
        title: "Moving Out 2",
        image: "images/games/moving-out-2.webp",
        description: "Moving Out 2 เป็นส่วนต่อของซีรี่ส์ Moving Out ที่นำเสนอการต่อสู้แบบสมัยใหม่",
        detailLink: "moving-out-2-detail.html"
    },
    {
        id:"lockdown-protocol",
        title:"Lockdown Protocol",
        image:"images/games/lockdown-protocol.webp",
        description:"Lockdown Protocol เป็นเกมสยองขวัญแนวสยองขวัญที่นำเสนอการต่อสู้แบบ 3D ที่รวดเร็วและเร้าใจ",
        detailLink:"lockdown-protocol-detail.html"
    },
    {
        id:"liars-bar",
        title:"Liar’s Bar",
        image:"images/games/liars-bar.webp",
        description:"Liar’s Bar เป็นเกมแนวสืบสวนที่ผู้เล่นจะต้องสวมบทบาทเป็นบาร์เทนเดอร์ในบาร์ที่เต็มไปด้วยความลับและการหลอกลวง คุณจะต้องใช้ทักษะการสังเกตและการพูดคุยเพื่อเปิดเผยความจริงจากลูกค้าที่มีความลับซ่อนอยู่",
        detailLink:"liars-bar-detail.html"
    },
    {
        id:"horizon-zero-dawn-complete-edition",
        title:"Horizon Zero Dawn™ Complete Edition",
        image:"images/games/horizon-zero-dawn-complete-edition.webp",
        description:"Horizon Zero Dawn™ Complete Edition เป็นเกมแอคชั่น RPG ในโลกเปิดที่สวยงาม",
        detailLink:"horizon-zero-dawn-complete-edition-detail.html"
    },
    {
        id:"among-us",
        title:"Among Us",
        image:"images/games/among-us.webp",
        description:"Among Us เป็นเกมปาร์ตี้แนวสืบสวนสอบสวนออนไลน์ที่ผู้เล่น 4-15 คนต้องร่วมมือกันทำภารกิจบนยานอวกาศ ในขณะที่มีผู้ทรยศแฝงตัวอยู่ในกลุ่ม พยายามก่อวินาศกรรมและฆ่าลูกเรือคนอื่นๆ",
        detailLink:"among-us-detail.html"
    },
    {
        id:"sea-of-thieves",
        title:"Sea of Thieves",
        image:"images/games/sea-of-thieves.webp",
        description:"โลกเปิดมหาสมุทรที่กว้างใหญ่และมีชีวิตชีวา การผจญภัยและการล่าขุมทรัพย์ในทะเลลึก ระบบการต่อสู้ที่น่าตื่นเต้นและความสามารถในการใช้กลยุทธ์สามารถเล่นร่วมกับเพื่อนในโหมดผู้เล่นหลายค",
        detailLink:"sea-of-thieves.html"
    }
];

function createGameCard(game) {
    return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <div class="image-container">
            ${loadOptimizedImage(game.image, game.title, "absolute inset-0 w-full h-full object-cover")}
        </div>
        <div class="p-4">
            <h3 class="font-semibold text-xl mb-2 min-h-[3rem]">${game.title}</h3>
            <p class="text-gray-600 mb-4 min-h-[4.5rem]">${game.description}</p>
            <div class="flex justify-between items-center">
                <a href="game-detail.html?id=${game.id}" 
                   class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
                    ดูรายละเอียด
                </a>
            </div>
        </div>
    </div>
    `;
}

function displayGames() {
    const gameContainer = document.getElementById('game-container');
    
    // แสดง loading state
    gameContainer.innerHTML = `
        <div class="animate-pulse bg-gray-200 rounded-lg h-96"></div>
        <div class="animate-pulse bg-gray-200 rounded-lg h-96"></div>
        <div class="animate-pulse bg-gray-200 rounded-lg h-96"></div>
    `;
    
    // รอให้รูปภาพพร้อม
    Promise.all(games.map(game => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.src = game.image;
        });
    })).then(() => {
        // แสดงเนื้อหาจริง
        gameContainer.innerHTML = games.map(game => createGameCard(game)).join('');
    });
}

window.addEventListener('load', displayGames);

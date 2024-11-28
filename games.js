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
        description: "Jujutsu Kaisen Cursed Clash เป็นเกมต่อสู้แบบ 3D ที่อิงจากอนิเมะและมังงะยอดนิยม Jujutsu Kaisen ผู้เล่นจะได้ควบคุมตัวละครจากเรื่อง Jujutsu Kaisen เพื่อเผชญหน้ากับคำสาปและพลังพิเศษต่างๆ ในการต่อสู้ที่รวดเร็วและตื่นเต้น",
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
        description: "Red Dead Redemption 2 เป็นเกมแอคชั่นผจญภัยในโลกเปิดที่พัฒนาโด Rockstar Games",
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
        description:"Liar’s Bar เป็นเกมแนวสืบสวนที่ผู้เล่นจะต้องสวมบทบาทเป็นบาร์เทนเดอร์ในบาร์ที่เต็มไปด้วยความลับและการหลอกลวง คุณจะต้องใช้ทักษะการังเกตและการพูดคุยเพื่อเปิดเผยความจริงจากลูกค้าที่มีความลับซ่อนอยู่",
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
    },
    {
        id: "metal-gear-solid-v-ground-zeroes",
        title: "Metal Gear Solid V: Ground Zeroes",
        image: "images/games/metal-gear-solid-v-ground-zeroes.webp",
        description: "METAL GEAR SOLID V: GROUND ZEROES เป็นเกมแอคชั่นสายลับที่เต็มไปด้วยความตื่นเต้น คุณจะได้สวมบทเป็น Snake (Big Boss) ในภารกิจที่ต้องแทรกซึมฐานทัพศัตรูและปลดปล่อยนักโทษในโลกที่เปิดกว้างและสมจริง",
        detailLink:"metal-gear-solid-v-ground-zeroes-detail.html"
    },
    {
        id:"thief-simulator",
        title:"Thief Simulator",
        image:"images/games/thief-simulator.webp",
        description:"Thief Simulator เป็นเกมจำลองการเป็นขโมยที่สมจริง คุณจะได้วางแผน สอดแนม และขโมยทรัพย์สินจากบ้านต่างๆ พร้อมทั้งพัฒนาทักษะและอุปกรณ์การโจรกรรมของคุณ",
        detailLink:"thief-simulator-detail.html"
    },
    {
        id:"thief-simulator-2",
        title:"Thief Simulator 2",
        image:"images/games/thief-simulator-2.webp",
        description:"Thief Simulator 2 เป็นภาคต่อที่พัฒนาต่อยอดจากภาคแรก มาพร้อมกับกราฟิกที่สวยงามขึ้น ระบบการเล่นที่ลึกซึ้งขึ้น และพื้นที่การโจรกรรมที่กว้างขวางขึ้น",
        detailLink:"thief-simulator-2-detail.html"
    },
    {
        id:"subnautica",
        title:"Subnautica",
        image:"images/games/subnautica.webp",
        description:"Subnautica เป็นเกมเอาชีวิตรอดใต้ท้องทะเลที่คุณต้องสำรวจมหาสมุทรเอเลี่ยนอันกว้างใหญ่ สร้างอุปกรณ์ ฐานใต้น้ำ และค้นหาความลับของโลกใต้ทะเลลึก",
        detailLink:"subnautica-detail.html"
    },
    {
        id: "metal-gear-solid-v-the-phantom-pain",
        title: "Metal Gear Solid V: The Phantom Pain",
        image: "images/games/metal-gear-solid-v-the-phantom-pain.webp",
        description: "เกมแอคชั่นสเตลธ์ที่ได้รับการยกย่องว่าเป็นหนึ่งในเกมที่ดีที่สุด คุณจะได้สวมบทเป็น Snake ในภารกิจแก้แค้นที่พาคุณไปทั่วโลกเปิดขนาดใหญ่ พร้อมระบบเกมเพลย์ที่ลึกซึ้งและเรื่องราวที่ซับซ้อน",
        detailLink: "metal-gear-solid-v-the-phantom-pain-detail.html"
    },
];

function createGameCard(game, index) {
    const isLCP = index === 0;
    
    return `
    <div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900 to-blue-950 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        <!-- รูปภาพและ Overlay -->
        <div class="relative h-56 overflow-hidden">
            ${loadOptimizedImage(game.image, game.title, "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", isLCP)}
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <!-- ข้อมูลเกม -->
        <div class="relative p-6">

            <!-- ชื่อเกม -->
            <h3 class="font-bold text-xl mb-3 text-blue-100 tracking-wide group-hover:text-white transition-colors duration-300">
                ${game.title}
            </h3>

            <!-- คำอธิบาย -->
            <p class="text-blue-200/80 mb-6 line-clamp-3 group-hover:text-blue-100/90 transition-colors duration-300">
                ${game.description}
            </p>

            <!-- ปุ่มดูรายละเอียด -->
            <a href="game-detail.html?id=${game.id}" 
               class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-2.5 rounded-lg transition duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/50">
                <span>ดูรายละเอียด</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
    `;
}

// แก้ไขฟังก์ชัน displayGames
function displayGames() {
    const gameContainer = document.getElementById('game-container');
    if (!gameContainer || !games || !games.length) return;
    
    // ลบ loading skeletons ถ้ามี
    const skeletons = gameContainer.querySelectorAll('.animate-pulse');
    skeletons.forEach(skeleton => skeleton.remove());
    
    // แสดงเกม
    const gamesHTML = games.map((game, index) => createGameCard(game, index)).join('');
    gameContainer.innerHTML = gamesHTML;
}

// เรียกใช้ฟังก์ชันเมื่อ DOM พร้อม
document.addEventListener('DOMContentLoaded', displayGames);

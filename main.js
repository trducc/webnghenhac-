// 1. DANH SÁCH BÀI HÁT
const songs = [
    { name: "Photograph", img: "Anh/anhbia.jpg", music: "Nhac/photograph.mp3", theme: "green" },
    { name: "Bad Habits", img: "Anh/badhabits.jpg", music: "Nhac/badhabits.mp3", theme: "orange" },
    { name: "I Do", img: "Anh/ido.jpg", music: "Nhac/ido.mp3", theme: "blue-red" },
    { name: "I Love You 3000", img: "Anh/iloveyou3000.jpg", music: "Nhac/iloveyou3000.mp3", theme: "red-black" },
    { name: "The Fate Of Ophelia", img: "Anh/thefateofophelia.jpg", music: "Nhac/thefateofophelia.mp3", theme: "pink-red" },
    { name: "Stereo Hearts", img: "Anh/stereohearts.jpg", music: "Nhac/stereohearts.mp3", theme: "stereo-hearts" },
    { name: "Girls Like You", img: "Anh/girlslikeyou.jpg", music: "Nhac/girlslikeyou.mp3", theme: "random" },
    { name: "Demons", img: "Anh/demons.jpg", music: "Nhac/demons.mp3", theme: "random" },
    { name: "Love Me Like You Do", img: "Anh/fiftyshades.jpg", music: "Nhac/fiftyshades.mp3", theme: "random" },
    { name: "There's Nothing Holdin' Me Back", img: "Anh/theres.jpg", music: "Nhac/theres.mp3", theme: "random" },
    { name: "Señorita", img: "Anh/seno.jpg", music: "Nhac/seno.mp3", theme: "random" },
    { name: "Dusk Till Dawn", img: "Anh/dusk.jpg", music: "Nhac/dusk.mp3", theme: "random" },
    { name: "Symphony", img: "Anh/sympho.jpg", music: "Nhac/sympho.mp3", theme: "random" },
    { name: "Attention", img: "Anh/attention.jpg", music: "Nhac/attention.mp3", theme: "random" },
    { name: "We Don't Talk Anymore", img: "Anh/wedont.jpg", music: "Nhac/wedont.mp3", theme: "random" },
    { name: "Dancing With Your Ghost", img: "Anh/dancing.jpg", music: "Nhac/dancing.mp3", theme: "random" },
    { name: "Until I Found You", img: "Anh/until.jpg", music: "Nhac/until.mp3", theme: "random" },
    { name: "comethru", img: "Anh/comethru.jpg", music: "Nhac/comethru.mp3", theme: "random" },
    { name: "You Are The Reason", img: "Anh/youare.jpg", music: "Nhac/youare.mp3", theme: "random" },
    { name: "Someone You Loved", img: "Anh/someone.jpg", music: "Nhac/someone.mp3", theme: "random" },
    { name: "7 Years", img: "Anh/7years.jpg", music: "Nhac/7years.mp3", theme: "random" },
    { name: "Blank Space", img: "Anh/blank.jpg", music: "Nhac/blank.mp3", theme: "random" },
    { name: "Something Just Like This", img: "Anh/something.jpg", music: "Nhac/something.mp3", theme: "random" },
    { name: "Unstoppable", img: "Anh/unstop.jpg", music: "Nhac/unstop.mp3", theme: "random" },
    { name: "A Thousand Years", img: "Anh/1000.jpg", music: "Nhac/1000.mp3", theme: "random" },
    { name: "Sold Out", img: "Anh/sold.jpg", music: "Nhac/sold.mp3", theme: "random" },
    { name: "Forever Young", img: "Anh/forever.jpg", music: "Nhac/forever.mp3", theme: "random" },
    { name: "Die With A Smile", img: "Anh/die.jpg", music: "Nhac/die.mp3", theme: "random" },
    { name: "Lover", img: "Anh/lover.jpg", music: "Nhac/lover.mp3", theme: "random" },
    { name: "Love Yourself", img: "Anh/lovey.jpg", music: "Nhac/lovey.mp3", theme: "random" },
    { name: "Talking To The Moon x Play Date", img: "Anh/talking.jpg", music: "Nhac/talking.mp3", theme: "random" },
    { name: "Fire On Fire", img: "Anh/fire.jpg", music: "Nhac/fire.mp3", theme: "random" },
    { name: "Angel Baby", img: "Anh/angel.jpg", music: "Nhac/angel.mp3", theme: "random" },
    { name: "Payphone", img: "Anh/pay.jpg", music: "Nhac/pay.mp3", theme: "random" },
    { name: "To The Moon", img: "Anh/tothe.jpg", music: "Nhac/tothe.mp3", theme: "random" },
    { name: "Counting Stars", img: "Anh/count.jpg", music: "Nhac/count.mp3", theme: "random" },
    { name: "Dark Horse", img: "Anh/darkh.jpg", music: "Nhac/darkh.mp3", theme: "random" },
    { name: "Sweet But Psycho", img: "Anh/sweet.jpg", music: "Nhac/sweet.mp3", theme: "random" },
     { name: "Summertime Sadness", img: "Anh/summer.jpg", music: "Nhac/summer.mp3", theme: "random" },
     { name: "Bad Liar", img: "Anh/badl.jpg", music: "Nhac/badl.mp3", theme: "random" },
     { name: "The Nights", img: "Anh/then.jpg", music: "Nhac/then.mp3", theme: "random" },
    { name: "In The Shadow Of The Sun", img: "Anh/shadow.jpg", music: "Nhac/shadow.mp3", theme: "random" },
    { name: "Let Her Go", img: "Anh/leth.jpg", music: "Nhac/leth.mp3", theme: "random" },
     { name: "Arcade", img: "Anh/loving.jpg", music: "Nhac/loving.mp3", theme: "random" },
     { name: "Head In The Clouds", img: "Anh/head.jpg", music: "Nhac/head.mp3", theme: "random" },
     { name: "Car's Outside", img: "Anh/car.jpg", music: "Nhac/car.mp3", theme: "random" },
     { name: "Rewrite The Stars", img: "Anh/rewrite.jpg", music: "Nhac/rewrite.mp3", theme: "random" },
     { name: "One Call Away", img: "Anh/onec.jpg", music: "Nhac/onec.mp3", theme: "random" },
    { name: "Shape Of You", img: "Anh/shape.jpg", music: "Nhac/shape.mp3", theme: "random" },
    { name: "Perfect", img: "Anh/perf.jpg", music: "Nhac/perf.mp3", theme: "random" },
    { name: "Look What You Make Me Do", img: "Anh/lookw.jpg", music: "Nhac/lookw.mp3", theme: "random" },
     { name: "Why Not Me", img: "Anh/whyn.jpg", music: "Nhac/whyn.mp3", theme: "random" },
       { name: "Có Thể Hay Không", img: "Anh/cothe.jpg", music: "Nhac/cothe.mp3", theme: "random" },
     { name: "Phù Tru", img: "Anh/phutru.jpg", music: "Nhac/phutru.mp3", theme: "random" },
      { name: "I See Fire", img: "Anh/isee.jpg", music: "Nhac/isee.mp3", theme: "random" },
    { name: "Nothing's Gonna Change My Love For You", img: "Anh/nothing.jpg", music: "Nhac/nothing.mp3", theme: "random" },
     { name: "Beautiful In White", img: "Anh/beautiful.jpg", music: "Nhac/beautiful.mp3", theme: "random" },
      { name: "Enchanted", img: "Anh/enchan.jpg", music: "Nhac/enchan.mp3", theme: "random" },
     { name: "Just Give Me A Reason", img: "Anh/justg.jpg", music: "Nhac/justg.mp3", theme: "random" },
     { name: "Reckless", img: "Anh/reck.jpg", music: "Nhac/reck.mp3", theme: "random" },
    { name: "Last Christmas", img: "Anh/lastc.jpg", music: "Nhac/lastc.mp3", theme: "random" },
     { name: "Everytime We Touch", img: "Anh/everytimew.jpg", music: "Nhac/everytimew.mp3", theme: "random" },
     { name: "The Way I Still Love You", img: "Anh/theway.jpg", music: "Nhac/theway.mp3", theme: "random" },
    { name: "Peter Pan Was Right", img: "Anh/peter.jpg", music: "Nhac/peter.mp3", theme: "random" },
     { name: "The Other Side Of Paradise", img: "Anh/theother.jpg", music: "Nhac/theother.mp3", theme: "random" },

    
    
    
    
    
];



// 2. HÀM TẠO MÀU NGẪU NHIÊN
function taoMauNgauNhien() {
    const bangMau = ['#d61010ff', '#075607ff', '#0e0e94ff', '#d4d40cff', '#00FFFF', '#b70cb7ff', '#FF8C00', '#7FFF00', '#ffffff','#2c3179ff'];
    let mau1 = bangMau[Math.floor(Math.random() * bangMau.length)];
    let mau2 = bangMau[Math.floor(Math.random() * bangMau.length)];
    let mau3 = bangMau[Math.floor(Math.random() * bangMau.length)];
    let mau4 = bangMau[Math.floor(Math.random() * bangMau.length)];
    
    return {
        gradient: `linear-gradient(to right, ${mau1}, ${mau2}, ${mau3}, ${mau4}, ${mau1})`,
        shadow: `drop-shadow(0 0 10px ${mau1})`
    };
}

// 3. KHAI BÁO BIẾN
let currentSongIndex = 0;
const songName = document.getElementById("ten-bai-hat");
const songImg = document.getElementById("anh-bia");
const audioPlayer = document.getElementById("may-phat-nhac");
const welcomeText = document.getElementById("loi-chao");

// Biến cho tìm kiếm
const searchBox = document.getElementById("search-box");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-toggle");
const suggestions = document.getElementById("suggestions");

// 4. XỬ LÝ TÌM KIẾM
searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("active");
    if (searchBox.classList.contains("active")) {
        searchInput.focus();
    } else {
        suggestions.classList.remove("show");
        searchInput.value = "";
    }
});

searchInput.addEventListener("keyup", (e) => {
    const tuKhoa = e.target.value.toLowerCase();
    suggestions.innerHTML = "";
    
    if (tuKhoa) {
        const ketQua = songs.filter(song => song.name.toLowerCase().includes(tuKhoa));
        
        if (ketQua.length > 0) {
            suggestions.classList.add("show");
            ketQua.forEach(song => {
                const originalIndex = songs.findIndex(s => s.name === song.name);
                const li = document.createElement("li");
                li.innerHTML = `<img src="${song.img}"> <span>${song.name}</span>`;
                
                li.onclick = () => {
                    // Gọi hàm chuyển bài theo ID tìm được
                    playSongByIndex(originalIndex);
                    searchBox.classList.remove("active");
                    suggestions.classList.remove("show");
                    searchInput.value = "";
                };
                suggestions.appendChild(li);
            });
        } else {
            suggestions.classList.remove("show");
        }
    } else {
        suggestions.classList.remove("show");
    }
});

// 5. HÀM CẬP NHẬT GIAO DIỆN (QUAN TRỌNG: Tách ra để dùng chung)
function loadSongUI(index) {
    const song = songs[index];
    songName.innerText = song.name;
    songImg.src = song.img;
    audioPlayer.src = song.music;

    // Reset các class màu cũ
    songName.classList.remove('orange', 'blue-red', 'red-black', 'pink-red', 'stereo-hearts', 'random');
    songName.style.background = ""; 
    songName.style.filter = "";
    songName.style.webkitTextFillColor = "";

    // Xử lý Theme
    if (song.theme === 'random') {
        songName.classList.add('random');
        const mauMoi = taoMauNgauNhien();
        
        songName.style.background = mauMoi.gradient;
        songName.style.backgroundSize = "400% auto"; // Chỉnh lên 400% cho mượt
        songName.style.webkitBackgroundClip = "text";
        songName.style.backgroundClip = "text";
        songName.style.filter = mauMoi.shadow;
        songName.style.webkitTextFillColor = "transparent";

    } else if (song.theme === 'orange') {
        songName.classList.add('orange');
    } else if (song.theme === 'blue-red') {
        songName.classList.add('blue-red');
    } else if (song.theme === 'red-black') {
        songName.classList.add('red-black');
    } else if (song.theme === 'pink-red') {
        songName.classList.add('pink-red');
    } else if (song.theme === 'stereo-hearts') {
        songName.classList.add('stereo-hearts');
    }

    // Ẩn/Hiện lời chào
    if (index === 0) {
        welcomeText.classList.remove('hidden');
    } else {
        welcomeText.classList.add('hidden');
    }

    // Phát nhạc và hiện lại nội dung
    audioPlayer.play();
    songName.classList.remove('hide-content');
    songImg.classList.remove('hide-content');
}

// 6. HÀM CHUYỂN BÀI (NEXT/PREV)
function changeSong(direction){
    // Hiệu ứng ẩn đi trước
    songName.classList.add('hide-content');
    songImg.classList.add('hide-content');

    setTimeout(() =>{
        if (direction === 'next') {
            currentSongIndex++;
            if (currentSongIndex >= songs.length) currentSongIndex = 0;
        } else {
            currentSongIndex--;
            if (currentSongIndex < 0) currentSongIndex = songs.length - 1;
        }
        
        // GỌI HÀM UI ĐÃ TÁCH
        loadSongUI(currentSongIndex);
    }, 500);
}

// 7. HÀM NHẢY TỚI BÀI HÁT BẤT KỲ (Dùng cho Tìm Kiếm)
function playSongByIndex(index) {
    currentSongIndex = index;
    // Hiệu ứng ẩn đi
    songName.classList.add('hide-content');
    songImg.classList.add('hide-content');
    
    setTimeout(() => {
        // GỌI HÀM UI ĐÃ TÁCH
        loadSongUI(currentSongIndex);
    }, 500);
}

// Các nút bấm
function nextSong() {
    changeSong('next');
}

function prevSong() {
    changeSong('prev');
}

// Tự chuyển bài khi hết
audioPlayer.addEventListener('ended', function() {
    nextSong();
});
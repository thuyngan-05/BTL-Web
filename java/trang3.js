// Chức năng tìm kiếm bài hát
$(document).ready(function() {
    // Lắng nghe sự kiện khi nhấn Enter trong ô input
    $('.find input[type="text"]').on('keypress', function(element) {
        if (element.which === 13) { // Kiểm tra nếu phím nhấn là Enter
            $('.find button').click(); // Gọi sự kiện click của nút tìm kiếm
        }
    });

    // Lắng nghe sự kiện khi nhấp chuột vào nút tìm kiếm
    $('.find button').on('click', function() {
        let search = $('.find input[type="text"]').val().toLowerCase();

        $('.songs .song').each(function() {
            // Lấy tên bài hát chuyển thành chữ thường
            let songName = $(this).find('span').text().toLowerCase(); 
            if (songName.includes(search)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});


// Bắt sự kiện click chuột trên biểu tượng House hoặc chữ "Trang chủ"
let trangChu = document.querySelectorAll('a[href="#trangchu"]');

for(let i = 0; i < trangChu.length; i++){
    trangChu[i].addEventListener('click', function(){
        window.open("/html/trang2.html", "_blank");
        //window.location.href = '/html/trang2.html'; 
    });
}


// Chức năng của các nút icon-music
let songs = document.querySelectorAll('.song');

for (let i = 0; i < songs.length; i++) {
    let audio = songs[i].querySelector('.audio');
    let playButton = songs[i].querySelector('.fa-circle-play');
    let replayButton = songs[i].querySelector('.fa-arrow-rotate-right');
    let backwardButton = songs[i].querySelector('.fa-backward-fast');
    let forwardButton = songs[i].querySelector('.fa-forward-fast');
    let repeatButton = songs[i].querySelector('.fa-repeat');
    let progressBar = songs[i].querySelector('.progress-bar');
    let volumeControl = songs[i].querySelector('.volume-control');
    let currentTimeElement = songs[i].querySelector('.current-time');
    let totalTimeElement = songs[i].querySelector('.total-time');
    
    let isPlaying = false;
    let isRepeat = false;

     // Hàm định dạng thời gian từ giây thành phút:giây
     function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let secondsLeft = Math.floor(seconds % 60);
        if (secondsLeft < 10) secondsLeft = `0${secondsLeft}`;
        return `${minutes}:${secondsLeft}`;
    }

    // Hàm dừng tất cả các bài hát ngoại trừ bài hát hiện tại
    function stopAllSongsExcept(currentIndex) {
        for (let j = 0; j < songs.length; j++) {
            if (j !== currentIndex) {
                let otherAudio = songs[j].querySelector('.audio');
                let otherPlayButton = songs[j].querySelector('.fa-circle-pause, .fa-circle-play');
                otherAudio.pause();
                otherAudio.currentTime = 0;
                if (otherPlayButton) {
                    otherPlayButton.classList.remove('fa-circle-pause');
                    otherPlayButton.classList.add('fa-circle-play');
                }
                songs[j].classList.remove('playing');
            }
        }
    }

    // Cập nhật lớp 'playing' khi phát bài hát mới
    function setPlayingClass() {
        songs[i].classList.add('playing');
    }

    // Cập nhật thanh tiến trình khi thời gian phát thay đổi
    audio.addEventListener('timeupdate', function() {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
        currentTimeElement.textContent = formatTime(audio.currentTime); 
    });

    // Cập nhật tổng thời gian khi audio được tải xong  
    audio.addEventListener('loadedmetadata', function() {
        totalTimeElement.textContent = formatTime(audio.duration);
    });

    // Cập nhật thời gian phát khi thanh tiến trình thay đổi
    progressBar.addEventListener('input', function() {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    // Cập nhật âm lượng khi điều khiển âm lượng thay đổi
    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });

    // Phát lại bài hát từ đầu
    replayButton.addEventListener('click', function() {
        audio.currentTime = 0;
        audio.play();
        isPlaying = true;
        togglePlayPauseIcon(playButton, isPlaying);
        setPlayingClass(); // Đánh dấu bài hát đang phát
    });

    // Phát bài hát trước đó
    backwardButton.addEventListener('click', function() {
        if (i > 0) {
            stopAllSongsExcept(i - 1);
            let previousSongAudio = songs[i - 1].querySelector('.audio');
            let previousSongPlayButton = songs[i - 1].querySelector('.fa-circle-play');
            previousSongAudio.play();
            togglePlayPauseIcon(previousSongPlayButton, true);
            songs[i - 1].classList.add('playing');
        }
    });

    // Phát hoặc tạm dừng bài hát hiện tại
    playButton.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
        } else {
            stopAllSongsExcept(i);
            audio.play();
            setPlayingClass(); // Đánh dấu bài hát đang phát
        }
        isPlaying = !isPlaying;
        togglePlayPauseIcon(playButton, isPlaying);
    });

    // Phát bài hát tiếp theo
    forwardButton.addEventListener('click', function() {
        if (i < songs.length - 1) {
            stopAllSongsExcept(i + 1);
            let nextSongAudio = songs[i + 1].querySelector('.audio');
            let nextSongPlayButton = songs[i + 1].querySelector('.fa-circle-play');
            nextSongAudio.play();
            togglePlayPauseIcon(nextSongPlayButton, true);
            songs[i + 1].classList.add('playing');
        }
        else{
            console.log("Đây là bài hát cuối cùng, không thể chuyển đến bài hát tiếp theo.");
        }
    });

    // Lặp lại bài hát
    repeatButton.addEventListener('click', function() {
        isRepeat = !isRepeat;
        audio.loop = isRepeat;
    });

    // Hàm chuyển đổi biểu tượng play/pause
    function togglePlayPauseIcon(button, isPlaying) {
        if (isPlaying) {
            button.classList.remove('fa-circle-play');
            button.classList.add('fa-circle-pause');
        } else {
            button.classList.remove('fa-circle-pause');
            button.classList.add('fa-circle-play');
        }
    }
}


// Hiển thị album tương ứng với ảnh được click
document.addEventListener('DOMContentLoaded', function() {
    // Lấy thông tin album từ URL
    let params = new URLSearchParams(window.location.search);
    let albumName = params.get('album');
    
    // Lấy tất cả các phần tử có class 'duongdomic', 'sontung', ...
    let albums = document.querySelectorAll('.duongdomic, .sontung, .hieuthu2, .captain, .haidangdoo, .rhyder, .tlinh');

    // Duyệt qua từng album
    for (let i = 0; i < albums.length; i++) {
        let album = albums[i];

        // Kiểm tra xem album có class trùng với albumName không
        if (album.classList.contains(albumName)) {
            // Hiển thị album tương ứng
            album.style.display = 'block';
        } else {
            // Ẩn các album khác
            album.style.display = 'none';
        }
    }
});








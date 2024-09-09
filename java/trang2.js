/* Bắt sự kiện click chuột trên ảnh album */
window.onload = function() {
    let albumImages = document.querySelectorAll('.album');

    for(let album of albumImages) {
        album.onclick = function() {
            let albumName = this.classList[1];  // Lấy tên album từ class thứ 2
            window.open(`/trang3.html?album=${albumName}`, '_blank');  // Mở trang mới với tên album trong URL
        }
    }

    let searchInput = document.querySelector("input[type=text]");
    let searchButton = document.querySelector("button");
    
    searchButton.onclick = function() {
        // Xóa border cũ
        let items = document.querySelectorAll(".singer, .album, .hot-trend");
        for (let item of items) {
            item.style.border = "";
        }

        // Lấy giá trị tìm kiếm
        let searchValue = searchInput.value.toLowerCase();

        // Tìm kiếm trong tên singer, album, hot trend
        let timkiem = false;
        let allItems = document.querySelectorAll(".singer p, .album p, .hot-trend p");

        for (let item of allItems) {
            if (item.innerText.toLowerCase().includes(searchValue)) {
                timkiem = true;
                item.parentElement.parentElement.style.border = "4px solid red";  // Bật border cho item tìm thấy
            }
        }

        // Nếu không tìm thấy
        if (!timkiem) {
            alert("Không tìm thấy");
        }
    }

    // Bắt sự kiện click chuột cho mục Yêu thích và Thư viện
    let yeuthichTab = document.querySelector('a[href="#yeuthich"]');
    let thuvienTab = document.querySelector('a[href="#thuvien"]');

// Lấy các phần tử chứa nội dung danh sách nhạc
    let yeuthichSection = document.getElementById('yeuthich');
    let thuvienSection = document.getElementById('thuvien');

    // Ẩn Thư viện khi vào trang
    thuvienSection.style.display = 'none';

    // Khi click vào Yêu thích
    yeuthichTab.onclick = function() {
        yeuthichSection.style.display = 'block';  // Hiển thị Yêu thích
        thuvienSection.style.display = 'none';   // Ẩn Thư viện
    }

    // Khi click vào Thư viện
    thuvienTab.onclick = function() {
        thuvienSection.style.display = 'block';  // Hiển thị Thư viện
        yeuthichSection.style.display = 'none';  // Ẩn Yêu thích
    }
}









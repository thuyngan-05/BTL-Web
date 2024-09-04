/* Bắt sự kiện click chuột trên ảnh album */

// Lấy tất cả các phần tử có class 'album'
let albumImages = document.querySelectorAll('.album');

// Duyệt qua từng phần tử album
for (let i = 0; i < albumImages.length; i++) {
    let album = albumImages[i];
    
    // Gán sự kiện click cho mỗi phần tử album
    album.addEventListener('click', function() {
        // Lấy tên album từ class của phần tử album
        let albumName = album.classList[1]; // class thứ hai của phần tử album
        
        // Mở trang album mới và truyền thông tin qua URL
        window.open(`/html/trang3.html?album=${albumName}`, '_blank');
    });
}

// 

/* Bắt sự kiện click chuột trên ảnh album */
window.onload = function() {
    let albumImages = document.querySelectorAll('.album');

    for(let album of albumImages) {
        album.onclick = function() {
            let albumName = this.classList[1];
            window.open(`/html/trang3.html?album=${albumName}`, '_blank');
        }
    }
}
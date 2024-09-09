// 

/* Bắt sự kiện click chuột trên ảnh album */
window.onload = function() {
    let albumImages = document.querySelectorAll('.album');

    for(let album of albumImages) {
        album.onclick = function() {
            let albumName = this.classList[1];
            window.open(`trang3.html?album=${albumName}`, '_blank');        
        }
    }
}

/*window.onload = function() {
    let search = document.querySelector("input[type=search]");
    search.onchange = function() {
        // xóa border
        let tmps = document.querySelectorAll(".albums > div");
        for (let t of tmps)
            t.style.border= "";

        // gắn border product tìm thấy
        let txt = this.value;

        let products = document.querySelectorAll(".albums p");
        for (let p of products)
            if (p.innerText.includes(txt) === true)
                p.parentElement.style.border = "2px solid red";
    }
}*/
/*
window.onload = function() {

    let main = document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for (let im of images)
        im.onclick = function() {
            main.src = this.src;
        }

    let search = document.querySelector("input[type=search]");
    search.onchange = function() {
        // Xóa border của tất cả các albums
        let tmps = document.querySelectorAll(".albums > div");
        for (let t of tmps)
            t.style.border = "";

        // Lấy giá trị từ ô tìm kiếm
        let txt = this.value;

        // Duyệt qua các sản phẩm và tìm kiếm từ khóa
        let products = document.querySelectorAll(".albums p");
        for (let p of products)
            if (p.innerText.includes(txt) === true)
                p.parentElement.style.border = "2px solid red";
    }
}*/

window.onload = function() {
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
}

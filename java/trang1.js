// // Bắt sự kiện click chuột trên nút button
window.onload = function() {
    let button = document.getElementById("button");
    
    button.onclick = function() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if(username && password){
            window.open("/html/trang2.html", "_blank");
        }
        else{
            alert("Vui lòng nhập đầy đủ username và password.");
        }
    }
}

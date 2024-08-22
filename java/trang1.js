document.querySelector('.button').addEventListener('click', function () {
    var username = document.querySelector('.user input').value;
    var password = document.querySelector('.password input').value;

    // Kiểm tra nếu username và password không rỗng
    if (username && password) {
        // Chuyển hướng đến trang chủ của trang web sau khi đăng nhập thành công
        window.location.href = '/html/trang2.html'; 
    } else {
        alert("Vui lòng nhập đầy đủ username và password.");
    }
});

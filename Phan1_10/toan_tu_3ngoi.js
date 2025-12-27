let x = 10;
// Yêu cầu: Cho biến n = 10. Nếu n chia hết cho 2 thì in ra "Số chẵn", ngược lại "Số lẻ".
(x%2 === 0) ? console.log("Số chẵn") : console.log("Số lẻ");
/*
📝 Bài tập 2: Kiểm tra đăng nhập (Thực tế Frontend)
Giả sử Danh làm chức năng ẩn/hiện nút Logout trên giao diện.

Yêu cầu: Cho biến isLoggedIn = true.

Nhiệm vụ: Tạo biến buttonText. Nếu isLoggedIn là true thì buttonText là "Logout", ngược lại là "Login".
*/
let isLoggedIn = true;
let buttonText;
(isLoggedIn) ? buttonText = "Logout" : buttonText = "Login";
console.log(buttonText);

/*
Toán tử 3 ngôi có thể lồng nhau (nhưng đừng lồng quá nhiều sẽ bị rối mắt).
Yêu cầu: Cho biến age = 20.

Nếu age < 13: Giá vé là "50k".

Nếu age >= 13 và age < 18: Giá vé là "70k".

Nếu age >= 18: Giá vé là "100k".
*/
let age = 20;
let giaVe = 0;
(age>=18) ? (giaVe = 100000) : ((age>=13) ? (giaVe = 70000) : (giaVe = 50000));
console.log(`Gía vé cho khách ${age} (tuổi) là: ${giaVe} (đồng)`);
/* Bài 1️⃣ – Tính tổng
Viết function thường nhận vào 2 số, trả về tổng.
📌 Yêu cầu:
 – Có return
 – Gọi hàm ra kết quả 
 */
let a = 4, b = 5;
function tinhtong_1(a, b) {
    return (a+b);
}
const tinhtong_2 = (a, b) => a + b;
console.log(`Tổng 2 số ${a} và ${b} là: ${tinhtong_1(a, b)}`);
console.log(`Tổng 2 số ${a} và ${b} là: ${tinhtong_2(a, b)}`);
/*
Bài 2️⃣ – Kiểm tra số chẵn / lẻ
Viết arrow function nhận vào 1 số
👉 Trả về "Chẵn" hoặc "Lẻ"
📌 Gợi ý:
– Dùng toán tử %
– Dùng if/else hoặc toán tử 3 ngôi
*/
const kiemTraChanLe = n => (n%2 === 0) ? "Chẵn" : "Lẻ";
console.log(kiemTraChanLe(5));
console.log(kiemTraChanLe(8));
/*
Bài 3️⃣ – Kiểm tra tuổi
Viết arrow function nhận vào age
– Nếu age >= 18 → "Đủ tuổi"
– Ngược lại → "Chưa đủ tuổi"
*/
const kiemTraTuoi = age => (age >= 18) ? "Đủ tuổi" : "Chưa đủ tuổi";
console.log(kiemTraTuoi(17));
/*
Bài 4️⃣ – Validate input
Viết arrow function kiểm tra 1 chuỗi:
– Nếu chuỗi rỗng → false
– Có ký tự → true
📌 Tình huống thực tế:
Người dùng chưa nhập gì thì không cho submit
*/
let s1 = "";
let s2 = "Mai Thành Danh";
const kiemTraChuoi = str => (str.length > 0) ? true : false;
console.log(kiemTraChuoi(s1));
console.log(kiemTraChuoi(s2));
/*
Bài 5️⃣ – Tính giá sau giảm
Viết function nhận vào:
– price
– discount (phần trăm)
👉 Trả về giá sau khi giảm
📌 Ví dụ:
– price = 1000
– discount = 10
→ kết quả = 900
*/
const giaSale = (price, discount) => price * (1-discount/100);
console.log(giaSale(1000, 20));
/*
Bài 6️⃣ – Tính tổng tiền giỏ hàng (mini)
Viết arrow function nhận vào:
– price
– quantity
👉 Trả về price * quantity
📌 Tình huống:
Khi số lượng đổi → gọi lại hàm này
*/
const money = (price, quantity) => price*quantity;
console.log(money(20000, 5));
/*
Bài 7️⃣ – Thông báo đăng nhập
Viết arrow function nhận vào:
– isLogin (true / false)
👉 Trả về:
– "Xin chào người dùng"
– hoặc "Vui lòng đăng nhập"
📌 Gợi ý:
– Dùng toán tử 3 ngôi
*/
const messageLogin = (isLogin) => (isLogin) ? "Xin chào người dùng" : "Vui lòng đăng nhập";
console.log(messageLogin(true));
console.log(messageLogin(false));
/*
Viết function nhận vào:
– username
– password
👉 Trả về:
– "Hợp lệ" nếu cả hai không rỗng
– "Không hợp lệ" nếu thiếu 1 trong 2
📌 Gợi ý:
– Dùng toán tử &&
*/
const messageUserPass = (username, password) => (username.length!==0 && password.length!==0) ? "Hợp lệ" : "Không hợp lệ";
console.log(messageUserPass("", ""));
console.log(messageUserPass("", "123"));
console.log(messageUserPass("admin", ""));
console.log(messageUserPass("admin", "123"));
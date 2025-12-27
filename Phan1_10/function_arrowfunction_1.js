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
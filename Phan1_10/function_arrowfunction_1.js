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
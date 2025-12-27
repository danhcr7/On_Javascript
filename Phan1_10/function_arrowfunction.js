let n = 10;
// Cách 1:
function tinhTong(n) {
    return (n*(n+1))/2;
}
// cách 2:
const tinhTong_2 = (n) => {
    return (n*(n+1))/2;
}
const tinhTong_3 = n => (n*(n+1))/2;
// Cho chiều dài = x; rộng = y. tính s
function tinhDienTich_1(x, y) {
    return x*y;
}
const tinhDienTich_2 = (x, y) =>  x*y;
console.log(`Diện tích hình chữ nhật với dài  = 5, rộng là 3 là: ${tinhDienTich_1(5, 3)}`);
console.log(`Diện tích hình chữ nhật với dài  = 5, rộng là 3 là: ${tinhDienTich_2(5, 3)}`);
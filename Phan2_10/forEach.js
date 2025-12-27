let arr = [1, 2, 3, 4, 5];
// Duyệt qua từng phần tử và áp dụng hàm lên pt đó ---> ko biến đổi, không return về giá trị mới 
/*
VD1: duyệt qua các phần tử mảng arr và in ra câu đây là lần số ? in ra
*/
let i = 0;
arr.forEach(item => console.log(`Đây là lần in thứ ${i++}`));

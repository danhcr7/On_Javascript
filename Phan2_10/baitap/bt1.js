/*
Bài 1️⃣ – Truy cập mảng
Cho:
const arr = [10, 20, 30, 40];
👉 In ra:
– Phần tử đầu
– Phần tử cuối
– Độ dài mảng
*/
const arr = [10, 20, 30, 40];
console.log(`Phần tử đầu: ${arr[0]}; Phần tử cuối: ${arr[arr.length-1]}; Độ dài mảng: ${arr.length}`);
// BT2: dùng map tạo mảng mới mà mỗi phần tử nhân 2
const arr_new = arr.map(item => item * 2);
console.log(arr_new);
// BT3: Lọc ra các số > 20
const arr_new_1 = arr.filter(item => (item>20));
console.log(arr_new_1);
// BT4: Tìm số đầu tiên > 25:
const arr_new_2 = arr.find(item => item>25);
console.log(arr_new_2);
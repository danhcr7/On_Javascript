/*
Cho mảng [10, 20, 30, 40] => dùng hàm Filter() để lọc ra các số > 20
*/
let arr = [10, 20, 30, 40];
let arr1 = arr.filter(item => (item>20) && item);
console.log(arr1);


// dùng hàm find tìm số đầu tiên > 25
let kq = arr.find(item => item>25 && item);
console.log(kq);


// Hàm filter thì trả về mảng, còn find trả về pt

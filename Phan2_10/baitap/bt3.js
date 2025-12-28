/*
Cho mảng [10, 20, 30, 40] => dùng hàm Filter() để lọc ra các số > 20
*/
let arr = [10, 20, 30, 40];
function check(item) {
    if (item > 20) {
        return item;
    }
}
let arr1 = arr.filter(check(item));
console.log(arr1);
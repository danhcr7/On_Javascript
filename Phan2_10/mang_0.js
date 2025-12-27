/*
- Mảng là 1 tập hợp các phần tử đa kdl, các phần tử có thứ tự
- VD: let arr = [1, 2.3, true, undefined, null, ["a", "b", "c"], {"Nam": 20, "Tuấn": 30}]
- Chỉ số index: 0 ---> arr.length-1
# Trong Javascript: string, number, boolean là bất biến
- Truy cập phần tử của mảng thông qua index: arr[index];
*/
let a = [1, 2, 3];
let b = [4.2, 5, 6.4]
let c = [1, 3.2, false, null, {key: 1}, undefined];
console.log(a, b, c);
console.log(b[1]);
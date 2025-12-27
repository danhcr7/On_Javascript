/*
- Mảng là 1 tập hợp các phần tử đa kdl, các phần tử có thứ tự
- VD: let arr = [1, 2.3, true, undefined, null, ["a", "b", "c"], {"Nam": 20, "Tuấn": 30}]
- Chỉ số index: 0 ---> arr.length-1
# Trong Javascript: string, number, boolean là bất biến
- Truy cập phần tử của mảng thông qua index: arr[index];
- Lấy độ dài mảng: arr.length;
- Phần tử đầu tiên: arr[0]; phần tử cuối cùng: arr[arr.length-1];
- Thay đổi value của 1 phần tử tại vị trí index: arr[index] = new_value;
*/
let a = [1, 2, 3];
let b = [4.2, 5, 6.4]
let c = [1, 3.2, false, null, {key: 1}, undefined];
console.log(a, b, c);
console.log(b[1]);
console.log(`Độ dài của các mảng là a: ${a.length}; b: ${b.length}, c: ${c.length}`);
console.log(`Mảng c có phần tử đầu tiên là: ${c[0]}; phần tử cuối cùng là: ${c[c.length-1]}`);
// Thay đổi phần tử 3 trong mảng a thành 1 object {a: 1, b: 2, c: 3}
a[2] = {a: 1, b: 2, c: 3};
console.log(a);
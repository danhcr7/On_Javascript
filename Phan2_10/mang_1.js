let arr = [1, 2, 3, 4, false, null, {a: 1, b: 2, c: 3}, [1, null, undefined]];
// push: thêm cuối ; unshift: thêm đầu
// thêm phần tử "hello" vào cuối mảng:
arr.push("hello");
console.log(arr);
// thêm phần tử [4, {1: "Nam", 2: "Danh"}] vào đầu arr
arr.unshift([4, {1: "Nam", 2: "Danh"}]);
console.log(arr);
// pop: xóa cuối; shift: xóa đầu
// xóa phần tử "hello" cuối mảng:
arr.pop();
console.log(arr);
// xoáp hần tử [ 4, { '1': 'Nam', '2': 'Danh' } ] ở đầu mảng:
arr.shift();
console.log(arr);
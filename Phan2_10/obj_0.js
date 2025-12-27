let obj = {
    "1": 1,
    "2": 2,
    "3": 3
}
// Thêm:
obj["4"] = 4;
console.log(obj);
// Sửa:
obj["1"] = 0;
console.log(obj);
// Xóa: 
delete obj["2"];
console.log(obj);
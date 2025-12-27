// let a1 = [1, 2, 3];
// let a2 = [4, 5, 6];
// let a3 = [...a1, ...a2];
// console.log(a3);
// // Copy object:
// let obj_1 = {
//     "name": "David",
//     "old": 30,
//     "salary": 3000000
// };
// let obj_2 = {"sex": "Male", ...obj_1};
// console.log(obj_2);
let queQuan = {
    "Tỉnh": "Tiền Giang",
    "Huyện": "Cai Lậy",
    "Xã": "Long Tiên",
    "Số nhà": 512
}
let nguoiThan = {
    "Cha": "Mai Văn A",
    "Mẹ": "Lê Thị B"
}
let thanhDanh = {
    "Tên": "Mai Thành Danh",
    "Tuổi": 20
}
// Muốn Cập nhật object thanhDanh ---> có thêm người thân và quê quán cho ảnh
thanhDanh = {...thanhDanh, ...queQuan, ...nguoiThan};
console.log(thanhDanh);
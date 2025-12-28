const users = [
  { name: "Danh", age: 21 },
  { name: "An", age: 17 },
  { name: "Bình", age: 19 }
];
// 👉 Dùng map() tạo mảng mới chỉ chứa tên
const arr = users.map(object => object["name"]);
console.log(arr);
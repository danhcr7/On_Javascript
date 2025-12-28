const users = [
  { name: "Danh", age: 21 },
  { name: "An", age: 17 },
  { name: "Bình", age: 19 }
];
// 👉 Dùng map() tạo mảng mới chỉ chứa tên
const arr = users.map(object => object["name"]);
console.log(arr);
// 👉 Lọc ra user có age >= 18
const arr_1 = users.filter(object => object["age"]>=18 && object);
console.log(arr_1);
// 👉 Tìm user có name === "Danh":
let user_find = users.find(object => object["name"]==="Danh" && object);
console.log(user_find);
// Từ users: 👉 Tạo mảng mới, cập nhật tuổi "Danh" thành 22
const users_copy_1 = [...users];
users_copy_1.map(obj => obj.name==="Danh" && (obj.age = 22));
console.log(users_copy_1);
// Từ users: 👉 Tạo mảng mới loại bỏ user tên "An"
const users_2 = users.map(object => object.name !== "An" && (object));
console.log(users_2);
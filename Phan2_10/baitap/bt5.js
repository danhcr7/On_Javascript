const user = {
  name: "Danh",
  age: 21,
  city: "HCM"
};
// In ra tên tuổi:
console.log(`Tên: ${user.name}; Tuổi: ${user.age}`);
// 👉 Sau đó tạo object mới cập nhật age = 22
const user_copy = {...user, age: 22};
console.log(user_copy);
console.log("Hello World!");
/* Khi báo biến
- var: ít dùng, lỗi thời
- let: biến có thể thay đổi giá trị về sau khi ta gán lại
- const: hằng số, biến không thể thay đổi giá trị về sau
*/
var x = 10;
let y = 20;
const z = true;
console.log(x, y, z);
/*
Các kiểu dữ liệu quan trọng:
- number (số): 1, 2, 3, 3.4, -5, 0, 3,456, ...
- string (chuỗi): bọc trong "" hoặc ``.
- boolean: đúng/sai (true/false).
- null: khi gán null ---> biến thì biến đó có kdl là null.
- undefined: khi khai báo mà không gán giá trị cho biến, Javascript hiểu biến đó có kdl là undefined.
- object: gồm các cặp key và value đi chung với nhau + cách nhau bởi dấu , ---> bọc trong {}.
- array: [] gồm các phần tử bên trong, có thể cùng hoặc khác kdl đều được.
- function: trong arrow function.
*/


/*
Toán tử:
+ Số học: +, -, *, /; %; **; +=; -=; *=; /=; %=; **=
+ So sánh: >; >=; <; <=; === (so sánh bằng chặt, so sánh về kdl và giá trị); !=== (so sánh khác chặt, so sánh về kdl và giá trị)
+ Logic:
- && ---> chỉ đúng khi cả 2 đều đúng
- || ---> chỉ sai khi cả 2 đều sai
- ! ---> !true === false; !false === true
*/
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [...a1, ...a2];
console.log(a3);

// Copy object:
let obj_1 = {
    "name": "David",
    "old": 30,
    "salary": 3000000
};
let obj_2 = {...obj_1};
console.log(obj_2);
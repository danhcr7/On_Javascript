/*
if (conditions_1) {
    ...
} else if (conditions_2) {
    ...
} else if (conditions_3) {
    ...
}
....
  else if (conditions_n) {
    ...
}
else {
    ...
}
*/
let x = 5;
if (x%2 === 0) {
    console.log(`${x} là số chẵn`);
} else {
    console.log(`${x} là số lẻ`);
}

// Tính tổng từ 1 tới 100 của những phần tử là số lẻ lớn hơn 57
let sum = 0;
for (let i = 59; i <= 99; i++) {
    if (i%2 !== 0) {
        sum += i;
    }
}
console.log(`Tổng từ 1 tới 100 của những phần tử là số lẻ lớn hơn 57 là: ${sum}`);
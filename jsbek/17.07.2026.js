// 20. 1 dan 30 gacha bo'lgan 3 ga karrali sonlarni for yordamida chiqaring
// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// 21. Berilgan massiv elementlarining o'rtacha qiymatini for yordamida toping
// let arr = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// let average = sum / arr.length;

// console.log("O'rtacha qiymat:", average);

// 22. Foydalanuvchi kiritgan sonning teskari ko'rinishini while yordamida chiqaring.
// let son = Number(prompt("Son kiriting:"));
// let teskari = 0;

// while (son > 0) {
//     let qoldiq = son % 10;
//     teskari = teskari * 10 + qoldiq;
//     son = Math.floor(son / 10);
// }

// console.log("Teskari son:", teskari);

// 23. Berilgan massivdagi barcha musbat sonlarning yig'indisini for yordamida toping
// let arr = [5, -2, 8, -1, 10, -4, 3];
// let yigindi = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         yigindi += arr[i];
//     }
// }

// console.log("Musbat sonlar yig'indisi:", yigindi);

// 24. 10 dan 1 gacha bo'lgan sonlarni teskari tartibda for yordamida chiqaring
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
//  25. Berilgan massivda 5 raqami bor yoki yo'qligini for va if yordamida tekshiring
// let arr = [2, 8, 5, 10, 3];
// let bor = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 5) {
//     bor = true;
//     break;
//   }
// }

// if (bor) {
//   console.log("Massivda 5 bor.");
// } else {
//   console.log("Massivda 5 yo'q.");
// }   

// 1-masala: [if-else] Ikkita sonni parametr sifatida qabul qilib,
// ulardan kattasini qaytaruvchi funksiya yozing.

// function masala1(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(masala1(10, 5));

// 2-masala: [if-else] anligini
// aniqlovchi funksiya yozing. Natija: "musbat", "manfiy" yoki "nol".
// function masala2(son) {
//   if (son > 0) {
//     return "musbat";
//   } else if (son < 0) {
//     return "manfiy";
//   } else {
//     return "nol";
//   }
// }

// console.log(masala2(0))

// 3-masala: [if-else] Berilgan yosh bo'yicha kishi "bolalik" (0-12),
// "o'smirlik" (13-17), "kattalar" (18dan katta) toifasiga tegishli ekanligini aniqlang.

// function masala3(yosh) {
//   if (yosh >= 0 && yosh <= 12) {
//     return "bolalik";
//   } else if (yosh >= 13 && yosh <= 17) {
//     return "o'smirlik";
//   } else {
//     return "kattalar";
//   }
// }

// console.log(masala3(15))

// 4-masala: [for] 1 dan berilgan songacha bo'lgan barcha sonlar yig'indisini
// hisoblovchi funksiya yozing.
// function masala4(son) {
//   let yigindi = 0;

//   for (let i = 1; i <= son; i++) {
//     yigindi += i;
//   }

//   return yigindi;
// }

// console.log(masala4(10))


// 5-masala: [for] Berilgan sonning faktorialini hisoblovchi funksiya yozing.
// function masala5(son) {
//     if (son < 1) {
//         console.log("iltimos mafiy son kiritmang") 
//     } else {
//         let kopaytma = 1
//         for (let i=1; i <= son; i++) {
//             kopaytma *= i
//         }
//         return kopaytma
//     }
// } 
// console.log(masala5(5))

// 6. 1 dan 100 gacha bo'lgan barcha sonlarning yig'indisini for yordamida toping
// let yigindi = 0;

// for (let i = 1; i <= 100; i++) {
//     yigindi += i;
// }

// console.log("Yig'indi:", yigindi);

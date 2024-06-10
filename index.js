// for each

// 1-masala
// let p = 1;
// let arr = [];
// let sumArr=[1,2,3,4,5];
// sumArr.forEach(function(value){
//     arr.push(p=value * 2)
// })
// console.log(arr);

// 2-masala

// let sumArr = [];
// let arr = [2,1,-3,5,-7,-3]
// arr.forEach(function(value){
//     if (value>0) {
//      sumArr.push(value)
//     }
// })
// console.log(sumArr);

// 3-masala
// let p = 1;
// let arr = [];
// let sumArr=[1,2,3,4,5];
// sumArr.forEach(function(value){
//     arr.push(p=value * 2)
// })
// console.log(arr);

// 4-masala
// let arr = [1,2,3,5,6,7,6];
// let sum=0;
// arr.forEach(function(value){
//     sum=sum +value
// })
// console.log(sum);

// map

// 1-masala
// let arr=[1,2,3,4,5,6,7];
// let sumArr = arr.map(function(value){
//     return value*value
// })
// console.log(sumArr);

// 2-masala
// let arr = [1,2,3,5,5,6,7];
// let sumArr=arr.map(function(value){
//     return value+5
// });
// console.log(sumArr);

// 3-masala
//  let arr = ['javohir'];
//  let upperCaseres = arr.map(str => str.toUpperCase ());
//  console.log(upperCaseres);

// 4-masala
// let arr = [1, 4, 9, 16, 25];
// let res = arr.map(Math.sqrt);
// console.log(a);

// some every

// 1 masala
//  let arr = [1,2,3,-4,-5,-6,];
//  let a = arr.some(function(value){
//   return value;

// });
// console.log(a);

// 3 masala
//  let arr = [1,2,3,-4,-5,-6,];
//  let a = arr.every(function(value){
//   return value;

// });
// console.log(a);

// 4 masala

//  let arr = ['murodbek','Elyor','Ozodbek'];
//  let a = arr.every(function(value){
//   return value;

// });
// console.log(a);

// filter 

// 1 - masala

// function filterPositive(arr) {
//     return arr.filter(item => item > 0);
// }
// const originalArr = [-1, 5, --4, 70, -2, 0];
// const positiveArr = filterPositive(originalArr);
// console.log(originalArr);
// console.log(positiveArr);

// 2 - masala

// const inputArr = [1, 2, 3, 4, 5];
// const res = inputArr.filter(num => num % 2 === 0);
// console.log(res);

// 3 - masala

// const arr = ["apple", "banana", "pear", "grape", "kiwi", "orange", "melon"];
// const res = arr.filter(item => item.length < 5);
// console.log(res);

// 4 - masala

// let odamlar = [
//     {ism: 'javohir', yosh:16},
//     {ism: 'elyor', yosh:13},
//     {ism: 'olim', yosh: 18},
//     {ism: 'mashhur', yosh: 23}
// ];
// let res = odamlar.filter(odam => odam.yosh > 18);
// console.log(res);


// umumiy

// 1 - masala

// function tekshirish(arr, res) {
//     return arr.includes(res);
// }
// const testarr = [1, 2, 3, 4, 5];
// const testres = 3;
// const answer = tekshirish(testarr, testres);
// console.log(answer);

// 2 - masala

// function findIndex(arr, res) {
//     return arr.indexOf(res);
// }
// const arr = [10, 20, 30, 40, 50];
// const res = 30;
// const answer = findIndex(arr, res);
// console.log(answer);

// 3 - masala

// function findLastIndex(arr, res) {
//     return arr.lastIndexOf(res);
//   }
//   const arr = [10, 20, 30, 40, 30, 50];
//   const res = 30;
//   const lastIndex = findLastIndex(arr, res);
//   console.log(lastIndex);

// 4 - masala

// function findElement(arr,res) {
//     for (let i = 0; i < arr.length; i++) {
//         if (res(arr[i])) {
//             return arr[i];
//         }
//     }
//     return null;
// }
// const arr = [5, 10, 15, 20];
// const res = element => element > 10;
// const answer = findElement(arr, res);
// console.log(answer);

// 5 - masala

// function findElementIndex(arr, res) {
//     for (let i = 0; i < arr.length; i++) {
//       if (res(arr[i])) {
//         return i;
//       }
//     }
//     return -1;
//   }
//   const arr = [5, 10, 15, 20];
//   const res = element => element > 10;
//   const answer = findElementIndex(arr,res);
//   console.log(answer);

// 6 - masala

// function findLastElement(arr, res) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (res(arr[i])) {
//         return arr[i];
//       }
//     }
//     return null;
//   }
//   const arr = [5, 10, 15, 20, 10];
//   const res = element => element > 10;
//   const answer = findLastElement(arr, res);
//   console.log(answer));

// 7 - masala

// function findLastIndex(arr,res) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (res(arr[i])) {
//         return i;
//       }
//     }
//   }

//   const array = [5, 10, 15, 20, 25];
//   const res = element => element > 10;
//   const lastIndex = findLastIndex(array, res);
//   console.log(lastIndex);

// 8 - masala

// function reverseArr(array) {
//     return array.reverse();
// }
// const originalArr = [1, 2, 3, 4, 5];
// const reversedArr = reverseArr(originalArr);
// console.log(originalArr);
// console.log(reversedArr);

// 9 - masala

// function sortArr(arr) {
//     arr.sort((a, b) => a - b);
//     return arr;
// }
// const masala = [9, 5, 2, 7, 1];
// const oshgan = sortArr(masala);
// console.log(Masala);

// 10 - masala

// const arr = [1, 2, 3, 4, 5];
// arr.forEach((res) => {
//     console.log(res * 2);
// });

// 11 - masala

// function filterPositives(arr) {
//     return arr.filter(num => num > 0);
// }
// const inputArray = [-1, 2, -3, 4, -5, 6];
// const positiveNumbers = filterPositives(inputArray);
// console.log(positiveNumbers);

// 12 - masala

// function kvadratMassiv(massiv) {
//   var yangiMassiv = [];
//   for (var i = 0; i < massiv.length; i++) {
//     yangiMassiv.push(massiv[i] * massiv[i]);
//   }
//   return yangiMassiv;
// }
// var berilganMassiv = [1, 2, 3, 4, 5];
// var yangiMassiv = kvadratMassiv(berilganMassiv);
// console.log(yangiMassiv);

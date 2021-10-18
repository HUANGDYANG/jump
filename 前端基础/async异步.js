/*
 * @Author: HUANGDYANG
 * @Date: 2021-06-10 08:53:12
 * @LastEditTime: 2021-10-18 15:41:20
 * @LastEditors: HUANGDYANG
 * @Description:
 * ，
 * @FilePath: \jump\前端基础\async异步.js
 */
function getone(x) {
  if (x == 1) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("one data");
      }, 2000);
    });
  } else if (x == 2) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("two data");
      }, 1000);
    });
  }
}

const arr = [1, 2];
const reslut = [];
// foreach(里面的函数并发执行) 不会按顺序返回
async function FEtest() {
  arr.forEach(async (element) => {
    // console.log(element)
    const str = await getone(element);
    console.log(str);
    reslut.push(str);
  });
}
FEtest(); // foreach测试
const resulttwo = [];
async function fortest() {
  for (let i = 1; i <= 2; i++) {
    const str = await getone(i);
    console.log(str);
    resulttwo.push(str);
  }

  // console.log(resulttwo)
}
// 其他循环(里面的函数继发执行)可以按顺序返回
// fortest();

const resultthree = [];
async function mapTest() {
  const mapPromise = arr.map(async (x) => {
    const response = await getone(x);
    return response;
  });

  for (const y of mapPromise) {
    console.log(y);
    resultthree.push(await y);
  }
  console.log(resultthree);
}
// mapTest()

/*
 * @Author: HUANGDYANG
 * @Date: 2021-06-10 08:53:12
 * @LastEditTime: 2021-11-09 13:59:17
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
// foreach(里面的函数并发执行) 这里不会按顺序返回
async function FEtest() {
  arr.forEach(async (element) => {
    // console.log(element)
    const str = await getone(element);
    console.log(str);
    reslut.push(await str);
    console.log(reslut);
  });
}
// FEtest();

// for测试(继发执行，炒作耗时)
const resulttwo = [];
async function fortest() {
  for (let i = 1; i <= 2; i++) {
    const str = await getone(i);
    console.log(str);
    resulttwo.push(str);
  }

  // console.log(resulttwo)
}
// for for of for in循环(里面的函数并发执行)可以按顺序返回
// fortest();

const resultthree = [];
async function mapTest() {
  // map并发执行 async函数返回promise，继发返回
  const mapPromise = arr.map(async (x) => {
    const response = await getone(x);
    console.log('response: ', response);
    return response;
  });
  // console.log('mapPromise', mapPromise); 
  for (const y of mapPromise) {
    console.log('mapPromise', mapPromise);

    console.log('mapPromiseItem:', y);
    console.log('await mapPromiseItem:', await y);
    resultthree.push(await y);
  }
  console.log('result:', resultthree);
}


mapTest()
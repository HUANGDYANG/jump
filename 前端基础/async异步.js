/*
 * @Author: HUANGDYANG
 * @Date: 2021-06-10 08:53:12
 * @LastEditTime: 2021-07-28 08:53:14
 * @LastEditors: HUANGDYANG
 * @Description: 
 * @FilePath: \jump\d3\async异步.js
 */
function getone(x) {
  if (x == 1) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve('one data')
      }, 2000)
    })
  } else if (x == 2) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve('two data')
      }, 2000)
    })
  }
}

const arr = [1, 2]
const reslut = []

async function FEtest() {
  arr.forEach(async element => {

    // console.log(element)
    const str = await getone(element)
    reslut.push(str)
    console.log(reslut)
  })
}
// FEtest() // foreach测试
const resulttwo = []
async function fortest() {
  for (let i = 1; i <= 2; i++) {
    const str = await getone(i)
    console.log(str);
    resulttwo.push(str)
  }

  // console.log(resulttwo)
}

fortest()

const resultthree = []
async function mapTest() {
  const mapPromise = arr.map(async x => {
    const response = await getone(x)
    return response
  })

  for (const y of mapPromise) {
    console.log(y)
    resultthree.push(await y)
  }
  console.log(resultthree)
}
// mapTest()
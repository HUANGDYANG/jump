function getone(x) {
  if (x == 1) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve('one data')
      }, 200)
    })
  } else if (x == 2) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve('two data')
      }, 100)
    })
  }
}

const arr = [1, 2]
const reslut = []
function FEtest() {
  arr.forEach(async element => {
    console.log(element)
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
    resulttwo.push(str)
  }

  console.log(resulttwo)
}

// fortest()

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
mapTest()

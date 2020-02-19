const THIS_IS_CONST = 123;
let this_is_let = 123;

const say = () => {
    console.log('hi, i\'m omg-cli');
}

say();

class Circle {}


function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done');
    });
  }
  
  timeout(100).then((value) => {
    console.log(value);
  });


// ES7编译测试
let count = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject('promise故意抛出异常')
      }, 1000);
  })
}
let list = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve([1, 2, 3])
      }, 1000);
  })
}

let getList = async () => {
  let c = await count()
  console.log('async')    //此段代码并没有执行
  let l = await list()
  return { count: c, list: l }
}
console.time('start');
getList().then(res => {
  console.log(res)
})
.catch(err => {
  console.timeEnd('start')
  console.log(err)
})
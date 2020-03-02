// function getArray(min, max) {
//     const arr = Array.from(new Set(Array.from({length: 10}, () => (Math.floor(Math.random() * (max - min) + min))))).sort((a,b) => a-b);
//     return arr;
// }

// const arr = getArray(0, 30);
// console.log(arr)
// function run(arr) {

//     // 方法一
//     // const newArr = [];
//     // let subArr = [];
//     // for (let i = 0; i < arr.length; i++) {
//     //     const curr = arr[i];

//     //     if ( subArr.length == 0 || curr - subArr[subArr.length - 1] === 1) {
//     //         subArr.push(curr);
//     //     } else {
//     //         newArr.push([...subArr]);
//     //         subArr = [curr];
//     //     }
//     // }  
//     // if (subArr.length != 0) newArr.push([...subArr]);

//     const newArr = arr.reduce((arr, curr) => {
//         const item = arr[arr.length - 1];
//         if ( item.length == 0 || curr - item[item.length - 1] === 1 ) {
//             item.push(curr);
//             return arr;
//         } else {
//             arr.push([curr]);
//             return arr;
//         }
//     },[[]]);

//     console.log(newArr)
// }

// function run2(arr) {
//     const map = arr.reduce((map, curr) => {
//         const key = ~~(curr/10);
//         map[key] = map[key] || [];
//         map[key].push(curr);
//         return map;
//     }, {});
//     const list = [];
//     for (let key in map) {
//         list.push(map[key])
//     }
//     console.log(list);
//     return list;
// }

// // run(arr);
// run2(arr);

// const step = 'a'.charCodeAt() - 'A'.charCodeAt();
// const str = 'aBc';
// function toLowerCase(str) {
//     const arr = str.split('');
//     for (let i = 0; i < arr.length; i++) {
//         if ( /[a-z]/.test(arr[i])  ) {
//             arr[i] = String.fromCharCode(arr[i].charCodeAt() - step)
//         } else {
//             arr[i] = String.fromCharCode(arr[i].charCodeAt() + step)
//         }
//     }
//     return arr.join(',');
// } 

// console.log(toLowerCase(str));

// let str = 'my name is linhao, my age is 18';

// function search(S, T) {
//     console.log(S.search(T), T.length);
//     console.log(S.match(T), T.length);
// }

// search(str, 'linhao');

// var arr = [1,2,3,4,5,6,7];
// function rotate(arr, k) {
//     const arr1 = arr.splice(k);
//     const newArr = [].concat(arr1, arr);
//     console.log(newArr)
// } 

// console.log(rotate(arr, 3))

// for ( let i = 1; i <  10000; i++) {
//     if ( i < 10 ) continue;
//     const n = i.toString().split('');
//     if ( n.join() == n.reverse().join() ) {
//         console.log(n.join(''));
//     }
// }

// const arr = [1, 2, 0, 3, 0, 5];
// for ( let i = 0; i < arr.length; i++ ) {
//     if ( arr[i] == 0 ) {
//         arr.push(arr[i]);
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);


// const arr = [2,4,7,15];

// function sum(arr, target) {
//     for ( let i = 0;i < arr.length; i++ ) {
//         for (let n = 0; n < arr.length; n++) {
//             if ( i != n && arr[i] + arr[n] == target ) {
//                 console.log(i,n);
//                 return;
//             }
//         }
//     }
// }

// sum(arr, 9);

// function print(n){
//     setTimeout(() => {
//     console.log(n);
//     }, Math.floor(Math.random() * 1000));
//     }
//     for(var i = 0; i < 100; i++){
//     print(i);
//     }

// function print(n){
//     setTimeout(() => {
//       console.log(n);
//     }, 1, Math.floor(Math.random() * 1000));
//   }
//   for(var i = 0; i < 100; i++){
//     print(i);
//   }


// const arr = Array.from( new Set( Array.from( { length: 10 }, () => Math.floor( Math.random() * ( 10000 - 1 + 1 ) ) ) ) );
// // 冒泡排序
// function bubbleSort ( arr ) {
//   const now = Date.now();
//   let count = 0;
//   for ( let i = 0; i < arr.length; i++ ) {
//     for ( let n = 0; n < arr.length - i; n++ ) {
//       let tmp = null;
//       if ( arr[n] > arr[n + 1] ) {
//         tmp = arr[n];
//         arr[n] = arr[n + 1];
//         arr[n + 1] = tmp;
//       }
//       count++;
//     }
//   }
//   console.log( '耗时 ->', Date.now() - now );
//   console.log( 'result ->', arr );
//   console.log( '次数 ->', count );
// }

// // 选择排序法
// function selectSort ( arr ) {
//   console.log( '原始数据 -> ', arr )
//   const now = Date.now();
//   let count = 0;

//   let minIndex, tmp;
//   for ( let i = 0; i < arr.length - 1; i++ ) {

//     minIndex = i;

//     for ( let n = 0 + i; n < arr.length; n++ ) {
//       count++;
//       if ( arr[n] < arr[minIndex] ) minIndex = n;
//     }

//     tmp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = tmp;

//   }


//   console.log( '耗时 ->', Date.now() - now );
//   console.log( 'result ->', arr );
//   console.log( '次数 ->', count );
// }

// // 插入排序法
// function inserSort ( arr ) {
//   console.log( '原始数据 -> ', arr )
//   const now = Date.now();
//   let count = 0;

//   for ( let i = 1; i < arr.length; i++ ) {
//     let preIndex = i - 1;
//     let curr = arr[i];
//     count++;
//     while ( preIndex >= 0 && arr[preIndex] > curr ) {
//       arr[preIndex + 1] = arr[preIndex];
//       preIndex--;
//       count++;
//     }

//     arr[preIndex + 1] = curr;

//   }


//   console.log( '耗时 ->', Date.now() - now );
//   console.log( 'result ->', arr );
//   console.log( '次数 ->', count );
// }


// function mergeSort ( arr ) { // 采用自上而下的递归方法
//   var len = arr.length;
//   if ( len < 2 ) {
//     return arr;
//   }
//   var middle = Math.floor( len / 2 ),
//     left = arr.slice( 0, middle ),
//     right = arr.slice( middle );
//   return merge( mergeSort( left ), mergeSort( right ) );
// }

// function merge ( left, right ) {
//   var result = [];

//   while ( left.length > 0 && right.length > 0 ) {
//     if ( left[0] <= right[0] ) {
//       result.push( left.shift() );
//     } else {
//       result.push( right.shift() );
//     }
//   }

//   while ( left.length )
//     result.push( left.shift() );

//   while ( right.length )
//     result.push( right.shift() );

//   return result;
// }

// function quickSort ( arr ) {

//   if ( arr.length <= 1 ) return arr;

//   const middleIndex = arr.length >> 1;
//   const middle = arr.splice( middleIndex, 1 );
//   const left = [];
//   const right = [];
//   for ( let i = 0; i < arr.length; i++ ) {
//     if ( arr[i] < middle ) {
//       left.push( arr[i] );
//     } else {
//       right.push( arr[i] );
//     }
//   }

//   return quickSort( left ).concat( middle, quickSort( right ) );
// }


// // bubbleSort( [].concat( arr ) );
// // selectSort( [].concat( arr ) );
// // inserSort( [].concat( arr ) );
// console.log( arr )
// // mergeSort( [].concat( arr ) );
// console.log( quickSort( [].concat( arr ) ) );


let obj = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: {
    name: '我是一个对象',
    id: 1,
    qwe: {
      a: 1
    }
  },
  arr: [0, 1, 2, { b: 2 }],
  date: new Date( 0 ),
  reg: /我是一个正则/ig,
  [Symbol( '1' )]: 1,
  [Symbol( '2' )]: 2,
  func () {
    console.log( 123 )
  }
};

function deepClone ( obj, map = {} ) {
  for ( let item in obj ) {
    const curr = obj[item];
    if ( Object.prototype.toString.call( curr ) == '[object Date]' ) {
      map[item] = new Date( curr );
    } else if ( Object.prototype.toString.call( curr ) == '[object Null]' ) {
      map[item] = null;
    } else if ( Object.prototype.toString.call( curr ) == '[object Array]' ) {
      map[item] = [].concat( curr );
    } else if ( Object.prototype.toString.call( curr ) == '[object RegExp]' ) {
      map[item] = new RegExp(curr);
    } else if ( Object.prototype.toString.call( curr ) == '[object Object]' ) {
      map[item] = {};
      deepClone(obj[item], map[item]);
    } else {
      map[item] = curr;
    }
  }

  const symbols = Object.getOwnPropertySymbols(obj);
  for ( let i = 0; i < symbols.length; i++ ) {
    map[symbols[i]] = obj[symbols[i]];
  }

  return map;
}

const newObj = deepClone( obj );

for ( let item in newObj ) {
  console.log( item, '->', newObj[item] === obj[item] )
}
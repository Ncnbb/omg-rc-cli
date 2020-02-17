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

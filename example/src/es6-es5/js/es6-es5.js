
const THIS_IS_CONST = 'const';
let thisIsLet = 'let';
thisIsLet = 'const';
console.log( THIS_IS_CONST );
console.log( thisIsLet );

const say = () => {
    console.log( 'hi, i\'m omg-cli' );
};
say();
const aaa = '123';
console.log( aaa );

const object = { a: 1, b: 2, c: 3 };
const { a, b, c } = object;
console.log( a + b + c );
const z = { ...object };
console.log( z );
class Bork {
    static a = 'foo';

    x = 'bar';
}

const bork = new Bork();
console.log( bork.a );

const pr = new Promise( ( resolve ) => {
    console.log( 'promise' );
    resolve();
} );
console.log( pr );

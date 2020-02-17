function say(name: string): void {
    console.log(name);
}

say('LamHo');

const getApi = new Promise((resolve) => {
    resolve('123');
});

const object = { a: 1, b: 2 };
const { a, b } = object;

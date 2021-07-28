const asyncBar = async () => 'Some string!'

export function foo() {
    console.log(asyncBar().then(v=>console.log('task9==========', v)));
}
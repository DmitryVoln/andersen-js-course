const getPromise1 = () => Promise.resolve(2);
const getPromise2 = () => Promise.resolve(3);
const getPromise3 = () => Promise.resolve(7);

export async function foo() {
  let value1 = await getPromise1();
  let value2 = await getPromise2();
  let value3 = await getPromise3();
  console.log('task7==========', value1 * (value2 + value3));
}

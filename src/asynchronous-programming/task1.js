export function foo(x, cb) {
  if (x > 10) {
    console.log('x > 10');
    return cb();
  }
  return 'x <= 10';
}

export function createCb(str) {
  return () => str;
}

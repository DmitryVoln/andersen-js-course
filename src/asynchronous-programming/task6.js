function getResolvedPromise(val) {
  return Promise.resolve(val);
}

export function getError() {
  getResolvedPromise(500)
    .then(v => {
      if (v > 300) {
        throw new Error('Ошибка');
      }
    })
    .catch(err => console.log('task6==========',err))
    .finally(() => console.log('task6==========','This is Finally!'));
}

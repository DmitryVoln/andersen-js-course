export function fetchDataParallel(...urls) {
  let promises = urls.map(url => fetch(url));
  Promise.all(promises)
    .then(promises => Promise.all(promises.map(data => data.json())))
    .then(data => console.log('task5=====Par\n', data));
}

export function fetchDataConsistently(...urls) {
  let result = [];
  let i = 0;
  while (i <= urls.length - 1) {
    fetch(urls[i])
      .then(data => data.json())
      .then(data => result.push(data))
      .finally(() => {
        if (result.length === urls.length) {
          console.log('task5=====Cons\n', result);
        }
      });
    i++;
  }
}

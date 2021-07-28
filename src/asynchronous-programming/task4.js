export function fetchData(url1, url2) {
  return fetch(url1)
    .then(data => data.json())
    .then(data => data.getUsersData)
    .then(data => {
      if (data) {
        fetch(url2)
          .then(data => data.json())
          .then(data => console.log('task4==========', data));
      }
    });
}

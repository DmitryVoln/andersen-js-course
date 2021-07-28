const getUsers = url => fetch(url);

export async function foo(url) {
  try {
    let data = await getUsers(url);
    let [user] = await data.json();
    console.log('task8==========', user);
  } catch (err) {
    console.log('task8==========', 'Error:', err);
  }
}

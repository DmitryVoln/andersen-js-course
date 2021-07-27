/**
 * Реализовать функцию union в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива, и возвращает массив объедененных значений,
 * без дублирования
 *
 * console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
 * console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]
 */

export function union(arr1, arr2) {
  const unicSet = new Set([...arr1, ...arr2]);
  return Array.from(unicSet);
  // or:
  // const commonArr = [...arr1, ...arr2];
  // const unicArr = [];

  // for (const item of commonArr) {
  //     if (!unicArr.includes(item)) {
  //         unicArr.push(item);        }
  // }
  // return unicArr;
}

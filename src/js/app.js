export default function orderByProps(object, arr) {
  const objFirst = [];
  const objSecond = [];

  for (const key in object) {
    if (arr.includes(key)) {
      objFirst.push({ key, value: object[key] });
    } else {
      objSecond.push({ key, value: object[key] });
    }
  }

  objFirst.sort((a, b) => arr.indexOf(a.key) - arr.indexOf(b.key));
  objSecond.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...objFirst, ...objSecond];
}

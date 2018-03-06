export default (arr, key, value) =>
  arr.findIndex(elem => elem[key] === value);

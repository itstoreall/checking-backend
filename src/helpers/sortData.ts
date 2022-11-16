// @ts-nocheck
const sortData = (arr, key) => {
  if (!Array.isArray(arr)) return arr;
  return arr.sort((a, b) => (a[key] < b[key] ? 1 : -1));
};

export default sortData;

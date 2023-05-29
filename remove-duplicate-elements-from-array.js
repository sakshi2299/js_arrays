const array = [12, 32, 34, 12, 54, 32, 12];
const removeDuplicates = (array) => {
  let new_array = [...new Set(array)];
  return new_array;
};
console.log(removeDuplicates(array));

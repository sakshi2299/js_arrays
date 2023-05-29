const array = [12, 32, 33, 54, 35];
const removeEven = (array) => {
  let new_array = array.filter((element) => element % 2 !== 0);
  return new_array;
};
console.log(removeEven(array));

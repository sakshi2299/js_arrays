const array = [12, 42, 54, 78, 544, 11];
const returnLargestNumber = (array) => {
  return Math.max(...array);
};
console.log(returnLargestNumber(array));

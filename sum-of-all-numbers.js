const array = [1, 2, 5, 4, 30];

const sumOfAllNumbers = (array) => {
  let sum = 0;

  for (let element of array) {
    sum += element;
  }
  return sum;
};
console.log(sumOfAllNumbers(array));

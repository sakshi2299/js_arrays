const arr1 = [12, 32, 11, 34, 31];
const arr2 = [11, 56, 34, 15, 21];
const returnCommonElements = (arr1, arr2) => {
  return arr1.filter((element) => arr2.includes(element));
};
console.log(returnCommonElements(arr1, arr2));

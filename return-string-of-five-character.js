const array = ["sakshi", "joshi", "abcde", "precious"];
const returnStringOfLength5 = (array) => {
  /*for(let element of array){
        if(element.length===5)
        return element
    }*/
  let new_array = array.filter((element) => element.length === 5);
  return new_array;
};

console.log(returnStringOfLength5(array));

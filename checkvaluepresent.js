const array = [12,34,34,56,23,55]
let value = 34;
const check = (array,value)=>{
    //for (let i=0;i<array.length;i++){
    //if(array[i]===value)
    for(let element of array)
    {
        if(element===value)
    return true;

    }
    return false
}
console.log(check(array,value))

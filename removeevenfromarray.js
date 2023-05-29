const array = [12,32,33,54,35]
const remove_even = (array)=>{
    let new_array = array.filter((element)=>element%2!==0)
    return new_array
}
console.log(remove_even(array))

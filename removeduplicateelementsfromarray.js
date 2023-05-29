const array = [12,32,34,12,54,32,12]
const removeduplicates = (array)=>{
    let new_array = [...new Set(array)]
    return new_array
}
console.log(removeduplicates(array))

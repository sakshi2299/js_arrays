const array = [1,2,5,4,30]

const sumofelements = (array)=>{
let sum=0;

    for(let element of array){
        sum+=element


    }
    return sum
}
console.log(sumofelements(array))

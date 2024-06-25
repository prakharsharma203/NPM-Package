//1. Function to calculate the sum of all element in array

function sum(arr) {
    return arr.reduce((acc,cur)=> acc+cur,0);
}

//2. Function to remove Duplicates from an array
function removeDuplicates(arr) {
    return Array.from(new Set(arr))
}

//3. Function to filter out even number from an array
function filterEvenNumber(arr){
    return arr.filter(num => num % 2 === 0)
}

//4. Function to filter out odd number from an array
function filterOddNumber(arr){
    return arr.filter(num => num % 2 !== 0)
}

//5. Functon to find maximum element in an array
function findMax(arr){
    return Math.max(...arr)
}


//6. Functon to find minimum element in an array
function findMin(arr){
    return Math.min(...arr)
}

//7. Function to sort an array in ascending order
function sortAscending(arr){
    return arr.sort((a,b)=>a-b)
}

//8. Function to sort an array in descending order
function sortDescending(arr){
    return arr.sort((a,b)=>b-a)
}

//9. Function to reverse an array
function reverseArray(arr){
    return arr.reverse()
}

//10. Function to check if all elements in the array are of the same type
function checkSameType(arr){
    return arr.every((val, i, array) => typeof val === typeof array[0]);
}

const operations = {sum,removeDuplicates,filterEvenNumber,filterOddNumber,findMax,findMin,sortAscending,sortDescending,reverseArray,checkSameType};

module.exports = operations;
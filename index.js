// Question 1
/*
Mutating array methods mutate(changes) the original array while 
non-mutating array methods return a new array without modifying the original array


Mutating array method examples
1. push(): Adds one or more elements to the end of an array and 
   returns the new length of the array.

2. pop(): Removes the last element from an array and returns that
   element.

3. splice(): Changes the contents of an array by removing or 
   replacing existing elements and/or adding new elements.

4. shift(): Removes the first element from an array and returns 
   that element, shifting all subsequent elements to a lower index.

5. reverse(): Reverses the order of the elements in an array in 
   place.


Non-Mutating array method examples
1. concat(): Combines two or more arrays and returns a new array
   that contains all the elements from the original arrays.

2. slice(): Returns a new array that contains a copy of a portion
   of an existing array, selected from start to end (end not included).

3. filter(): Returns a new array containing all elements that 
   pass the test implemented by the provided function.

4. map(): Returns a new array containing the results of calling a
   provided function on every element in the original array.

5. reduce(): Applies a function against an accumulator and each
   element in the array to reduce it to a single value.*/


//Question 2
let languages = ['C#','JavaScript','Ruby','PHP','Python']

//Add ‘Kotlin’ to the end of the array
languages.push('Kotlin')
console.log(languages)
//Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java')
console.log(languages)

//Remove the first item in the array
languages.shift()
console.log(languages)

//Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala','Swift')
console.log(languages)

//Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5,1,'Go', 'Rust')

console.log(languages)

//Question 3
//The new value of fruit is shown below
//[ 'apple', 'mango', 'orange' ]

//Question 4
/*Write a function that accepts an array of numbers as an 
argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10*/
function maxValue(arr){
    let maxElement=[arr[0]]
    for (let i=0; i<=arr.length; i++){
        if(maxElement<arr[i]){
            maxElement=arr[i]
        }
    }
    return maxElement
}

console.log(maxValue([4,5,10,-2]))

//Question 5
/*Write a function called valTimesIndex which accepts an array of
 numbers and returns a new array with each value multiplied by 
 the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]*/
function valTimesIndex(arr){
    return arr.map((element, index)=> element * index)
}

console.log(valTimesIndex([5,10,15]))
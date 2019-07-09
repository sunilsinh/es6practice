// var arrayData = [10,12,15,25,26];

// function checkNumberisGreater(number){
//     return arrayData >number;
// }


// var returnArrayData = arrayData.map(checkNumberisGreater(10));

// console.log(returnArrayData);

/* Custom foreach
function myForeach(callback){
        for(var i=0; i<this.length; i++){
            callback(this[i]);
        }
}

var arr= ["a","b","c","d"];

Array.prototype.myForeach = myForeach;

arr.myForeach((data)=>{
    console.log(data);
});
*/
// function myMap(callback){
//     for(var i=0; i< this.length; i++ ){
//         callback(this[i]);
//     }
// }

// Array generator
// var arraygenerator = [], max =100;
// for(var i=1; i<=max; i++){
//     arraygenerator.push(i);
// }
// console.log(arraygenerator);

// SOrt an array

// var array = [1,5,0,4,6];
// console.log(array.sort());

// Array concat

// var arr1 = [1,2,4,5];
// var arr2 = [88,7,6,4];
// console.log(arr1.concat(arr2));


// Append An array
// var arr1 = [1,2,4,5];
// var arr2 = [88,7,6,4];
// //Array.prototype.push.apply(arr1, arr2);
// //console.log(arr1);
// arr1.push(arr2);
// console.log(arr1);

// using ese spread operator
// var arr1 = [1,2,4,5];
// var arr2 = [88,7,6,4];
// console.log(...arr1,...arr2);


// Verifying that given argument is array
// var arr1 = [1,2,4,5];
// console.log(Array.isArray(arr1));

// Min and max from array
// var arr2 = [88,7,6,4];
// console.log(Math.max.apply(Math,arr2));
// console.log(Math.min.apply(Math,arr2));

// Empty an array 
// var arr2 = [88,7,6,4];
// arr2.length = 0;
// console.log(arr2);
// //console.log(arr2=[] );

// Remove muiltiple item from array
// var arr2 = [88,7,6,4];

// arr2.length=2;
// console.log(arr2);

// Find Index for Array of Item:
// var arr1 = [88,7,6,4];

// console.log(arr1.indexOf(7));

// let index = arr1.lastIndexOf(88); 
// console.log("index is : " + index) //0


// Filter 

// var arr1 = [25,88,7,6,4];
// var result = arr1.filter((data)=>{
//         return data>15;
// });
// console.log(result); //[25,88]

// Map: it will mapped with every element of array
// and according to condition based it will provice new array

// var arr1 = [25,88,7,6,4];

// var result = arr1.map((data)=>{
//     return data>10;
// });

// console.log(result); //// var arr1 = [25,88,7,6,4];

// var arr1 = [25,88,7,6,4];

// var result = arr1.reduce((a,b)=>{
//     return a+b;
// });

// console.log(result); // 130

// Reverse

// var arr1 = [25,88,7,6,4];
// console.log(arr1.reverse()); //[ 4, 6, 7, 88, 25 ]


// pop() -- remove element from last
// var arr1 = [25,88,7,6,4];
// console.log(arr1.pop()); //4

// Shift
// var arr1 = [25,88,7,6,4];
// console.log(arr1.shift()); // 25

// push - add element in last
// var arr1 = [25,88,7,6,4];
// arr1.push(26);
// console.log(arr1); //var arr1 = [25,88,7,6,4];



// Unshift - add element in starting point
// var arr1 = [25,88,7,6,4];
// arr1.unshift(12);
// console.log(arr1); //var arr1 = [25,88,7,6,4];


// Splice(): splice() method changes the content of an array, adding new elements while removing old elements.
//array.splice(index, howMany, [element1][, ..., elementN]);
/*
index − Index at which to start changing the array.
howMany − An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed.
element1, …, elementN − The elements to add to the array. If you don’t specify any elements, splice simply removes the elements from the array.
adding a new value in a specific index position,
*/
// const arr = ["orange", "mango", "banana", "sugar", "tea"]
// arr.splice(2, 2, "water"); 
// console.log(arr); 
// //delete an item,
// const arr1 = ["orange", "mango", "banana", "sugar", "tea"]
// arr1.splice(3, 1)
// console.log(arr1) //["orange", "mango", "banana", "tea"]

// //or delete the whole items from the given index,
// const arr2 = ["orange", "mango", "banana", "sugar", "tea"]
// arr.splice(3)
// console.log(arr2) //["orange", "mango", "banana"]

// //delete all the data from an array[empty array],
// const arr4 = ["orange", "mango", "banana", "sugar", "tea"]
// const newArr = arr4.splice()
// console.log(newArr) // []


//slice() :slice() method extracts a section of an array and returns a new array.
// array.slice( begin [,end] )
/*
begin − Zero-based index at which to begin extraction. 
As a negative index, start indicates an offset
 from the end of the sequence.
end − Zero-based index at which to end extraction.
*/
// const arr = ["orange", "mango", "banana", "sugar", "tea"] 
// const newArr = arr.slice(1,4)
// console.log(newArr) //["mango", "banana", "sugar"]

//cloning an array,
// const arr = ["orange", "mango", "banana", "sugar", "tea"] 
// const newArr = arr.slice();
// console.log(newArr) //["orange", "mango", "banana", "sugar", "tea"]


//Includes: it will check array of value exist or not

// const ratings = [3, 5, 4, 9, 5];
// const includesRating = ratings.includes(9);
// console.log(includesRating) // true


//Some: Check if there is at least one value in an array. Similar to .includes()Some:

// const ratings = [1,1,1,1];
// const goodOverallRating = ratings.some( (rating) =>{
//         console.log(rating);
//       return rating === 1
// });
// console.log(goodOverallRating) // false


//Every:Similar to .some(), but checks if all items in an array pass a condition.

// const ratings = [3, 5, 4, 9, 5];
// const goodOverallRating = ratings.every( rating => rating >= 3 );
// console.log(goodOverallRating) // true

// toString

/*
toString() method returns a string representing the source code of the specified array and its elements.
*/
// const arr = ["orange", "mango", "banana", "sugar", "tea"] 
// const newArr = arr.toString();
// console.log(newArr) //"orange,mango,banana,sugar,tea"


//String functions es6
// const str ='Rachna';
// console.log(str.startsWith("rach"));// false
// console.log(str.startsWith("Rach"));// true
// console.log(str.endsWith("Rach"));// false
// console.log(str.endsWith("a"));// true
// console.log(str.includes("Rach"));// true
// console.log(str.repeat(3));// true // RachnaRachnaRachna


// need to learn
//console.dir(Object);

/*Array.prototype.filBySunil = function(fn){
	let newArray = [];let count = 0;
	for(let i=0; i< this.length; i++){
		if(fn(this[i])){
			newArray[count++] = this[i];;
		}
	}
	return newArray;
}*/

/*
Array.prototype.mapbySunil = function(fn){
    let newArray = [];
    for(let i=0; i< this.length; i++){
        newArray[i] = fn(this[i]);
    }
    return newArray;
}

*/
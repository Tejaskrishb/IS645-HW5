/**
 2.	Starting with an array containing the numbers 1 through 10, use filter, map and reduce to produce the following.  Use console.log to display the results.
a.	An array of odd numbers
b.	An array of numbers divisible by 2 or 5
c.	An array of numbers divisible by 3 squared
d.	The sum of the following: square the numbers divisible by 5
 */

//Display all numbers in the array
const display = p_array=>{
    return p_array.map(x=> x);
}

//a.	function to find of odd numbers in the array
const odd_number = p_array=>{
    return p_array.filter(x => x%2 !== 0);
}

//b. function to find of numbers in the array divisible by 2 or 5
const get_numbers = p_array=>{
    return p_array.filter(x => x%2 ===0 || x%5 ===0);
}

//c.function to find of numbers in the array divisible by 3 squared
const get_numbers2 = p_array=>{
    return p_array.filter(x => x % 3 ===0).map(x => x**2);
}

//d.Function to find the numbers divisible by 5, square the numbers and thier sum
const get_sum = p_array=>{
    let f_array = [];
    f_array = p_array.filter(x=> x%5 ===0).map(x=> x**2);
    console.log(f_array);
    return f_array.reduce((acc,value)=> acc + value,0);
}

let num_array = [1,2,3,4,5,6,7,8,9,10];
console.log(`The array of numbers :${display(num_array)}`);
console.log(`Odd Numbers in the array ${odd_number(num_array)}`);
console.log(`Numbers in the array divisible by 2 or 5 are : ${get_numbers(num_array)}`);
console.log(`Numbers in the array divisible by 3 sqaured : ${get_numbers2(num_array)}`);
console.log(`Numbers in the array divisible by 5 ,sqaured and their sum : ${get_sum(num_array)}`);
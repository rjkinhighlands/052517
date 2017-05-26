//@here * **Instructions:**

 //* Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and checks if they are equal.
 //* If the two numbers are equal then output: "true". Otherwise output: "false".

 //* Bonus: Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.

 //* Hint: `console.log(process.argv)` as a starting point if you are completely lost.

// Get Variables

var argOne = process.argv[2]
var argTwo = process.argv[3]

// Run the test

if (argOne === argTwo){

// Print equality.

	console.log(true);
}
else{
	console.log(false);
}

// BONUS: If the sum of remainders is still 0... then that means both were multiples of 7 to begin with.

if ((argOne % 7) + (argTwo % 7) === 0){
	console.log(true);
}
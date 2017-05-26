//Create a Node application that reads the best_things_ever.txt file, parses the comma separated elements, and ultimately console logs each element in the file on separate lines.

//HINT: If you are struggling to figure out how to loop your way through the text, look into the .split() method. This could make your life a whole lot easier.

// Includes the FS package for reading and writing packages

var fs = require("fs");

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"

fs.readFile("best_things_ever.txt", "utf8", function(err, data) {

  // Break the string down by comma separation and store the contents into the output array.

  var output = data.split(",");

  // Loop Through the newly created output array

  for (var i = 0; i < output.length; i++) {

    // Print each element (item) of the array/
    
    console.log(output[i]);
  }

});

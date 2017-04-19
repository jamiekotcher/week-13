var array; //declaration/definition
array = ["a", "b", "c"]; //Initialiation (before initialization it is undefined)

console.log(array);
console.log(randomName); //would say "randomName is not defined"
var randomName = 10;
// console.log(randomname); //TYPOS MATTER
console.log(randomName);

console.log(array[2]); //this is valid
console.log(array[4]); //the 4th position in the array is not there 

var obj = { name: "Navi", university: "Northeastern",
			forEach: function(){console.log("log obj");}
			}; //defining keys and corresponding values

// obj.forEach();

var x = array[4];
// console.log(x.length);


//PROBLEM 2
console.log("this is a string", 9, [9, 10, 91,], obj);
//hypothetically, console.log can take any number of arguments 

var object = { odd: [1,3,5,7,9] };
// object.even.append(2);
// object.odd.append(11); //not undefined, this is just a function that does not exist

object.odd.push(11);
object.odd.length;
object.odd.push(13);
// d3.select("div")
// 	.selectAll("p")
// 	.style("color", "red")
// 	.;

function functionName() {
	
}
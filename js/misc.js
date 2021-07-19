var x = 7.5;
function a() {
 return 1 + x;
}

function b() {
 return 2 + x;
}

function add30(x) {
	return x + 30;
}

/// 

let arr = [1, 2, 3, 4, 5];
arr.push("apple"); // [1, 2, 3, 4, 5, "apple"]
console.log(arr[5]); // "apple"
arr.includes(6); // false

///

if(1 == 2) {
	// this is skipped
} else if (1 == 1){
	// this is ran
} else {
	// this is also skipped
}

let i;
for ( /* initialization */ i = 0; /* condition */ i < 10; /* post */ i++) {
	console.log(i);
}
// 1
// 2
// ...
// 9

for ( /* initialization */ i = 5; /* condition */ i < 7; /* post */ i = i + 1) {
	console.log(i);
}
// 5
// 6

for ( /* initialization */ i = 5; /* condition */ i >= 0; /* post */ i--) {
	console.log(i);
}
// 5
// 4
// ...
// 1
// 0

{
	var x;
	let a = 0;
	const THIS_VALUE_CANT_CHANGE = 5;
	THIS_VALUE_CANT_CHANGE = 10; // ERROR!
}

//// SCOPE

function yourFunctionName(param1, param2) {
  // do stuff;

  {
  	let littleScope;
  }
  console.log(littleScope); // undefined

  return (param1 + param2);
}
console.log(param1); // undefined
let sum = yourFunctionName(10, 20);
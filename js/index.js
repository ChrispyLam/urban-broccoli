let button = document.getElementById("myButton");
button.onclick = myFunction;
//button.addEventListener("click", myFunction);

// This function changes the top header title
let counter = 0;

function myFunction() {
	counter = counter + 1;
	document.getElementById("myButton").innerHTML = counter;
}

document.getElementById("myForm").onsubmit = function(event) {
	event.preventDefault();
	let firstCol = event.target[0].value;
	let secondCol = event.target[1].value;
	let thirdCol = event.target[2].value;

	addToTable(firstCol, secondCol, thirdCol);
};

function addToTable(col1, col2, col3) {

	document.getElementById("myTable").innerHTML += `<tr>
      <td>` + col1 + `</td>
      <td>` + col2 + `</td>
      <td>` + col3 + `</td>
    </tr>`

	return false;
}

function grabBroccoli() {
	fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyAW1B1v3qNVcehsWhHPrZeTlmxb3rISwf0&cx=d3d80c4387c3dd644&q=broccoli&searchType=image&start=" + (Math.floor(Math.random() * 100) + 1))
	.then(response => response.json())
	.then(response => {
		document.getElementById("broccoli").src = response.items[0].link;
	})
	.catch(err => console.log(err));
}
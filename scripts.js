// A list holding some colors
var colors =["red", "orange", "yellow", "green", "blue", "purple"];

// A variable to hold our position in the color array
var colorPosition = 0;

//The function that gets called when you click the button
function doSomething(){

	//Create the new style from our current position on the color list
	//It also automatically increments the position
	var newBackgroundStyle = "background:" + colors[colorPosition++];

	//If we go outside of our list, go back to the beginning
	if(colorPosition >= colors.length)
		colorPosition = 0;

	//Update the page with our to style
	document.body.style = newBackgroundStyle;
}
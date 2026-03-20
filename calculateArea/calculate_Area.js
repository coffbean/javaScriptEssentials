

function calculateArea() {
    rectangleLength = parseFloat(document.getElementById("length").value);
    rectangleWidth = parseFloat(document.getElementById("width").value);
    let rectangleArea = rectangleLength * rectangleWidth;

    document.getElementById("result").innerHTML = `The area of the rectangle is: ${rectangleArea}`;
}

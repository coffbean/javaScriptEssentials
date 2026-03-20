
function calculateGroceryTotal () {
    amount1 = parseFloat(document.getElementById("grocery1").value);
    amount2 = parseFloat(document.getElementById("grocery2").value);
    amount3 = parseFloat(document.getElementById("grocery3").value);

    let groceryTotal = amount1 + amount2 + amount3;

    document.getElementById("result").innerHTML = `The total for your grocery bill is: ${groceryTotal}`;

}   
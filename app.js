function getInput() {
    var input = document.getElementById("y-number").value;
    alert(input * input);
}

document.getElementById("submit").onclick = getInput;
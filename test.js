var displayInput = document.getElementById("displayInput");
function getVal(val) {
    // console(val);
    displayInput.value += val;
}

function calculate() {
    displayInput.value = eval(displayInput.value);
    // var a = displayInput.value;
    // a = eval(a);
    // console(a);
    // displayInput.value = a;
}

function clearAll() {
    displayInput.value = "";
}


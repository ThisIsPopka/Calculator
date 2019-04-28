function setResult() {
    var tmp = document.getElementById("inputID3").value;
    document.getElementById("inputID1").value = tmp;
    document.getElementById("inputID2").value = "";
    document.getElementById("inputID3").value = "";
}

function plus() {
    var tmp1 = document.getElementById("inputID1").value;
    var tmp2 = document.getElementById("inputID2").value;
    var result = parseFloat(tmp1) + parseFloat(tmp2);
    document.getElementById("inputID3").value = result;
}

function minus() {
    var tmp1 = document.getElementById("inputID1").value;
    var tmp2 = document.getElementById("inputID2").value;
    var result = parseFloat(tmp1) - parseFloat(tmp2);
    document.getElementById("inputID3").value = result;
}

function multiply() {
    var tmp1 = document.getElementById("inputID1").value;
    var tmp2 = document.getElementById("inputID2").value;
    var result = parseFloat(tmp1) * parseFloat(tmp2);
    document.getElementById("inputID3").value = result;
}

function divide() {
    var tmp1 = document.getElementById("inputID1").value;
    var tmp2 = document.getElementById("inputID2").value;
    var result = parseFloat(tmp1) / parseFloat(tmp2);
    document.getElementById("inputID3").value = result;
}

function procent() {
    var tmp1 = document.getElementById("inputID1").value;
    var tmp2 = document.getElementById("inputID2").value;
    var result = parseFloat(tmp1) * parseFloat(tmp2)/100;
    document.getElementById("inputID3").value = result;
}

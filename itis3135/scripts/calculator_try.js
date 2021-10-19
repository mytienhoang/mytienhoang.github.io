
var totalNumber = "0";
var addSubMulDiv = 0;
var floatVersion = 0.0;
function pickNumber(entryNumber) {
    if (totalNumber = "0") {
        totalNumber = entryNumber;
        
    }
    else if (addSubMulDiv = 0) {

    }
    


}

function enter(entryNumber) {
    if (addSubMulDiv = 1) {
            floatVersion = parseFloat(totalNumber);
            totalNumber = totalNumber + entryNumber;        
    }
    if (addSubMulDiv = 2) {
        floatVersion = parseFloat(totalNumber);
        totalNumber = totalNumber - entryNumber;    
    }
    if (addSubMulDiv = 3) {
        floatVersion = parseFloat(totalNumber);
    totalNumber = totalNumber*entryNumber;
    }
    if (addSubMulDiv = 4) {
        floatVersion = parseFloat(totalNumber);
    totalNumber = totalNumber/entryNumber;
    }
    document.getElementById("printResult").innerHTML = floatVersion;
}

function add() {
    addSubMulDiv = 1;
}
function subtract() {
    addSubMulDiv = 2;
}
function multiply() {
    addSubMulDiv = 3;
}
function divide() {
    addSubMulDiv = 4;
}




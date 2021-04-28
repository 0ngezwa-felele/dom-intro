// get a reference to the sms or call radio buttons
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");
var totalCalls= 0;
var smsTotal = 0;
var overallTotal = 0;
//add an event listener for when the add button is pressed
    // billItemType will be 'call' or 'sms'

function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
}
    // get the value entered in the billType textfield
    // var billTypeEntered = billTypeTextElement.value;
    // update the correct total
    if (billItemType  === "call"){
        totalCalls += 2.75
    }
    else if (billItemType  === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalTwoElement.innerHTML = totalCalls.toFixed(2)
    smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
    overallTotal= totalCalls + smsTotal;
    totalTwoElement.innerHTML = overallTotal.toFixed(2);
    style();
}
function style(){
    totalTwoElement.classList.remove("danger");
    totalTwoElement.classList.remove("warning");

    if(overallTotal>= 50){
        totalTwoElement.classList.add("danger");
        
    }
    else if(overallTotal >=30){

        totalTwoElement.classList.add("warning");
    }
}

radioBillAddBtnElement.addEventListener('click', radioBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

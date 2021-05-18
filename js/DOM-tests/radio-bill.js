
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");

var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

    let radioInstance = radioBillTotal()

function radioBillTotal3(){
    var checkedRadioButton = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioButton){
    var billItemType2 = checkedRadioButton.value;
}
    radioInstance.radioBill2(billItemType2);
    callTotalTwoElement.innerHTML=(radioInstance.calls()).toFixed(2)
    smsTotalTwoElement.innerHTML = (radioInstance.sms()).toFixed(2)
    totalTwoElement.innerHTML = (radioInstance.makeTotal()).toFixed(2) 

    if (radioInstance.makeTotal()>=30 &&  radioInstance.makeTotal()<50){
        totalTwoElement.classList.add("warning")
    }
else if (radioInstance.makeTotal()>=50) {
    totalTwoElement.classList.add("danger")

    }
}
    // get the value entered in the billType textfield
    // var billTypeEntered = billTypeTextElement.value;
    // // update the correct total
    // if (checkedRadioBtn.value  === "call"){
    //     radioInstance.call()
    // }
    // else if (checkedRadioBtn.value   === "sms"){
    //     radioInstance.sms()
    // }
    
    //update the totals that is displayed on the screen.
//     callTotalTwoElement.innerHTML = radioInstance.calls().toFixed(2)
//     smsTotalTwoElement.innerHTML = radioInstance.sms().toFixed(2);
//     overallTotal= totalCalls + smsTotal;

//     totalTwoElement.innerHTML = overallTotal.toFixed(2);
//     style();
// }
// function style(){
//     totalTwoElement.classList.remove("danger");
//     totalTwoElement.classList.remove("warning");

//     if(overallTotal>= 50){
//         totalTwoElement.classList.add("danger");
        
//     }
//     else if(overallTotal >=30){

//         totalTwoElement.classList.add("warning");
//     }
// }


radioBillAddBtnElement.addEventListener('click', radioBillTotal3);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

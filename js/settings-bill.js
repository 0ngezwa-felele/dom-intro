// get a reference to the sms or call radio buttons
var billTypeSettElement = document.querySelector(".billTypeSettings");
// get refences to all the settings fields
var callCostSettThreeElement = document.querySelector(".callCostSetting");
//get a reference to the add button
var smsCostSettThreeElement = document.querySelector(".smsCostSetting");
//get a reference to the 'Update settings' button
var settBillAddBtnElement = document.querySelector(".settingsBillBtn");
// create a variables that will keep track of all the settings
var updateSettThreeBtnElement = document.querySelector(".updateSettings");
// create a variables that will keep track of all three totals.
var warningSettThreeElement = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var totalCallThreeElement = document.querySelector(".callTotalSettings");
var totalSmsThreeElement = document.querySelector(".smsTotalSettings");
var totalAllThreeElement = document.querySelector(".totalSettings");
//add an event listener for when the 'Update settings' button is pressed
var callSettTotal = 0;
var smsSettTotal = 0;
var smsUpdate = 0;
var callUpdate = 0;
var critical = 0;
var warning = 0;
var totalSett = 0;
//add an event listener for when the add button is pressed
function billSettUpdate() {
    var updateSettBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (updateSettBtn) {
        var billSettEntered = updateSettBtn.value;
        if (billSettEntered === "call") {
            callSettTotal += callUpdate;
            totalSett += callUpdate;
        }
        else if (billSettEntered === "sms") {
            smsSettTotal += smsUpdate;
            totalSett += callUpdate;
        }
    }

    if (totalSett <= critical){
        if(updateSettBtn){

    
    totalCallThreeElement.innerHTML = callSettTotal.toFixed(2);
    totalSmsThreeElement.innerHTML = smsSettTotal.toFixed(2);
    totalAllThreeElement.innerHTML = totalSett.toFixed(2);

    totalAllThreeElement.classList.remove("danger");
    totalAllThreeElement.classList.remove("warning");

    if (totalSett >= critical) {

        totalAllThreeElement.classList.add("danger");
    }
    else if (totalSett >= warning) {
        totalAllThreeElement.classList.add("warning");
    }
    color()

}
    }
}


function updateSettingsBill() {
    callUpdate = parseFloat(callCostSettThreeElement.value);
    // console.log(callUpdate)
    smsUpdate = parseFloat(smsCostSettThreeElement.value);
    critical = parseFloat(criticalLevelSetting.value);
    warning = parseFloat(warningSettThreeElement.value);

    color()
}
function color() {
    totalAllThreeElement.classList.remove("danger");
    totalAllThreeElement.classList.remove("warning");
    if (totalSett >= critical) {
        totalAllThreeElement.classList.remove("warning");
        totalAllThreeElement.classList.add("danger");
    }
    else if (totalSett >= warning) {
        totalAllThreeElement.classList.remove("danger");
        totalAllThreeElement.classList.add("warning");
    }
}

updateSettThreeBtnElement.addEventListener('click', updateSettingsBill);
settBillAddBtnElement.addEventListener('click', billSettUpdate);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

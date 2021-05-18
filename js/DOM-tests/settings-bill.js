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
// var callSettTotal = 0;
// var smsSettTotal = 0;
// var smsUpdate = 0;
// var callUpdate = 0;
// var critical = 0;
// var warning = 0;
// var totalSett = 0;
let setInstance = billWithSettings()
function updateSettingsBill() {

    callUpdate = parseFloat(callCostSettThreeElement.value);
    // console.log(callUpdate)
    smsUpdate = parseFloat(smsCostSettThreeElement.value);
    critical = parseFloat(criticalLevelSetting.value);
    warning = parseFloat(warningSettThreeElement.value);

    setInstance.setCallCost(callUpdate);
    setInstance.setSmsCost(smsUpdate);
    setInstance.setWarningLevel(warning);
    setInstance.setCriticalLevel(critical);

    color()
}

function billSettUpdate() {
    var updateSettBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (updateSettBtn) {

        if (updateSettBtn.value === "call") {
            setInstance.makeCall()

        }
        else if (updateSettBtn.value === "sms") {
            setInstance.sendSms()


        }
    }


    totalCallThreeElement.innerHTML = setInstance.getTotalCallCost().toFixed(2);
    totalSmsThreeElement.innerHTML = setInstance.getTotalSmsCost().toFixed(2);
    totalAllThreeElement.innerHTML = setInstance.getTotalCost().toFixed(2);
    color()

}


function color() {

    if (setInstance.getTotalCost() >= setInstance.getCriticalLevel()) {
        totalAllThreeElement.classList.remove("warning");
        totalAllThreeElement.classList.add("danger");
    }
    else if (setInstance.getTotalCost() >= setInstance.getWarningLevel()) {
        totalAllThreeElement.classList.remove("danger");
        totalAllThreeElement.classList.add("warning");
    }
}

updateSettThreeBtnElement.addEventListener('click', updateSettingsBill);


settBillAddBtnElement.addEventListener('click', billSettUpdate);


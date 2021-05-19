// var callSettTotal = 0;
// var smsSettTotal = 0;
// var critical = 0;
// var warning = 0;
// var totalSett = 0;

function billWithSettings() {

    var callCostTotal = 0;
    var smsCostTotal = 0;

    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    

    function setCallCost(callCost) {
        theCallCost = callCost
    }
    function getCallCost() {
        return theCallCost;
    }
    function setSmsCost(smsCost) {
        theSmsCost = smsCost
    }
    //    function getSmsCost(){
    //     return 0.75; 
    //  }
    function getSmsCost() {
        return theSmsCost;
    }
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel
    }
    function getWarningLevel() {
        return theWarningLevel;
    }
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel
    }
    function getCriticalLevel() {
        return theCriticalLevel;
    }
    function makeCall() {
        if (!hasReachedCriticalLevel()){
        callCostTotal += theCallCost ;
    
    }
    }
    function getTotalCost() {
        return callCostTotal + smsCostTotal;

    }

    function getTotalCallCost() {
        return callCostTotal;
    }
    function getTotalSmsCost() {
        return smsCostTotal;
    }
    function sendSms(){
        if (!hasReachedCriticalLevel()){
        smsCostTotal += theSmsCost;

    }
}

    function hasReachedCriticalLevel(){
        if (getTotalCost() >= getCriticalLevel()){
            return theCriticalLevel;
        }

    }
    function totalClassName(){
     if (getTotalCost() >= getWarningLevel() & getTotalCost() < getCriticalLevel()){
            return "warning"
    }
    if (getTotalCost() > getWarningLevel() & getTotalCost() >= getCriticalLevel()){ 
        return "critical"
}
}
    
    

    return {
        getCallCost,
        setCallCost,
        getSmsCost,
        setSmsCost,
        getWarningLevel,
        setWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        hasReachedCriticalLevel



    }



}


    // var updateSettBtn 
    // if (updateSettBtn) {
    //     //stoping total from increamenting after reaching critical
    //     if (totalSett < critical) {
    //         var billSettEntered = updateSettBtn.value;
    //          // * add nothing for invalid values that is not 'call' or 'sms'.
    //         if (billSettEntered === "call") {
    //          // * add the appropriate value to the call / sms total

    //             callSettTotal += callUpdate;
    //             // * add the appropriate value to the overall total
    //             totalSett += callUpdate;
    //         }
    //         else if (billSettEntered === "sms") {
    //             smsSettTotal += smsUpdate;
    //             // * add the appropriate value to the overall total
    //             totalSett += callUpdate;
    //         }
    //     }
    // }

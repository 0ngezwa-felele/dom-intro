function textBillWidget(){

    var  callsTotal= 0;
    var Totalsms= 0;
    var totalAll = 0;
    var warningLevel = 0;
    var criticalLevel = 0;
    

function all(billTypeEntered) {
    // var billTypeEntered = billTypeTextElement.value;

    if (billTypeEntered === "call") {
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms") {
        Totalsms += 0.75;
    }
}
    function elements(billTypeEntered){
        if(all(billTypeEntered)>=50){
            return "danger";
     }
        else if(all(billTypeEntered)>=30){
                return "warning";
        }
     }
    
    function addCalls() {
        return callsTotal;
    }
    function addSms(){
        return Totalsms;
    }
    function textWarningLevel(){
        return warningLevel;
    }
    function textCriticalLevel(){
        return criticalLevel;
    }
    function total(){
        return totalAll = addCalls() + addSms();
    }

    return {
        textBillWidget,
        addCalls,
        addSms,
        textWarningLevel,
        total,
        all,
        textCriticalLevel,
        elements,
    }
}

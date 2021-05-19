function calculate() {

    function calculateAll(String) {
        var billsTotal = 0
        // a variable for the total phone bill.

        var billString = String.split(",");
        //loop over all the bill items

        for (var i = 0; i < billString.length; i++) {
            var billStringC = billString[i].trim();
            if (billStringC === "call") {
                billsTotal += 2.75;
            }
            else if (billStringC === "sms") {
                billsTotal += 0.75;
            }
        }
        //round to two decimals
        return billsTotal.toFixed(2);
        
    }

    function levels(String) {
        if (calculateAll(String) >= 30) {
            return "danger";
        } else if (calculateAll(String) >= 20) {
            return "warning";
        }
    }

    return {
        calculateAll,
        levels
    }
}

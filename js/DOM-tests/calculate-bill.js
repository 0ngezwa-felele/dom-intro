//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalSpanElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
var totalElement = document.querySelector(".total")
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
//link the function to a click event on the calculate button
let indexInstance = calculate()
// function calculateBtnClicked() {
//     // get the string entered in the textArea
//     var billString = billStringElement.value;
//     //split the string
//     var billItems = billString.split(",");
//     // a variable for the total phone bill.
//     var billTotal = 0;
//     //loop over all the bill items
//     for (var i = 0; i < billItems.length; i++) {
//         var billItem = billItems[i].trim();
//         if (billItem === "call") {
//             billTotal += 2.75;
//         }
//         else if (billItem === "sms") {
//             billTotal += 0.75;
//         }
       
//     }
    function calculateFactory(){
    //round to two decimals
    // var roundedBillTotal = billTotal.toFixed(2);
    // indexInstance.calculateAll(billStringElement.value);

    totalElement.innerHTML = indexInstance.calculateAll(billStringElement.value);

    totalElement.classList.remove("danger");
    totalElement.classList.remove("warning");

    totalElement.classList.add(indexInstance.levels(billStringElement.value));

    // totalElement.innerHTML=indexInstance.totalCalculate()
    // billTotalSpanElement.innerHTML = indexInstance.sms().toFixed(2);
    // billTotalSpanElement.innerHTML = indexInstance.totalCalulate.toFixed(2)();

    // billTotalSpanElement.classList.remove("danger");
    // billTotalSpanElement.classList.remove("warning");
    // // if (calculate.totalCalculate().toFixed(2) >= 30) {
    //     billTotalSpanElement.classList.add("danger");
    // }
    // else if (roundedBillTotal>= 20) {
    //     billTotalSpanElement.classList.add("warning");
    // }
    
}
// billTotalSpanElement.classList.add(indexInstance.elements());
calculateBtnElement.addEventListener('click', calculateFactory);
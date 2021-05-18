
var billTypeTextElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne")

let text = textBillWidget()
function textBillTotal() {
  text.all(billTypeTextElement.value);

  callTotalOneElement.innerHTML = text.addCalls().toFixed(2);
  smsTotalOneElement.innerHTML = text.addSms().toFixed(2);

  totalOneElement.innerHTML = text.total().toFixed(2);
  


  if (text.total() >= 30 && text.total() < 50) {
    totalOneElement.classList.add("warning")
  }
  else if (text.total() >= 50) {
    totalOneElement.classList.add("danger")

  }

}

totalOneElement.classList.add(text.elements());

addToBillBtnElement.addEventListener('click', textBillTotal);



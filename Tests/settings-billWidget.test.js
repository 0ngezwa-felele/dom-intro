describe("the bill with settings factory function",function(){
    it("should be able to set the call cost",function(){
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(1.50);
        assert.equal(1.50, settingsBill.getCallCost());
   
    
    
    }) 



    it("should be able to set the sms cost",function(){
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.75);
        assert.equal(0.75, settingsBill.getSmsCost());
   
    
    }) 
    it("should be able to set the call and sms cost",function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.75);
        
        
        assert.equal(2.75, settingsBill.getCallCost());
        assert.equal(0.75, settingsBill.getSmsCost());
   
       
})
it("should be able to set the warning level",function(){
    let settingsBill = billWithSettings();

    settingsBill.setWarningLevel(20);
    
    assert.equal(settingsBill.getWarningLevel(), 20);
    
   
})

it("should be able to set the critical level",function(){
    let settingsBill = billWithSettings();

    settingsBill.setCriticalLevel(50);
    
    assert.equal(settingsBill.getCriticalLevel(), 50);
   
   
})
it("should be able to set the warning & critical level",function(){
    let settingsBill = billWithSettings();

    settingsBill.getWarningLevel(20);
    settingsBill.getCriticalLevel(50);
    
    assert.equal(settingsBill.setCriticalLevel());
    assert.equal(settingsBill.setWarningLevel());


})  
describe ("use values" , function(){
 it ("should be able to use the call cost set", function(){

    let settingsBill = billWithSettings();
    settingsBill.setCriticalLevel(10)
    settingsBill.setCallCost(2.25);
    settingsBill.setSmsCost(0.85);

    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();

   assert.equal(6.75, settingsBill.getTotalCost());
   assert.equal(6.75, settingsBill.getTotalCallCost());

 })
 it ("should be able to use the call cost set for 2 calls at 1.35 each", function(){

    let settingsBill = billWithSettings();
    settingsBill.setCriticalLevel(10)
    settingsBill.setCallCost(1.35);
    // settingsBill.setSmsCost(0.85);

    settingsBill.makeCall();
    settingsBill.makeCall();
    

  // assert.equal(2.20, settingsBill.getTotalCost());
   assert.equal(2.70, settingsBill.getTotalCallCost());

 })
 it ("should be able to send 2 sms's at 0.85 each", function(){

    let settingsBill = billWithSettings();
    settingsBill.setCriticalLevel(10)
    settingsBill.setSmsCost(0.85);
    // settingsBill.sendSms(0.85);   

    settingsBill.sendSms();
    settingsBill.sendSms();
    
   assert.equal(1.70, settingsBill.getTotalCost());
//    assert.equal(0.00, settingsBill.getTotalCallCost());
   assert.equal(1.70, settingsBill.getTotalSmsCost());

 })
 it ("should be able to send 2 sms's at 0.85 each & make one call at 1.35 each", function(){

    let settingsBill = billWithSettings();
    settingsBill.setCriticalLevel(10)
    settingsBill.setSmsCost(0.85);
    settingsBill.setCallCost(1.35);   

    settingsBill.sendSms();
    settingsBill.makeCall()
    settingsBill.sendSms();
    
   assert.equal(3.05, settingsBill.getTotalCost());
   assert.equal(1.35, settingsBill.getTotalCallCost());
   assert.equal(1.70, settingsBill.getTotalSmsCost());

 

    })
 })
 describe("warning & critical level", function(){
     it("should return a class name of 'warning' if the warning has been reached", function(){
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.85);
        settingsBill.setCallCost(1.35);   
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);
        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        
    
        assert.equal("warning", settingsBill.totalClassName());
});
it("should return a class name of 'critical' if the critical has been reached", function(){
    let settingsBill = billWithSettings();
    
    settingsBill.setSmsCost(0.85);
    settingsBill.setCallCost(2.50);
    settingsBill.setWarningLevel(5);   
    settingsBill.setCriticalLevel(10);
       
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    
    assert.equal("critical", settingsBill.totalClassName());
});
it("should stop the total cost from increasing when the critical has been reached", function(){
    let settingsBill = billWithSettings();
    
    settingsBill.setSmsCost(0.85);
    settingsBill.setCallCost(2.50);   
    settingsBill.setWarningLevel(5)
    settingsBill.setCriticalLevel(10);
       
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    
    assert.equal("critical", settingsBill.totalClassName());
    assert.equal(10, settingsBill.getTotalCallCost());
});
it("should stop the total cost from increasing when the critical has been reached", function(){
    let settingsBill = billWithSettings();
    
    settingsBill.setSmsCost(0.85);
    settingsBill.setCallCost(2.50);   
    settingsBill.setCriticalLevel(10);
    settingsBill.setWarningLevel(8)
       
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    
    assert.equal("critical", settingsBill.totalClassName());
    assert.equal(10, settingsBill.getTotalCallCost());

    settingsBill.setCriticalLevel(20)

    assert.equal("warning", settingsBill.totalClassName());

    settingsBill.makeCall();
    settingsBill.makeCall();
    assert.equal(15, settingsBill.getTotalCallCost());
});

});
});
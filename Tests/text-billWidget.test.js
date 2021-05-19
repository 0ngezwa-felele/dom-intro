describe("text-bill factory function", function(){


    it("should be able to add a call", function(){
        let callCost = textBillWidget();
        callCost.all("call");
        assert.equal(callCost.addCalls(),2.75); 
})
it("should be able to add an sms", function(){
    let callCost = textBillWidget();
    callCost.all("sms");
    assert.equal(callCost.addSms(),0.75); 
})
it("should be able to add call and sms", function(){
    let callCost = textBillWidget();
    callCost.all("sms");
    callCost.all("call");
    assert.equal(callCost.addSms(),0.75); 
    assert.equal(callCost.addCalls(),2.75);
    assert.equal(callCost.total(),3.50);  
})
it("should be able to add 'warning' when the warning level is reached", function(){
    let callCost = textBillWidget();
    callCost.all("sms");
    callCost.all("call");
    callCost.all("sms");
    callCost.all("call");
    callCost.all("sms");
    callCost.all("call");
    callCost.all("sms");
    callCost.all("call");
    callCost.all("sms");
    callCost.all("call");
    callCost.all("sms");
    callCost.all("call");
    callCost.all("sms");
    callCost.all("call");
    callCost.all("sms");
    callCost.all("call");
    callCost.all("sms");
    callCost.all("call");
    callCost.all("sms");
    
    assert.equal(callCost.addSms(),7.50); 
    assert.equal(callCost.addCalls(),24.75);
    assert.equal(callCost.total(),32.25);  
})
    it("should be able to add 'critical' when the critical level is reached", function(){
        let callCost = textBillWidget();
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
        callCost.all("call");
        callCost.all("sms");
       
        assert.equal(callCost.addSms(),12.75); 
        assert.equal(callCost.addCalls(),38.50);
        assert.equal(callCost.total(),51.25);
        
    })
    
    
     
})

    

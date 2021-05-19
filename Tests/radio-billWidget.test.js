describe("RadioBill Factory function", function(){
    it ("should be able to add call", function(){
        let radioBtn = radioBillTotal();
        radioBtn.radioBill2("call");
        
    
        assert.equal(radioBtn.calls(), 2.75);
        
    })
    it ("should be able to add  3 calls at 2.75 each", function(){
        let radioBtn = radioBillTotal();
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        
    
        assert.equal(radioBtn.calls(), 8.25);
        
    })
    it ("should be able to add an sms at 0.75 each", function(){
        let radioBtn = radioBillTotal();
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("sms");
        
    
        assert.equal(radioBtn.sms(), 2.25);
        
    })
    it ("should be able to add 2 sms's at 0.75 each", function(){
        let radioBtn = radioBillTotal();
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("sms");
        
    
        assert.equal(radioBtn.sms(), 2.25);
        
    })
    it ("should be able to add 2 sms's at 0.75 each and 3 calls each at 2.75", function(){
        let radioBtn = radioBillTotal();
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        
        
    
        assert.equal(radioBtn.sms(), 2.25);
        assert.equal(radioBtn.calls(), 8.25);
    })
    it ("should return a class name of 'warning' if the warning has been reached", function(){
        let radioBtn = radioBillTotal();
        radioBtn.setWarningLevel(10);
        radioBtn.setCalls(2.75);
        radioBtn.setSms(0.75);
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        
    
        assert.equal(radioBtn.sms(), 4.50);
        assert.equal(radioBtn.calls(), 27.50);
    })
    it ("should return a class name of 'critical' if the critical has been reached", function(){
        let radioBtn = radioBillTotal();
        radioBtn.setCriticalLevel(10);
        radioBtn.setCalls(2.75);
        radioBtn.setSms(0.75);
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("call");
        radioBtn.radioBill2("sms");
        radioBtn.radioBill2("call");
        
    
        assert.equal(radioBtn.sms(), 7.50);
        assert.equal(radioBtn.calls(),49.50);
    })
})
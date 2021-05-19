describe("calculate factory function",function(){
    it('should calculate the total cost of three calls' , function(){
        let index = calculate();
         index.calculateAll("call,call,call");
    
        assert.equal(index.call(), 8.25)
        

    });
    it('should calculate the total cost of one sms' , function(){
        let index = calculate();
         index.calculateAll("sms");
    
        assert.equal(index.sms(), 0.75)

    });
    it('should calculate the total cost of three calls and two sms' , function(){
        let index = calculate();
        index.calculateAll("call,call,call");
   
      
        assert.equal(index.totalCalculate(), 8.25)

    });
   
    it("should return a class name of 'warning' if the warning has been reached", function(){
        let index = calculate();
        
        index.calculateAll("call,call,sms,call,call,sms,call,call,sms");
        
        
        assert.equal(index.call(),16.50)
        assert.equal(index.sms(),2.25)
        assert.equal(index.levels())
        


    });
    it("should return a class name of 'critical' if the critical has been reached", function(){
        let index = calculate();
        
        index.calculateAll("call,call,sms,call,call,sms,call,call,sms,call,call,sms,call,call,sms");
        
        
        assert.equal(index.call(),27.50)
        assert.equal(index.sms(),3.75)
        assert.equal(index.levels())
        
    });
});
        
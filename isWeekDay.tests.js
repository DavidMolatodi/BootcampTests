describe('Unit test for my isWeekDay function' , function(){
    it("it should return true for all the days of the week" , function(){
        assert.equal(isWeekday('Monday'), true);
        
    });

    it("and return false for weekends" , function(){
    assert.equal(isWeekday('saturday'), false);
});

});
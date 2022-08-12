

describe('Unit test for my greet function' , function(){
    it("it should return 'Hello, David' when called with 'David' " , function(){
        assert.equal("Hello, David",greet ("David"), "this should not be true" );  
    });

    it("it should return 'Hello, Tlhoni' when called with 'Tlhoni' " , function(){
        assert.equal("Hello, Tlhoni",greet ("Tlhoni"), "this should not be true" );  
    });
});
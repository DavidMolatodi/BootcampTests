
describe('Unit test for my fromWhere function' , function(){
    it("it should return the town which the car passed is coming from" , function(){
      assert.equal(fromWhere('CY'), 'Bellville'); 
      assert.equal(fromWhere('CJ'), 'Paarl');
      assert.equal(fromWhere('CA'), 'Cape Town');
      assert.equal(fromWhere('CC'), 'Some other place!');
    });   

});






const expect = require('chai').expect;

describe('1 plus 1 equals 2', function(){
  it('1+1=2', function(done){
    expect(1+1).to.equal(2);
    done();
  });
});
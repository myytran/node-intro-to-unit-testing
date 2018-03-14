
const expect = require('chai').expect; //import Chai, declare expect variable

const fizzBuzzer = require('../fizzBuzzer'); //importing /fizzBuzzer module

describe(' testing fizzBuzzer', function() {

  // test the normal case
// fizzBuzz unit test
  it('should return fizz-buzz if input equals 0 ', function() {

    const normalCases = [
      {num: 30,  expected: 30}

    ];

    normalCases.forEach(function(num) {
      const answer = fizzBuzzer(num);
      expect(answer).to.equal(num.expected);
    });
  });

  it('should raise error', function() {

    const badInputs = [
        {num: 15, expected: 30}
        ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(num) {
      expect(function() {
        fizzBuzzer(num['a'], input['b']);
      }).to.throw(Error);
    });
  });
// buzz unit test
  it('should return buzz if num equals 0 ', function() {

    const normalCases = [
      {num: 10,  expected: 10}

    ];

    normalCases.forEach(function(num) {
      const answer = fizzBuzzer(num);
      expect(answer).to.equal(num.expected);
    });
  });

  it('should raise error', function() {

    const badInputs = [
        {num: 15, expected: 10}
        ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(num) {
      expect(function() {
        fizzBuzzer(num['a'], input['b']);
      }).to.throw(Error);
    });
  });

});

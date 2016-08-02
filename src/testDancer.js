var testDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

testDancer.prototype = Object.create(makeDancer.prototype);
testDancer.prototype.constructor = testDancer;


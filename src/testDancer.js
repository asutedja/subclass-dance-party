var makeTestDancer = function(top, left, timeBetweenSteps) {
  //var obj = Object.create(prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class="testdancer"></span>');
  this.setPosition(top, left);
};


makeTestDancer.prototype = Object.create(makeDancer.prototype);
makeTestDancer.prototype.constructor = makeTestDancer;


makeTestDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();

};
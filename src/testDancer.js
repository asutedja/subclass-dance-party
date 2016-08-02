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
  this.move();
};

makeTestDancer.prototype.move = function() {
  var pot = Math.random() * 1000;
  var left = Math.random() * 1000;
  var styleSettings = {
    top: pot,
    left: left
  };
  this.$node.css(styleSettings);
};

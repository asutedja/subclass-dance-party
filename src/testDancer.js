var makeTestDancer = function(top, left, timeBetweenSteps) {
  //var obj = Object.create(prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  
  this.$node = $('<span class="testdancer pokemon"></span>').click(function() {
    //$(this).css('background-image', url('http://24.media.tumblr.com/tumblr_m9a6eqNYze1qfqgb9o1_250.gif'));
    var newTop = Math.floor(Math.random() * 700);
    var newLeft = Math.floor(Math.random() * 1000);
    $(this).animate({
      top: newTop,
      left: newLeft
    });  
  });
  this.setPosition(top, left);
};


makeTestDancer.prototype = Object.create(makeDancer.prototype);
makeTestDancer.prototype.constructor = makeTestDancer;


makeTestDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);


  var newRotate = 'rotate(' + Math.random() * 360 + 'deg)';
  var rotate = {
    transform: newRotate
  };
  this.$node.css(rotate);

  
};


makeTestDancer.prototype.lineup = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

makeTestDancer.prototype.position = function() {
  return {top: this.top, left: this.left};
};
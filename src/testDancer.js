var makeTestDancer = function(top, left, timeBetweenSteps) {
  //var obj = Object.create(prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class="testdancer"></span>').click(function() {
    //$(this).css('background-image', url('http://24.media.tumblr.com/tumblr_m9a6eqNYze1qfqgb9o1_250.gif'));
    $(this).remove();
    window.dancers.pop;
  });
  this.setPosition(top, left);
};


makeTestDancer.prototype = Object.create(makeDancer.prototype);
makeTestDancer.prototype.constructor = makeTestDancer;


makeTestDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // var newTop = Math.floor(Math.random() * 700);
  // var newLeft = Math.floor(Math.random() * 1000);
  // this.$node.animate({
  //   top: newTop,
  //   left: newLeft
  // });  

  var newRotate = 'rotate(' + Math.random() * 360 + 'deg)';
  var rotate = {
    transform: newRotate
  };
  this.$node.css(rotate);

  
};


makeTestDancer.prototype.lineup = function(top, left) {
  this.$node.addClass('lineup');
  this.$node.removeClass('testdancer');
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

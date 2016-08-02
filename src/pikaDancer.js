var makePikaDancer = function(top, left, timeBetweenSteps) {
  //var obj = Object.create(prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class="pikaDancer"></span>').click(function() {
    //$(this).css('background-image', 'http://24.media.tumblr.com/tumblr_m9a6eqNYze1qfqgb9o1_250.gif');
    $(this).remove();
  });
  this.setPosition(top, left);
};


makePikaDancer.prototype = Object.create(makeDancer.prototype);
makePikaDancer.prototype.constructor = makePikaDancer;


makePikaDancer.prototype.step = function() {
  // makeDancer.prototype.step.call(this);
  // var newTop = Math.floor(Math.random() * 700);
  // var newLeft = Math.floor(Math.random() * 1000);
  // var newRotate = 'rotate(' + Math.random() * 360 + 'deg)';
  // var rotate = {
  //   transform: newRotate
  // };
  // this.$node.animate({
  //   top: newTop,
  //   left: newLeft
  // });  
  // this.$node.css(rotate);
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    width: '100px',
    height: '80px'
  });
  this.$node.animate({
    width: '200px',
    height: '160px'
  });
  
};


makePikaDancer.prototype.lineup = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
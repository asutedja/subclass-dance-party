// var makePokeball = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var makePokeball = function(top, left, timeBetweenSteps) {
  //var obj = Object.create(prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.top = top;
  this.left = left;
  var toptop = this.top;
  var leftleft = this.left;

  console.log(this.left + ' ' + this.top);
  //return obj
  this.$node = $('<span class="dancer"></span>').click(function() {
    console.log(this.top);
    var newTop = toptop + (Math.random() * 260);       //Math.floor(Math.random() * 700);
    var newLeft = leftleft + (Math.random() * 260);     //Math.floor(Math.random() * 1000);
    $(this).animate({
      top: newTop,
      left: newLeft
    });  
    this.left = newLeft;
    this.top = newTop;
    console.log(this.left + ' ' + this.top);


    for (var i = 0; i < window.dancers.length; i++) {
      var l = window.dancers[i].left - this.left;
      var t = window.dancers[i].top - this.top;
      var c = Math.sqrt(l * l + t * t);
      //console.log(this.left + ' ' + this.top);
      if (c < 130) {
        if (window.dancers[i].$node.hasClass('pokemon')) {
          window.dancers[i].$node.fadeOut();
        }
      } 
    }
    
  });
  this.setPosition(top, left);
};


makePokeball.prototype = Object.create(makeDancer.prototype);
makePokeball.prototype.constructor = makePokeball;


makePokeball.prototype.step = function() {
  makeDancer.prototype.step.call(this);


};

makePokeball.prototype.position = function() {
  return {top: this.top, left: this.left};
};

makePokeball.prototype.lineup = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

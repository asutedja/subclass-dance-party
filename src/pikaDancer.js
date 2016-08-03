var makePikaDancer = function(top, left, timeBetweenSteps) {
  //var obj = Object.create(prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  
  this.$node = $('<span class="pikaDancer pokemon" ></span>').hover(function() {
    //$(this).css('background-image', 'http://24.media.tumblr.com/tumblr_m9a6eqNYze1qfqgb9o1_250.gif');
    $(this).animate({
      width: '200px',
      height: '160px'
    });
    $(this).animate({
      width: '100px',
      height: '80px'
    });
  });
  this.setPosition(top, left);
  //console.log(this.left + ' ' + this.top);
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

  // this.$node.animate({
  //   width: '100px',
  //   height: '80px'
  // });
  // this.$node.animate({
  //   width: '200px',
  //   height: '160px'
  // });

  // var copy = window.dancers.slice();  
  // var index = copy.indexOf(this.$node);
  // copy.splice(index, 1);
  
  // for (var i = 0; i < copy.length; i++) {
  //   if (copy[i].position().left === this.$node.position().left) {
  //   }
  //   var l = copy[i].position().left - this.$node.position().left;
  //   var t = copy[i].position().top - this.$node.position().top;
  //   var c = Math.sqrt(l * l + t * t);
  //   if (c < 1 && copy[i].position() !== this.$node.position() ) {
  //     this.$node.animate({
  //       left: 700
  //     });
  //   }
  // }

  
};

makePikaDancer.prototype.position = function() {
  return {top: this.top, left: this.left};
};

makePikaDancer.prototype.lineup = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
'use strict';

var screenSize = screenSize || {};

(function() {
  screenSize.Calculator = function(option) {
    var defaultOption = {
      ratio:{
        width:16,
        height:9
      },
      diagonal:27,
      name:'Default screen'
    };
    this.option = extend (defaultOption, option);
    this.init();
    return this;
  };
  screenSize.Calculator.prototype = {
    option:undefined,
    size:{
      height:0,
      width:0
    },
    init: function() {
      this.option.ratio.val = this.option.ratio.width / this.option.ratio.height;
    },
    compute: function(){
      this.size.height = (this.option.diagonal * this.option.ratio.height) * ( 1 / ( Math.sqrt(Math.pow(this.option.ratio.width, 2) + Math.pow(this.option.ratio.height, 2)) ) ) ;
      this.size.width = this.option.ratio.val * this.size.height;
      return this.size;
    },
    convert: function(){
      return {
        height: Qty(this.size.height + ' inch').format('cm',configurableRoundingFormatter(1)),
        width: Qty(this.size.width + ' inch').format('cm',configurableRoundingFormatter(1))
      };
    }
  };
  function extend(){
    for(var i=1; i<arguments.length; i++)
        for(var key in arguments[i])
            if(arguments[i].hasOwnProperty(key))
                arguments[0][key] = arguments[i][key];
    return arguments[0];
  };
  function configurableRoundingFormatter(maxDecimals) {
  return function(scalar, units) {
    var pow = Math.pow(10, maxDecimals);
    var rounded = Math.round(scalar * pow) / pow;

    return rounded + ' ' + units;
  };
};
})();
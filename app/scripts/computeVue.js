var demo = new Vue({
  el: '#demo',
  data: {
    height: 0,
    width: 0,
    diagonal: 0,
    ratioHeight:0,
    ratioWidth:0
  },
  methods: {
    compute: function() {
      var Calculator = new screenSize.Calculator({
        ratio: {
          width: this.ratioWidth,
          height: this.ratioHeight,
        },
        diagonal: this.diagonal
      });
      var size = Calculator.compute();
      this.width = size.width;
      this.height = size.height;
    }
  }

});
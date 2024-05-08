AFRAME.registerComponent('color-toggle', {
  init: function(){
    let el=this.el;
    this.toggleColor=function(){
      el.setAttribute('color','green');
      el.setAttribute('animation',{
        property: 'rotation',
        to: '0 360 0',
        easing:'linear',
        dur:'5000',
        loop:'true'
      });
    };
    this.clickHandler = this.toggleColor.bind(this); // Store a reference to toggleColor
    el.addEventListener('click', this.clickHandler);
  },
  remove: function() {
    this.el.removeEventListener('click', this.clickHandler);
  }
});
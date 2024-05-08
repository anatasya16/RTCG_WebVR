AFRAME.registerComponent('animationdonkey-toggle', {
  init: function(){
    let el=this.el;
    this.animationDonkey = function(){
      el.setAttribute('animation-mixer', {
        clip: 'm_Donkey_stopPoking1'
      });
    };
    this.el.addEventListener('click', this.animationDonkey);
  },
  remove: function(){
    this.el.removeEventListener('click', this.animationDonkey);
  }
})
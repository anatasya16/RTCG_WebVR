AFRAME.registerComponent('animationshrek-toggle', {
  init: function(){
    let el=this.el;
    this.animationShrek=function(){
      el.setAttribute('animation-mixer', {
        clip:'m_Shrek_int_noseHorn_Full'
      });
    };
    this.el.addEventListener('click', this.animationShrek);
  },
  remove: function(){
    this.el.removeEventListener('click', this.animationShrek);
  }
})
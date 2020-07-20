document.addEventListener('DOMContentLoaded', () => {


  /* ---------------------------------------------------- */
  /* ----- ANIMATION ----- */
  /* ---------------------------------------------------- */

document.querySelector('.ball').addEventListener('click', animate);

function animate () {
  gsap.set('.ball',{scale: 1, transformOrigin:'center'});
  gsap.to('.ball',2,{scale: 70, transformOrigin:'center', ease: Power0.easeNone})
}





})
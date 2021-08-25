const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
//? Add event on click for panels to add open class
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
//? Event on transitionend to add active class 
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
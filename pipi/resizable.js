class Resizable{
  constructor(element, options={}){
    this.element = element;
    this.resizer = Resizable.createResizer(element, options);
    this.options = options;
    this.startX; 
    this.startY;
    this.startWidth;
    this.startHeight;
    this.init();
  }

  static createResizer(element, options){
    const resizer = document.createElement('div');
    resizer.classList.add('pipi_resizer');
    // const icon = document.createElement('i');
    // icon.classList.add('fa', 'fa-arrows-v');
    // resizer.appendChild(icon);
    element.appendChild(resizer);
    return resizer;
  }

  init(){
    this.initDrag = this.initDrag.bind(this);
    this.doDrag = this.doDrag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.resizer.addEventListener('mousedown', this.initDrag);
  }

  initDrag(e) {
    e.preventDefault();
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.startWidth = parseInt(this.element.offsetWidth, 10);
    this.startHeight = parseInt(this.element.offsetHeight, 10);
    this.resizer.classList.add('active');
    window.addEventListener('mousemove', this.doDrag, false);
    window.addEventListener('mouseup', this.stopDrag, false);
  }

  doDrag(e) {
    e.preventDefault();
    // this.element.style.width = (startWidth + e.clientX - this.startX) + 'px';
    console.log(e.clientY, this.element.offsetTop, e.clientY - this.element.offsetTop)
    // this.element.style.height = e.clientY - this.element.offsetTop + 'px';
    this.element.style.height = (this.startHeight + e.clientY - this.startY) + 'px';
  }

  stopDrag(e) {
    window.removeEventListener('mousemove', this.doDrag, false);
    window.removeEventListener('mouseup', this.stopDrag, false);
  }

}

// Run script on document ready
document.addEventListener('DOMContentLoaded', function() {
  //? Run script on dom content loaded
  window.addEventListener('DOMContentLoaded', function() {
    const resizable = [...document.querySelectorAll('.pipi_resizable')];
    const resizables = resizable.map(function(item) {
      const resizable = new Resizable(item);
      resizable.init();
    });
  });
});
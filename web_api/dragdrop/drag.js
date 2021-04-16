window.addEventListener('load', () => {
  //
  var items = document.querySelectorAll('#dragarea .item');
  items.forEach((item, index) => {
    item.id = 'item' + index;
    // dragstart
    item.addEventListener('dragstart', (evt) => {
      evt.dataTransfer.setData('Text', evt.target.id);
    }, true);
  })

  var droparea = document.getElementById('droparea');

  // drag
  droparea.addEventListener('dragover', (evt) => {
    evt.preventDefault();
  }, true);

  // drop
  droparea.addEventListener('drop', (evt) => {
    var id = evt.dataTransfer.getData('Text');
    var target = document.getElementById(id);

    var width = Math.round(target.offsetWidth/2);
    target.style.left = evt.clientX - width +'px';
    target.style.top = evt.clientY - width +'px';
    droparea.appendChild(target);
    evt.preventDefault();
  }, true);
}, true);



function Drag(dom, options) {
  if (!dom) return console.warn('传参有误', arguments);
  if (!this || this == window) return console.warn('Drag 方法需加上 new 关键词');
  this.elem = dom;
  this.touched = false;
  this.last = null;
  this.now = null;
  this.opt = Object.assign({
    touchstart: function(){},
    touchmove: function(){},
    touchend: function(){},
  }, options || {});

  this.bind();
}
Drag.prototype.bind = function() {
  this.elem.addEventListener('mousedown', this.touchstart.bind(this), false);
  window.addEventListener('mousemove', this.touchmove.bind(this), false);
  window.addEventListener('mouseup', this.touchend.bind(this), false);
  this.elem.addEventListener('touchstart', this.touchstart.bind(this), false);
  window.addEventListener('touchmove', this.touchmove.bind(this), false);
  window.addEventListener('touchend', this.touchend.bind(this), false);
  window.addEventListener('blur', this.touchend.bind(this), false);
}
Drag.prototype.unbind = function() {
  this.elem.removeEventListener('mousedown', this.touchstart.bind(this), false);
  this.elem.removeEventListener('touchstart', this.touchstart.bind(this), false);
}
Drag.prototype.touchstart = function(evt) {
  this.touched = true;
  var e = evt.touches ? evt.touches[0] : evt;
  this.now = this.now || { x: 0, y: 0 };
  this.last = { x: e.pageX, y: e.pageY };
  this.opt.touchstart(e, this.now);
}
Drag.prototype.touchmove = function(evt) {
  if (!this.touched) return;
  var e = evt.touches ? evt.touches[0] : evt;
  this.now.x += e.pageX - this.last.x;
  this.now.y += e.pageY - this.last.y;
  this.last = { x: e.pageX, y: e.pageY };
  this.opt.touchmove(e, this.now);
}
Drag.prototype.touchend = function() {
  if (!this.touched) return;
  this.touched = false;
  this.opt.touchend();
}


export default Drag;

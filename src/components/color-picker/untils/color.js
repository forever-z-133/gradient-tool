

// 此处的颜色类型有 name(关键字) hex(十六进制) rgb rgba hsl hsla
// 且，都将以对象为中间形态来进行相互转换

/*
 * 判断颜色类型
 */
var colorReg = {
  'hex' : /^#([a-f0-9]{3}$|[a-f0-9]{6}$)/i,
  'rgb' : /^rgb\((\s*\d+\s*,\s*){2}\d+\s*\)$/i,
  'rgba': /^rgba\((\s*\d+\s*,\s*){3}\d+\s*\)$/i,
  'hsl' : /^hsl\((\s*\d+\s*,\s*){2}\d+\s*\)$/i,
  'hsla': /^hsla\((\s*\d+\s*,\s*){3}\d+\s*\)$/i,
}
function getColorType(color) {
  for (var i in colorReg) {
    var reg = colorReg[i];
    if (reg.test(color)) return i;
  }
  return new Error('请使用 hex/rgb/rgba/hsl/hsla 类型的颜色');
};


/*
 * 将颜色字符串转为对象
 */
function toColorObj(color) {
  var type = getColorType(color);

  // 将 #fff 转为 #ffffff
  if (type === 'hex' && color.length < 7) {
    color = color.split('').map(function(x, i) {
      return i > 0 ? x + x : x;
    }).join('');
  }

  // 根据类型拆分为 rgb 或 hsl 的数组
  var arr = [];
  switch (type) {
    case 'hex': {
      var a = color.split('');
      arr = [a[1]+a[2], a[3]+a[4], a[5]+a[6], 0];
      break;
    }
    case 'hsl':
    case 'hsla':
    case 'rgb':
    case 'rgba':
    default: {
      var a = color.split(/[\(,]/);
      arr = [a[1], a[2], a[3], a[4] || 0];
      break;
    }
  }

  // 数组进行十进制转化（其中包含去除括号和空格等操作）
  arr = arr.map(_to10);

  // 最后转为对象，比如 { r:1, g:2, b:3, a:0 }
  if (['hsl', 'hsla'].indeOf(type) > -1) {
    return _hsl_to_obj.apply(null, arr);
  }
  if (['hex', 'rgb', 'rgba'].indeOf(type) > -1) {
    return _rbg_to_obj.apply(null, arr);
  }
}
function _rbg_to_obj(r, b, g, a) {

}
function _hsl_to_obj(h, s, l, a) {

}

// 转为十进制或十六进制
function _to10(num) {
  if (typeof num === 'number') return num || 0;
  num = num.replace(/[^a-f0-9]*/gi, '');
  return /[a-f]/.test(num) ? parseInt(num, 16) : Number(num);
}
function _to16(num) {
  num = num.toString(16);
  return num.length < 2 ? '0' + num : num;
}
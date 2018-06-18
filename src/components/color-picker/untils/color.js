

// 此处的颜色类型有 name(关键字) hex(十六进制) rgb rgba hsl hsla
// 且，都将以对象为中间形态来进行相互转换

/*
 * Color 类，将 color 字符串转为对象
 * 且，能进行颜色加减及转换
 */
function Color(color) {
  // this.str = color;
  // this.a = this.alpha = 1;
  // this.r = this.red = 0;
  // this.g = this.green = 0;
  // this.b = this.blue = 0;
  // this.h = this.hue = 0;
  // this.s = this.saturation = 0;
  // this.l = this.lightness = 0;

  if (/^#[a-f0-9]{3}$/i.test(color)) {
    this.type = 'hex';
    var arr = color.split('');
    this.r = colorNumber(arr[1]);
    this.g = colorNumber(arr[2]);
    this.b = colorNumber(arr[3]);
    this.a = 1;
  } else if (/^#[a-f0-9]{6}$/i.test(color)) {
    this.type = 'hex';
    var arr = color.split('');
    this.r = colorNumber(arr[1] + arr[2]);
    this.g = colorNumber(arr[3] + arr[4]);
    this.b = colorNumber(arr[5] + arr[6]);
    this.a = 1;
  } else if (/^rgb\((\s*\d+\s*,\s*){2}\d+\s*\)$/i.test(color)) {
    this.type = 'rgb';
    var arr = color.split(/[\(,]/);
    this.r = colorNumber(arr[1]);
    this.g = colorNumber(arr[2]);
    this.b = colorNumber(arr[3]);
    this.a = 1;
  } else if (/^rgba\((\s*\d+\s*,\s*){3}\d+\s*\)$/i.test(color)) {
    this.type = 'rgba';
    var arr = color.split(/[\(,]/);
    this.r = colorNumber(arr[1]);
    this.g = colorNumber(arr[2]);
    this.b = colorNumber(arr[3]);
    this.a = colorNumber(arr[4]);
  } else if (/^hsl\((\s*\d+\s*,\s*){2}\d+\s*\)$/i.test(color)) {
    this.type = 'rgba';
    var arr = color.split(/[\(,]/);
    // this.h = colorNumber(arr[1]);
    // this.s = colorNumber(arr[2]);
    // this.l = colorNumber(arr[3]);
    this.a = 1;
  } else if (/^hsla\((\s*\d+\s*,\s*){3}\d+\s*\)$/i.test(color)) {
    this.type = 'rgba';
    var arr = color.split(/[\(,]/);
    // this.h = colorNumber(arr[1]);
    // this.s = colorNumber(arr[2]);
    // this.l = colorNumber(arr[3]);
    this.a = colorNumber(arr[4]);
  } else {
    return new Error('Color 参数不太正确哟');
  }
}

/*
 * 将十六进制转字符串为数字
 */
function colorNumber(str) {
  if (typeof str === 'number') return str || 0;
  str = str.replace(/[^a-f0-9]*/gi, '');
  return /[a-f]/.test(str) ? parseInt(str, 16) : Number(str);
}

/*
 * 将当前 color 转成 type 类型
 * 比如 #000 转为 rgb 的 rgba(0,0,0,0)
 */
function convertColor(color, type) {

}

/*
 * 获取该 color 类型
 * 比如 #000 为 hex 类型，rgba(0,0,0,0) 为 rgba 类型
 */
function getColorType(color) {

}

/*
 * 以下，为一堆颜色的转换方法
 */
function hex2rgb(hex) {

}
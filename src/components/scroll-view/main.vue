<template>
  <div class="scroll-view">
    <div class="scroll-wrap" ref='wrap'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import zyhDrag from './utils/drag.js';

export default {
  name: 'scroll-view',
  props: {
    direction: { type: String, default: 'y' },
    default:   { type: Number, default: 0 },
  },
  data () {
    return {
      scrollTop: '',
    }
  },
  computed: {
    $wrap: function() {
      return this.$refs.wrap;
    },
    attrTransform: function() {
      return this.attrJustify('transform');
    },
    attrTransition: function() {
      return this.attrJustify('transition');
    },
  },
  mounted: function() {
    new zyhDrag(this.$wrap, {
      touchstart: this.touchstart.bind(this),
      touchmove: this.touchmove.bind(this),
      touchend: this.touchend.bind(this),
    });
  },
  methods: {
    // 判断支持的属性，如 -webkit-transform
    attrJustify: function(prop = 'transform'){
      var _div = document.createElement('div');
      if (prop in _div.style) return prop;
      var prefixes = ['moz', 'webkit', 'o', 'ms'];
      var prop_ = prop.charAt(0).toUpperCase() + prop.slice(1);
      for (var i=0; i<prefixes.length; ++i) {
          var vendorProp = prefixes[i] + prop_;
          if (vendorProp in _div.style) { return vendorProp; }
      }
    },
    getScrollTop: function() {
      var matrix = window.getComputedStyle(this, null);
      matrix = matrix[transform].split(')')[0].split(', ');
      return this.direction !== 'y' ? (+(matrix[12] || matrix[4])) : (+(matrix[13] || matrix[5]));
    },
    setScrollTop: function(value = this.getScrollTop(), duration = 0) {
      var value = this.direction !== 'y' ? 'translate3d(' + value + 'px, 0, 0)' : 'translate3d(0, ' + value + 'px, 0)';
      this.$wrap.style[this.attrTransform] = value;
      this.$wrap.style[this.attrTransition] = this.attrTransform + ' ' + duration + 'ms';
    },
    touchstart: function(e, now) {
      this.setScrollTop(now.y, 0);
    },
    touchmove: function(e, now) {
      this.setScrollTop(now.y, 0);
    },
    touchend: function() {
    },
  }
}
</script>

<style scoped>
.scroll-view {
  flex-grow: 1;
  flex-basis: 100%;
  overflow: hidden;
}
</style>

<style>
</style>

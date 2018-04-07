<template>
  <div class="color-picker">
    <div class="color-picker-input-wrap">
      <div class="color-picker-input-preview">
        <div class="transparent-bg"></div>
      </div>
      <!-- <input type="text" class="input color-pikcer-input"> -->
    </div>
    <div class="page-cover"></div>
    <color-picker-panel></color-picker-panel>
  </div>
</template>

<script>
import ColorPickerPanel from './components/color-picker-panel.vue'

export default {
  name: 'color-picker',
  data () {
    return {
      color: '',
    }
  },
  components: {
    ColorPickerPanel,
  }
}
</script>

<style scoped>
.transparent-bg {
  background-image: linear-gradient(#aaa, #aaa 50%, #fff 50%, #fff), linear-gradient(#fff, #fff 50%, #aaa 50%, #aaa);
  background-size: 10px 10px;
  background-position: 0 0, 10px 0;
}
.color-picker {
  position: relative;
}
.color-picker-panel {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  min-height: 1em;
  /*background: red;*/
}
.color-picker-input-wrap {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.color-picker-input-preview {
/*  position: absolute;
  margin-left: .4em;
  width: 1.3em;
  height: 1.3em;
  flex: 0 1 auto;
  background: #000;*/
}
/*.color-picker-input {
  padding-left: 2em;
  font: inherit;
}*/
</style>

<style>
.color-picker-input {

}
</style>

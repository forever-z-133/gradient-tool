<template>
  <div class="color-picker">
    <div class="color-picker-input-wrap">
      <div class="color-picker-input-preview">
        <div class="color-picker-preview-bg transparent-bg"></div>
        <div class="color-picker-preview-color"></div>
      </div>
      <!-- <input type="text" class="input color-pikcer-input"> -->
    </div>
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
  background-image: linear-gradient(#aaa, #aaa 50%, #fff 50%, #fff), linear-gradient(#fff, #fff 50%, #aaa 50%, #aaa), linear-gradient(#fff, #fff 50%, #aaa 50%, #aaa), linear-gradient(#aaa, #aaa 50%, #fff 50%, #fff);
  background-size: 4px 4px;
  background-position: 0 0, 4px 0, 0 4px, 4px 4px;
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
  position: relative;
/*  position: absolute;
  margin-left: .4em;
  width: 1.3em;
  height: 1.3em;
  flex: 0 1 auto;
  background: #000;*/
}
.color-picker-preview-bg {
  width: 1.4em;
  height: 1.4em;
}
.color-picker-preview-color {
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
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

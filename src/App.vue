<template>
  <div id="app" class="body">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <HelloWorld></HelloWorld> -->
    <color-picker></color-picker>
    <scroll-view style="height:200px">
      <div class="box"></div>
    </scroll-view>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'
import ColorPicker from '@/components/color-picker'
import ScrollView from '@/components/scroll-view'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ColorPicker,
    ScrollView,
  }
}
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}
.box {
  height: 3000px;
  background: linear-gradient(#000,#fff);
}
</style>

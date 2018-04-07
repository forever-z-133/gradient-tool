<template>
  <div id="app" class="body">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <HelloWorld></HelloWorld> -->
    <color-picker></color-picker>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'
import ColorPicker from '@/components/color-picker'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ColorPicker,
  }
}
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}
</style>

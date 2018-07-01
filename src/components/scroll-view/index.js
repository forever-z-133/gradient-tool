import ScrollView from './main';

/* istanbul ignore next */
ScrollView.install = function(Vue) {
  Vue.component(ScrollView.name, ColorPicker);
};

export default ScrollView;

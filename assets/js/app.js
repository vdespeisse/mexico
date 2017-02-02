// window.onload = function() {
//
//
//
//   new Vue({
//     el: '#page-wrapper',
//     data: {
//     test: "TEST STRING" }, // Attach quiz to Vue data
//   });
// }
function cycle_images(img_list, currentIndex){
  if (currentIndex === img_list.length-1) return {img:img_list[0],currentIndex:0}
  return {img:img_list[currentIndex+1],currentIndex:currentIndex+1}
}

var img_list = ["../../images/banner1.jpg","../../images/banner2.jpg","../../images/banner3.jpg","../../images/banner1.jpg","../../images/banner2.jpg","../../images/banner3.jpg"]

var vm =new Vue({
  el: '#page-wrapper',
  data: {
  current_bg: 'url("../../images/banner1.jpg")',
  currentIndex: 0,
  },
  methods: {
    auto_cycle() {
      var cycle = cycle_images(img_list,this.currentIndex)
      console.log(cycle)
      this.current_bg = 'url('+cycle.img+')'
      console.log(this.current_bg)
      this.currentIndex = cycle.currentIndex
      setTimeout(this.auto_cycle,8000)
    },
    force_slider(value) {
      this.currentIndex = value
      this.current_bg = 'url('+img_list[value]+')'
    },
  },
});

setTimeout(vm.auto_cycle,4000)

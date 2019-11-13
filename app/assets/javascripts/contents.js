
document.addEventListener("DOMContentLoaded", function(event) {
  new Vue({
    el: '#app',
    data: {
      message: "Hello World",
      number: 0,
      url: "https://google.com",
      x: 0,
      y: 0
    },
    methods: {
      countUp: function() {
        this.number += 1
      },
      mousePosition: function(event) {
        this.x = event.clientX;
        this.y = event.clientY;
      }
    }
  })
})

document.addEventListener("DOMContentLoaded", function(event) {
  new Vue({
    el: '#app',
    data: {
      message: "Hello World",
      number: 0,
      url: "https://google.com",
    },
    methods: {
      countUp: function() {
        this.number += 1
      }
    }
  })
})
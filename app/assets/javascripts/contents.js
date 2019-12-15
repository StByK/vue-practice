
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
      countUp: function(times) {
        this.number += 1 * times
      },
      mousePosition: function(event) {
        this.x = event.clientX;
        this.y = event.clientY;
      },
      enterAlert: function() {
        alert("enter押したな！");
      },
    },
    computed: {
      lessThanTen: function() {
        return this.number > 10 ? "10より大きい" : "10以下"
      },
    },
    watch: {
      number: function() {
        var vm = this;
        setTimeout(function(){
          vm.number = 0
        }, 3000)
      }
    }
  })

  new Vue({
    el: '#test',
    data: {
      word: "",
      answer: "",
      correctAnswer: "sample"
    },
    methods: {
      lookingWord: function(event) {
        this.word = event.target.innerText;
      },
      choiceWord: function(event) {
        this.answer = event.target.innerText;
      },
    },
    computed: {
      checkAnswer: function() {
        return this.answer == this.correctAnswer ? "access granted" : "access denied"
      },
      compareWithCorrectAnswer: function() {
        var answer = this.answer.split("");
        var correctAnswer = this.correctAnswer.split("");
        var characterCount = 0;
        for (var i = 0; i <= answer.length-1; i++) {
          if(answer[i] == correctAnswer[i]) {
            characterCount++;
          }
        }
        return characterCount;
      }
    }
  })
})
new Vue({
  el: "#vue-app",
  data: {
    output: "Your fav food"
  },
  methods: {
    readRefs: function() {
      const { input, test } = this.$refs;
      console.log(input.value, test.innerText);
      this.output = input.value;
    }
  }
});

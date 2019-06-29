new Vue({
  el: "#vue-app",
  data: {
    name: "Adam",
    job: "ninja",
    website: "https://www.astros.com",
    websiteTag: '<a href="https://www.astros.com">Astros</a>',
    age: 30,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time) {
      return `Good ${time}, ${this.name}!`;
    },
    add: function(inc) {
      this.age += inc;
    },
    subtract: function(dec) {
      this.age -= dec;
    },
    updateXY: function(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    click: function() {
      alert("It's been clicked!");
    }
  }
});

var createCounter = function() {
  var value = 0;
  return {
    add: function () {
      return ++value;
    }
  }
}

var counter = createCounter();
console.log(counter.add())
console.log(counter.add())
console.log(counter.add())
console.log('Quando eu chamo a função novamente, reinicia a variavel value')
counter = createCounter();
console.log(counter.add())
console.log(counter.add())
console.log(counter.add())
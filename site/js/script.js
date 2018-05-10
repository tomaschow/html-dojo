var x=2;
// console.log(x);
A();

function A(){
  var x=5;
  B();
  function B(){
    console.log(x);
  }
}

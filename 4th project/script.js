function funcao() {
  var numero = document.getElementById("numero");
  var tab = document.getElementById("res");
  if (numero.value.length == 0) {
    window.alert("digite um numero valido");
  } else {
    res.innerHTML = "";
    var tabuada = numero.value;
    for (var i = 1; i <= 10; i++) {
      var resultado = i * tabuada;
      res.innerHTML += ` ${tabuada} x  ${i} = ${resultado} </br>`;
    }
  }
}

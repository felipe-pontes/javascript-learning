function funcao() {
  var inicio = document.getElementById("inicio");
  var fim = document.getElementById("fim");
  var passos = document.getElementById("passos");
var res = document.getElementById('res');
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passos.value.length == 0
  ) {
window.alert('[ERRO] valor invalido [ERRO]')
  }
else {
  res.innerHTML='contando: '
  let i= Number(inicio.value);
  let f = Number(fim.value);
  let p= Number(passos.value);
  if(i<f){
  for ( let c= i; c<=f;  c+=p ) {
    res.innerHTML += `${c}   `;
  }}
  else{
    for(let c = i; c>=f; c-=p){
      res.innerHTML +=` ${c}`
    }
  }
}
}


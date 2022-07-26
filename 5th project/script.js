//pega um numero
let num = document.querySelector("input#numero");
//seleciona o select
let list = document.querySelector("select#flist");
//seleciona a div com id=res
let res = document.querySelector("div#res");
//o array que vou trabalhar com
let valores = [];

//funcao pra conferir se tem um numero valido
function isnumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

//funcao pra ver se o numero esta no array
function inlist(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

//funcao para adicionar os numeros no array
function adicionar() {
  //aqui ta passando o num como parametro para as funcoes junto da array valores
  if (isnumber(num.value) && !inlist(num.value, valores)) {
    //adicionando o valor de num caso ele passe nos testes das funcoes+
    valores.push(Number(num.value));
    //criacao dos elementos option dentro da tag select
    let item = document.createElement("option");
    item.text = `valor ${num.value} adicionado.`;
    lista.appendChild(item);
  } else {
    window.alert("valor invalido ou ja encontrado na lista");
  }
  /* 
para limpar o espaco de insercao do num e manter ele em foco 
sem precisar ficar clicando no espaco do input
*/
  num.value = ``;
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("adicione valores antes de finalizar");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    res.innerhtml = "";
    res.innerHTML += ` <p>ao todo temos ${tot} numeros cadastrados</p>`;
    res.innerHTML += ` <p>ao todo o maior valor foi ${maior} </p>`;
    res.innerHTML += ` <p>ao todoo menor valor foi ${menor} </p>`;
    res.innerHTML += ` <p>somando os valorestemos ${soma} </p>`;
    res.innerHTML += ` <p>a media dos valores informados e ${media} </p>`;
  }
}

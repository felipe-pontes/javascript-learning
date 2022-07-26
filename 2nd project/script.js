var data = new Date();
var ano = data.getFullYear();
var fAno = document.getElementById("datanasc");
var res = document.getElementById("res");
if (fAno.value.length == 0 || fAno.value > ano) {
  window.alert("{ERROR} verify your data and try again.");
} else {
  var fsex = document.getElementsByName("genre");
  var idade = ano - Number(fAno.value);
  var genre = " ";
  var img = document.createElement("img");
  img.setAttribute("id", "foto");
  if (fsex[0].checked) {
    genre = "homem";
    if (idade >= 0 && idade < 10) {
      //crianca
      img.setAttribute("src", "./images/menino.jpg");
    } else if (idade < 21) {
      //jovem
      img.setAttribute("src", "./images/garoto.jpg");
    } else if (idade < 50) {
      //adulto
      img.setAttribute("src", "./images/homem.jpg");
    } else {
      //idoso
      img.setAttribute("src", "./images/idoso.jpg");
    }
  } else if (fsex[1].checked) {
    genre = "mulher";
    if (idade >= 0 && idade < 10) {
      img.setAttribute("src", "./images/menina.jpg");
      //crianca
    } else if (idade < 21) {
      img.setAttribute("src", "./images/garota.jpg");
      //jovem
    } else if (idade < 50) {
      img.setAttribute("src", "./images/mulher.jpg");
      //adulto
    } else {
      img.setAttribute("src", "./images/idosa.jpg");
      //idoso
    }
  }
  res.innerHTML = "detectamos " + genre + " com " + idade + " anos";
  res.appendChild(img);
}

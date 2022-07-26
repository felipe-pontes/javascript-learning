function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var horas = data.getHours();

  document.getElementById("msg").innerHTML = ` agora sao ${horas}  horas.`;

  if (horas >= 0 && horas < 12) {
    //manha
    img.src = "./images/manha.jpg";
    document.body.style.background = "#fef4ed";
  } else if (horas >= 12 && horas < 18) {
    //tarde
    img.src = "./images/tarde.jpg";
    document.body.style.background = "#fab399";
  } else {
    //noite
    img.src = "./images/noite.jpg";
    document.body.style.background = "#233e4d";
  }
}

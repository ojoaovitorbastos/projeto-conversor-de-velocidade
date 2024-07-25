//txtvel.focus();
function converter() {
  var txtvel = document.getElementById("txtvel");
  var vel = Number(txtvel.value);
  var check1 = document.getElementById("check1");
  var check2 = document.getElementById("check2");
  var res = document.getElementById('res')
  res.innerHTML = ''

  var vel1 = (vel / 1.609).toFixed(1)
  var vel2 = (vel * 1.609).toFixed(1)

  if (txtvel.value == 0 || isNaN(vel)) {
    alert('[ERRO] Digite um valor valído para continuar');
  } else if (check1.checked) {
    res.innerHTML += `${vel}Km/h para Mph é igual à: ${vel1} ` 
  } else {
    res.innerHTML += `${vel}Mph para Km/h é igual à: ${vel2}`
  }
}

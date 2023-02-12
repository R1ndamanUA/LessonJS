// Задача 0 ==================
document.body.onclick = function (e) {
    e = e || event;
    target = e.target || e.srcElement;
    if (target.id == "mybtn") {
      var a = parseFloat(prompt("Вкажіть змінну а", ""));
      var b = parseFloat(prompt("Вкажіть змінну b", ""));
      var c = parseFloat(prompt("Вкажіть змінну c", ""));
      var S_1 =  (`S_1 =  ${a + 12 + b}`);
      var S_2 =  (`S_2 =  ${Math.sqrt((a + b) / (2 * a)).toFixed(2)}`);
      var S_3 =  (`S_3 =  ${Math.cbrt((a + b) * c).toFixed(2)}`);
      var S_4 =  (`S_4 =  ${Math.sin(a / -b).toFixed(2)}`);
    //   вывод переменной по id
      document.getElementById("S_1").innerHTML = S_1;
      document.getElementById("S_2").innerHTML = S_2;
      document.getElementById("S_3").innerHTML = S_3;
      document.getElementById("S_4").innerHTML = S_4;
    }
  };

// Задача 1 ===============

document.body.onclick = function (r) {
    r = r || event;
    target = r.target || r.srcElement;
    if (target.id == "mybtn2") {
      var num_1 = parseFloat(prompt("Вкажіть перше число", ""));
      var num_2 = parseFloat(prompt("Вкажіть друге число", ""));
      var summResult =  (`${num_1 + num_2}`);
    //   вывод переменной по id
      document.getElementById("summResult").innerHTML = summResult;
    }
  };


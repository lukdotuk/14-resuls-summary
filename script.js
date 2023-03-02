"use strict";

fetch ("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appData(data);
  })
  .catch (function (err) {
    console.log ("error" + err);
  });

function appData(data) {
  document.getElementById("tab1-name").innerHTML = data[0].category;
  document.getElementById("tab1-value").innerHTML = data[0].score;

  document.getElementById("tab2-name").innerHTML = data[1].category;
  document.getElementById("tab2-value").innerHTML = data[1].score;
  
  document.getElementById("tab3-name").innerHTML = data[2].category;
  document.getElementById("tab3-value").innerHTML = data[2].score;
  
  document.getElementById("tab4-name").innerHTML = data[3].category;
  document.getElementById("tab4-value").innerHTML = data[3].score;
}
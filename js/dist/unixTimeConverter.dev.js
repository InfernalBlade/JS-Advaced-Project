"use strict";

//ho creato questo semplice convertitore da Unix Time a Data leggibile
function timeConverter(unixTime) {
  var x = new Date(unixTime * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = x.getFullYear();
  var month = months[x.getMonth()];
  var date = x.getDate();
  var hour = x.getHours();
  var min = x.getMinutes();
  var sec = x.getSeconds();
  var time = date + ' ' + month + ' ' + year;
  return time;
}
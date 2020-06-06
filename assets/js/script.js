
// If you can see 'Hello, World!' in the console, then you can remove this and replace it your code
console.log('Hello, World!');
// YOUR JS CODE GOES HERE
// only needing core
//date math
(function()
{
  // instantiate a moment object
  var NowMoment = moment();
  
  // instantiate a JavaScript Date object
  var NowDate = new Date();
  
  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment;
  
  // display value of Date object in #displayJsDate div
  var eDisplayDate = document.getElementById('displayJsDate');
  eDisplayDate.innerHTML = NowDate;
})();
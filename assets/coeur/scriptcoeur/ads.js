
// ads.js [0.0.1]
// creates an empty div
// paired w/ code that checks if this id exists on the page
// adblockers usually block files named ads.js 
var e=document.createElement('div');
e.id='rIMfJLoGNRzs';
e.style.display='none';
document.body.appendChild(e);

if(document.getElementById('rIMfJLoGNRzs')){
  console.log('--loaded adblock-checker--');
};
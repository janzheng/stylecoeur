



function onLoadPage() {
  $('body').addClass('--loaded');
}

$(document).ready(function() {
  // hide loader; reveal page
  window.setTimeout(onLoadPage, 400)
});





function onLoadPage() {
  $('._loader').addClass('--loaded');
}

$(document).ready(function() {
  // hide loader; reveal page
  window.setTimeout(onLoadPage, 400)
});

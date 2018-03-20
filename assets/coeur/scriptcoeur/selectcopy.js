
// selects or copies the targeted item
// https://codepen.io/shaikmaqsood/pen/XmydxJ/
function copyToClipboard(target) {
  var $temp = $("<input>");
  $("body").append($temp);
  var text = ($(target).text() || $(target).val());
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

function select(target) {
  $(target).select();
}


$(document).ready(function() { 
$('._target-copy').on('click', function() {
  var target = $(this).attr('data-target');
  copyToClipboard(target);
})

$('._target-select').on('click', function() {
  var target = $(this).attr('data-target');
  select(target);
})
});
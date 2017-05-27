$(document).ready(function(){
  $('img').click(function(){
    var temp = $(this).attr('src');
    $(this).attr('src', $(this).attr('alt'));
    $(this).attr('alt', temp);
  })
})

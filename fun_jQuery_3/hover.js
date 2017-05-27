// $(document).ready(function(){
//   $('img').hover(function(){
//     var temp = $(this).attr('src');
//     $(this).attr('src', $(this).attr('alt'));
//     $(this).attr('alt', temp);
//   })
// })

$(document).ready(function(){
  $('img').mouseover(function(){
    var temp = $(this).attr('src');
    $(this).attr('src', $(this).attr('alt'));
    $(this).attr('alt', temp);
  })
  .mouseleave(function(){
    $(this).attr('alt', temp);
  })
})

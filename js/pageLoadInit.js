//This should be loaded before jquery mobile js in your page
//jquery code in here only please

$(document).bind("mobileinit", function(){
  //apply overrides here
  $.mobile.allowCrossDomainPages = true;
  $.mobile.defaultPageTransition = 'slide';
  $.mobile.touchOverflowEnabled = true;
});
//use this to do script as the #page is loaded
$('#home').live('pageshow',function(event, ui){
  //page show only works here - does not work in index.html footer
  //alert('page show');

  //first vla in array, Jan is xaxis title - If use same one twice data is plotted against it no
  //  as a new point in sequence

});


$('#graph').live('pageshow',function(event, ui){
  //page show only works here - does not work in index.html footer
  //alert('page show');

});



$('#home').live('pageshow',function(event, ui){
  //page show only works here - does not work in index.html footer
  //alert('page show');


});
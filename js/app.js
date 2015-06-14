$(document).ready (function(){

$('html').on('click','#btn-createList',function(){
	

	  var entertext = $('#input_listName').val();
	  
var html = '<li>' +
		'<button class="button-margin" type="button" id="btn-doneList">Done</button>'+
		'<button type="button" id="btn-deleteList">Delete</button>'+
		'<form class="list-form">'+
			'<input type="text" name="List-item" value='+entertext+' >'+
		'</form>'+
	'</li>';

      if(entertext.length){
           
        
           $('.list-design').append(html);

         }
})

$('html').on('click','#btn-cancelList',function(){
	$('#input_listName').val("");

	});

$('html'). on('click','#btn-doneList',function() {

    $(this).siblings('form').children().css('text-decoration', 'line-through');
    $(this).siblings('form').children().css('color','rgba(128, 128, 128, 0.51)');  
});

$('html'). on('click','#btn-deleteList',function() {
      
    $(this).parent().remove();
 
})



});


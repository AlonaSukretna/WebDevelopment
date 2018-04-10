$(document).ready(function(){
	$('#sizePicker').submit(function makeGrid(grid){
		$('table tr').remove();
		var rows = $('#inputHeight').val();
		var cols = $('#inputWidth').val();
		   for (var i=1; i<=rows; i++){    //min=1
				 $('table').append('<tr></tr>');//The <tr> tag defines a row in an HTML table
				 for (var j=1; j<=cols; j++){
					 $('tr:last').append('<td></td>');// <td> tag defines a standard cell in an HTML table
					 $('td').attr('class','cells');
				 }
			 }
			 
			 grid.preventDefault();

			 $('.cells').click(function(event){
				 var color=$('#colorPicker').val();
				 $(event.target).css('background-color', color);
			 });
	});
});

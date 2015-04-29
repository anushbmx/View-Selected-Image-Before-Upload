window.onload = function() { 

	/* Functions that rea to be called once page load goes here */


	$("#drop-box").click(function(){
		/* Trigger's click event on the input button when clicked on "Select Files area" */	
		$("#uploadfile").click();
	});

	$('#uploadfile').on('change', showfiles);
	/* Trigger's the show showfiles function once file selection is done */

};



function showfiles(event){
	$("#errors").empty();
	$("#selectedimage").empty();
	files = event.target.files;

	var error = 0;
	var errorMessage = "";
	

	for (var i = 0; i < files.length; i++) {
		file = files[i];
		if(!file.type.match('image.*')){
		/* Check if the selected file is an image or not */
			error = 1;
			errorMessage = "\"" + file.name + "\"" + errorMessage ;
		}else{
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = function() {
				var img = new Image();		
				img.src = reader.result;
				$("#selectedimage").append(img);
			};
		}
	}

	if(error && errorMessage){
		/* If error variable is triggered print error*/
		errorMessage = errorMessage + " is not image file";
		$("#errors").append(errorMessage);	
	}
}

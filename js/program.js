$.ajax({
	url: "xml/data.xml",
	datatype: "xml",
	success: function(data){
		console.log("file found");
		myFunction(data);
		var x = document.getElementById("asd");
		console.log(x)
	},
	error: function(){
		console.log('no file found')
	}
});
function myFunction(data){
	console.log('infunction');
	$
}
$(function(){




$(".myButton").on("click", function(){
	event.preventDefault();
	// console.log("working");
	var userSubmit = $("input").val();
	// console.log(userSubmit);
	var result = [];
	search(userSubmit);
	console.log(result);



	

});



function search(query){

	$.ajax({
		type: 'GET',
		datatype: 'json',
		crossDomain: true,
		url: "http://www.omdbapi.com/?t="+encodeURI(query)+"&r=json", 
	}).done(function(data){

		var result = data;
		var releaseYear = result.Year;
		var movieTitle = result.Title;

		$(".title").text("The movie, " + movieTitle + " was released in: ");

		$(".year").text(releaseYear);




		console.log(releaseYear);
		console.log(result);
		// return result;

	});
};


// search("day");


});



// $(function(){


// console.log(testing);


// });



// });







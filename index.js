function getDataSets(){

}

function getAdverts(){

}

function getEvents(){
	
	/*$.ajax({
		url: 'http://kanga-ac10g08.ecs.soton.ac.uk/mobile/fetch_locations.php',
		type: 'GET',
		data: {geo: {lat: "50.935813", long: "-1.396337"}},
		dataType: 'JSONP',
		success: function(events){
			console.log("Got events");
			console.log(events);
		},
		error: function(err){
			console.log("Error");
			console.log(err);
		}
	});*/
	
	console.log(encodeURI("http://kanga-ac10g08.ecs.soton.ac.uk/mobile/fetch_locations.php?req={\"geo\": {\"lat\": 50.935813, \"long\": -1.396337}}"));
	
	$.ajax({ url: encodeURI("http://kanga-ac10g08.ecs.soton.ac.uk/mobile/fetch_locations.php?req={\"geo\": {\"lat\": 50.935813, \"long\": -1.396337}}"),
		dataType: 'jsonp',
		success: function(data){
			console.log("got");
			console.log(data);
		},
		error: function(data){
			console.log("abd");
			console.log(data);
		}
	});
}
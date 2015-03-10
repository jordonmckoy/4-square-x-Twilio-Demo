$(function () {
  	var vname,vcity,vaddress;

  	$('#send_btn').click(function(e) {
  		textme(vname,vaddress,vcity);
  	});

  	$('#search_4').on('click', function () {
  		var list = $.ajax({
			type: "GET",
			url: "https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=MO4RHNN4DYVNQL31MKKFEJL20P2E11BEFOEXYU1GNTTCZJQJ&client_secret=HHAD4CLNVOGT3U1TXXCY35PMU442K4DZSE3FHN0IJMSEX5EB&v=20141103",
			data: {ll: "43.533329, -80.226933", limit: "10", intent: "checkin", query: get_val()},
			statusCode: {
			200: function(responseText) {
				$("#results").html("");
			 	$(responseText.response.venues).each(function(i, e) {			 	
			 		$('<label style="margin-right: 5px">' + (i+1) + '.</label><button data-q1="'+this.location.address+'" data-q2="'+this.location.city+'" data-q3="'+this.location.country+'" style="display:inline; width: 200px; margin-bottom: 5px;">'+this.name+'</button><br/>').appendTo('#results');
			 	});
			 	$("#results").delegate('button', 'click', function(e) {
			 		//console.log(e.currentTarget.innerHTML);
			 		//textme(e.currentTarget.innerHTML);

			 		//console.log($(e.currentTarget).attr('data-q1'));

			 		//console.log($(e.currentTarget).attr('data-q1') + " q2: " + $(e.currentTarget).attr('data-q2') + " q2: " + $(e.currentTarget).attr('data-q3') + " name: " + e.currentTarget.innerHTML)
			 		vname = e.currentTarget.innerHTML;
			 		vcity = $(e.currentTarget).attr('data-q2');
			 		vaddress = $(e.currentTarget).attr('data-q1');

			 		$('#diagnostic').html(vname+','+vcity+','+vaddress);

			 		$("#mapframe").attr('src','https://www.google.com/maps/embed/v1/place?key=AIzaSyDopAL7jlhmAoAJ5x7W-bfhWqkRDQ0kIMM&q='+$(e.currentTarget).attr('data-q1')+'+'+$(e.currentTarget).attr('data-q2')+'+'+$(e.currentTarget).attr('data-q3')+e.currentTarget.innerHTML)

			 	});
			}
		  } 
		});
  	});
});
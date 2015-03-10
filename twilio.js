function textme(name,address,city) {
	var val = $.ajax({
	  type: "POST",
	  url: "https://api.twilio.com/2010-04-01/Accounts/AC0b69062f988b7f88fefd29e1e65d9414/Messages",
	  data: {To: "**********",From: "+12268871557",Body: name + ", " + address + "," + city},
	  xhrFields: {
		withCredentials: true
	  },
	  statusCode: {
		200: function(responseText) {
		  //$('<p style="display:inline">' + responseText + '</p><br/>').appendTo('#results');
		}
	  } 
	});
}


function get_val() {
  return $('#message_field').val();
}

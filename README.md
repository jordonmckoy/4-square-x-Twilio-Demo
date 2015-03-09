# 4-square-x-Twilio-Demo

This is an assignment I created as a final project for my computer networking class.

It is a simple HTML page that leverages the powers of the foursqaure and Twilio APIs.

**Usage:**

* Users enter the name of a venue in the search bar and a GET request is made to foursquare to retrieve a list of the 10 closest matching locations.

* Clicking on one of the populated results will render the corresponding venue location in a Google Maps iframe adjacent to the list.

* Finally, selecting the 'Send Location' button would send a POST request to Twilio that would send the location information to a phone.

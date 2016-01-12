(function() {
	
	var menu = document.querySelector(".main-nav");
	var toggle = document.querySelector(".top-menu__toggle-menu");
	var close = document.querySelector(".close-menu");
	
	toggle.addEventListener("click", function(event) {
		event.preventDefault();
		if (menu.classList.contains("modal-content-show")) {
			menu.classList.remove("modal-content-show");
		}
		else (menu.classList.add("modal-content-show"));
	});
	
	close.addEventListener("click", function(event) {
		event.preventDefault();
		menu.classList.remove("modal-content-show");
	});
	
	
	if (!("FormData" in window)) {
	return;
	}
	var form = document.querySelector(".form-field");
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		var data = new FormData(form);
		request(data, function(response) {
			console.log(response);
		});
	});
	function request(data, fn) {
		var xhr = new XMLHttpRequest();
		var time = (new Date()).getTime();
		xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time);
		xhr.addEventListener("readystatechange", function() {
			if (xhr.readyState == 4) {
			fn(xhr.responseText);
			}
		});
		xhr.send(data);
	}

//
	var travellersInput = document.querySelector("#guest-count");
	var previousTravellersQuantity = Number(travellersInput.value);

	travellersInput.addEventListener("change", function() {
		changeTravellers();
	});

	function changeTravellers () {
		var currentTravellersQuantity = Number(travellersInput.value);

		if ((currentTravellersQuantity < 1) || (isNaN(currentTravellersQuantity))) {
		  currentTravellersQuantity = 1;
		  travellersInput.value = 1;
		}

		var travellersDelta = currentTravellersQuantity - previousTravellersQuantity;
		var area = document.querySelector(".form-guest-count");

		if (travellersDelta > 0) {
		  var template = document.querySelector("#guest-template").innerHTML;

		  for (var ip = previousTravellersQuantity; ip < currentTravellersQuantity; ip++) {
			var number = ip + 1;

			var html = Mustache.render(template, {
			  "number": number
			});

			var div = document.createElement("div");
			div.classList.add("form-guest-count__guest-item");
			div.innerHTML = html;

			area.appendChild(div);
		  }

		  previousTravellersQuantity = currentTravellersQuantity;
		}

		if (travellersDelta < 0) {
		  for (var im = previousTravellersQuantity; im > currentTravellersQuantity; im--) {
			var children = area.children;
			var lastChildNumber = children.length - 1;
			area.removeChild(children[lastChildNumber]);
		  }

		  previousTravellersQuantity = currentTravellersQuantity;
		}
	}
//
	var elements = document.querySelectorAll(".input-numeric");
	for (var i = 0; i < elements.length; i++) {
		initNumberField(elements[i]);
	}
	function initNumberField(parent) {
		var input = parent.querySelector("input");
		var minus = parent.querySelector(".input-numeric__minus");
		var plus = parent.querySelector(".input-numeric__plus");
		minus.addEventListener("click", function() {
			changeNumber(false);
			if (input == document.querySelector("#guest-count")) {
				changeTravellers();
			}
			event.preventDefault();
		});
		plus.addEventListener("click", function() {
			changeNumber(true);
			if (input == document.querySelector("#guest-count")) {
				changeTravellers();
			}
			event.preventDefault();
		});

		function changeNumber(operation) {
			var value = Number(input.value);
			if (isNaN(value)) {
				value = 0;
			}
			if (parseFloat(value)<= 2){
				value = 2;
			}
			if (operation) {
				input.value = value + 1;
			} 
			else {
				input.value = value - 1;
			}
		}
			
	}

//	
	if (document.querySelector("#map")) {
	  function initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
		  zoom: 7,
		  center: {lat: 34.860, lng: -111.789},
		  scrollwheel: false
		});

		var image = 'img/map-marker.svg';
		var beachMarker = new google.maps.Marker({
		  position: {lat:34.860, lng:-111.789},
		  map: map,
		  icon: image
		});
	  }
	}

})();
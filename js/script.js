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

	var elements = document.querySelectorAll(".input-numeric");
	for (var i = 0; i < elements.length; i++) {
		initNumberField(elements[i]);
	}
	function initNumberField(parent) {
		var input = parent.querySelector("input");
		var minus = parent.querySelector(".input-numeric__minus");
		var plus = parent.querySelector(".input-numeric__plus");
		minus.addEventListener("click", function() {changeNumber(false);});
		plus.addEventListener("click", function() {changeNumber(true);});
		function changeNumber(operation) {
			var value = Number(input.value);
			if (isNaN(value)) {
				value = 0;
			}
			if (operation) {
				input.value = value + 1;
			} 
			else {
				input.value = value - 1;
			}
		}
			
	}



})();
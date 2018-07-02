//takes form object and resource location
function DataForm(form, url){
	this.form = form;
	this.resource = url;
}


// Fill the form with values.
DataForm.prototype.fill = function(obj) {
		
	for (var key in obj) {
	  if (obj.hasOwnProperty(key)) {

	    	var el = this.form.querySelector('[name="'+key+'"]');
		if (el) { //only if form element is found
			el.value = obj[key];	
		}
	  }
	}
};

//Load Internally uses fill(obj), to load data into the form from URL
DataForm.prototype.load = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', this.resource);
	var that = this;
	xhr.addEventListener('load',function(){
		var data = JSON.parse(xhr.responseText)
		that.fill(data[0]);
	})
	xhr.send();
};

DataForm.prototype.fillDropDown = function(){
	var dropdowns = this.form.form.getElementsByTagName("select");
	
	dropdowns.forEach(function(item){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', this.resource+"?select="+item.name)
		xhr.addEventListener('load',function(){
			var data = JSON.parse(xhr.responseText)
		    data.forEach(function(option){
				var option = document.createElement("option");
				option.value = option.value;
				option.text = option.text;
			})
		})
		xhr.send();
	})
}

DataForm.prototype.send = function() {
	var xhr = new XMLHttpRequest();
	var data = new FormData(this.form);
	//open the request
	xhr.open('POST', this.resource)
	//send the form data
	xhr.send(data);	
};

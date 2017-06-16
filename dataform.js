function DataForm(form){
	this.form = form
}

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

DataForm.prototype.load = function(url) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	var that = this;
	xhr.addEventListener('load',function(){
		var data = JSON.parse(xhr.responseText)
		that.fill(data[0]);
	})
	xhr.send();
};


DataForm.prototype.send = function(url) {
	var xhr = new XMLHttpRequest();
	var data = new FormData(this.form);
	//open the request
	xhr.open('POST', url)
	//send the form data
	xhr.send(data);	
};

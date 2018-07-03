//takes form object and resource location
function DataForm(form, url){
	this.form = form;
	this.resource = url;
	var that = this;

	//fill up dropdowns
	var selects = this.form.querySelectorAll("select[data-list]");

	if(selects && selects.length > 0)	
	selects.forEach(function(select){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', that.resource+"?select="+select.name)
		xhr.addEventListener('load',function(){
			var options = JSON.parse(xhr.responseText)
		    options.forEach(function(item){
				var option = document.createElement("option");
				option.value = item.value;
				option.text = item.text;
				select.appendChild(option)
			})
		})
		xhr.send();
	})
	
	//onchange change dependent fields
	var inputs = this.form.querySelectorAll('[data-change]');
	inputs.forEach(function(input){
		   input.onblur = function(event){
				var xhr = new XMLHttpRequest();
				xhr.open('GET', that.resource+"/"+input.value+"?change="+input.name);
				xhr.addEventListener('load',function(){
					var data = JSON.parse(xhr.responseText);
					that.fill(data[0]);
				})
				xhr.send();
		   }
   	});
	
	//send the form on submit
	this.form.onsubmit = function(event){
		that.send(event);
		return false; //suppress default submit
	}
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
DataForm.prototype.load = function(id) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', this.resource+"/"+id+"?q=all");
	var that = this;
	xhr.addEventListener('load',function(){
		var data = JSON.parse(xhr.responseText)
		that.fill(data[0]);
	})
	xhr.send();
};

//send data on server with FormData
DataForm.prototype.send = function(event) {
	var xhr = new XMLHttpRequest();
	var data = new FormData(this.form);
	//open the request
	xhr.open('POST', this.resource)
	//send the form data
	xhr.send(data);	
};

# HTML5-DataForm

Populate form with ajax loaded data or custom object.
Works the opposite way of [HTML5 FormData](https://developer.mozilla.org/en/docs/Web/API/FormData).

### Note: Object keys should match the form element names.

```javascript
var df = new DataForm(form);
var data = {"iuser":"John Doe","comment":"I'm awesome."};
df.fill(data);	

```

Alternatively you can load the data from ajax GET request. The json response
should have be an array of single object.

```
var df = new DataForm(form);
df.fill('https://api.metamug.com/tests/v1.0/form');	

```


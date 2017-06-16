# HTML5-DataForm

Populate form with ajax loaded data or custom object.
Inspired by [HTML5 FormData](https://developer.mozilla.org/en/docs/Web/API/FormData).
Psst We use it too internally.

### Note: Object keys should match the form element names.

```javascript
var df = new DataForm(form);
var data = {"iuser":"John Doe","comment":"I'm awesome."};
df.fill(data);	

```

Load the data from ajax GET request. The json response
should have be an array of single object. `[{}]`

```javascript
var df = new DataForm(form);
df.fill('https://api.metamug.com/tests/v1.0/form');	

```

Send Form data as `multipart/form-data` through ajax POST url.

```javascript
var df = new DataForm(form);
df.send('https://api.metamug.com/tests/v1.0/form');	

```

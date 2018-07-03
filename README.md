# HTML5-DataForm

DataForm allows you to do form processing with REST APIs by mapping form elements names to json keys.
Currently it supports JSON HTTP respones.

### DataForm to REST Resource Mapping

DataForm provides one-to-one mapping between the form and REST API resource.


Populate `form` with ajax loaded data or custom object.
Inspired by [HTML5 FormData](https://developer.mozilla.org/en/docs/Web/API/FormData).

### Note: Object keys should match the form element names.

### Load Form with JSON

```javascript
var df = new DataForm(form, 'https://api.metamug.com/tests/v1.0/form');
var data = {"iuser":"John Doe","comment":"I'm awesome."};
df.fill(data);	
```

###  Load Form with URL (Resource)
Load form data with Item GET request. The json response
should have be an array of single object

```javascript
df.load(123);	
```

### Submit Form

DataForm automatically binds `onsubmit` with `send()` function. It uses HTML5 FormData on XHR.
to send as `multipart/form-data` with method `POST`.

```javascript
df.send();	
```

### Field Blur Change [data-change]

Fields with attribute `data-change` can update other fields on blur.

### Dropdown Fill [data-list]

Fields with attribute `data-list` will be populated with json response. This attribute is optional. 
# HTML5-DataForm

DataForm allows you to do form processing with REST APIs by mapping form elements names to json keys.
Currently it supports JSON HTTP respones.



Populate `form` with ajax loaded data or custom object.
Inspired by [HTML5 FormData](https://developer.mozilla.org/en/docs/Web/API/FormData).

### Note: Object keys should match the form element names.



```javascript
var df = new DataForm(form);
var data = {"iuser":"John Doe","comment":"I'm awesome."};
df.fill(data);	

```
###  Load Form with URL (Resource)
Load the data from ajax GET request. The json response
should have be an array of single object

```javascript
var df = new DataForm(form, 'https://api.metamug.com/tests/v1.0/form');
df.load();	
```

### Submit Form

DataForm automatically binds `onsubmit` with `send()` function. It uses HTML5 FormData on XHR.
to send as `multipart/form-data` with method `POST`.

```javascript
var df = new DataForm(form, 'https://api.metamug.com/tests/v1.0/form');
df.send();	
```

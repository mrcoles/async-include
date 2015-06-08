
Async Include
=============

A simple script to asynchronously include content on an HTML page with simple markup that “just works”.

    <div data-async-include-url="/some-url/"></div>

Add the async-include.js script to your page and then activate it by calling the .asyncInclude() jQuery method (perhaps when the document is ready):

```javascript
$(document).ready(function() {
  $('[data-async-include-url]').asyncInclude();
});
```

It will asynchronously replace elements filtered by jquery that have a `data-async-url` attribute with the contents of requesting that url.


This is intended for elements that might be slow to load and are not the primary focus of a page (such as some customized sidebar content). Your page loads will be faster for you users since it will deliver the whole page before trying to load the asynchronous content and it should often look like one regular page load to the user.

You can optionally try out some of the features in `async-include-extra.js`, which let’s you include the following attributes:

*   data-async-include-type - can be "html" for straight HTML or "json" and it will expect a json object with an `html` attribute containing the HTML code (defaults to "html")
*   data-async-include-delay - number of milliseconds to delay the load from document.ready (defaults to 0)

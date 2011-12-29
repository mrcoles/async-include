
Async Include
=============

A simple script to asynchronously include content on an HTML page with simple markup that “just works”.

    :::html
    <div class="async-include" data-url="/test-include.html"></div>

Just include the `async-include.js` file on your page and it will asynchronously replace elements on your page with a class of `async-include` and a `data-url` attribute.

This is intended for elements that might be slow to load and are not the primary focus of a page (such as some customized sidebar content). Your page loads will be faster for you users since it will deliver the whole page before trying to load the asynchronous content and it should often look like one regular page load to the user.

You can optionally try out some of the features in `async-include-extra.js`, which let’s you include the following attributes:

*   data-type - can be "html" for straight HTML or "json" and it will expect a json object with an `html` attribute containing the HTML code (defaults to "html")
*   data-delay - number of milliseconds to delay the load from document.ready (defaults to 0)

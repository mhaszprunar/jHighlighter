jHighlighter - a plugin for [jQuery](http://jquery.com/)
==================================================

What is it all about
--------------------------------------

For a project of mine I wanted to have a nicer way of selecting a bunch of lines in a table than the original way of clicking on the checkboxes on the most left column.
My idea was to hide away the ugly checkboxes and let the user click anywhere on the line to select or deselect it.

This plugin does exactly that + adds features to do the same for all kinds of containers, not just table rows.

In short: this plugin turns radio button/checkbox based selection of elements easier and more user friendly

Features include:

* hiding of checkbox/radio container elements including the possibility to define a custom filter
* custom definition of highlighting CSS classes
* works with checkbox, radio or with every other block element (e.g. &lt;section&gt;s or &lt;div&gt;s)
* single/multiple selection (just for BLOCK elements)


How to use
----------------------------

Simply include the JS file (original or minified) after including jQuery on the page.

Calling the plugin could work like this

```bash
$('#testtable').find('tr').jHighlighter();
```

or this:

```bash
$('section').jHighlighter({elementType:'block'});
```

or this:

```bash
$('#radios').find('div').jHighlighter({elementType:'radio', hideParent: false});
```

have a look at the HTML file in the "test" folder to see all three in action.

Also please look at the uncompressed code to see all options you can use, they are all documented.

Hope you enjoy!
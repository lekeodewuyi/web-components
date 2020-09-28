## tooltip.js

This is a tooltip component for adding context to HTML markup.

The script is available via CDN at [tooltip](https://storage.googleapis.com/leke_cdn/tooltip.min.js)

Use the script tag at the bottom of your HTML. Or 'defered' at the head.
<script src="https://storage.googleapis.com/leke_cdn/tooltip.min.js"></script>


#### Usage
To use the tooltip in your HTML, simply place the tooltip element where you want to use it.

```sh
<tool-tip type ="text">
	<span slot="text">tip text</span>
	<span slot="popup-message">This is a tooltip popup message, it is displayed when the text slot is hovered</span>
</tool-tip>
```
```sh
    <tool-tip type ="svg">
        <span slot="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        </span>
        <span slot="popup-message">This is a tooltip popup message, it is displayed when the text slot is hovered</span>
    </tool-tip>
```

The tooltip has two 'types' - you can consider them modes.
 1. 'text' type
 2. 'svg' type

The types are entered are specified as attributes. The default type is text.

The two tip takes in two children span elements with attributes 'slot':
 1. slot="text" or slot="svg" 
 2. slot="popup-message"

The popup-message is displayed when the text or svg is hovered on.

To use an svg, it is important to remove the inline height and width attributes from the svg.


#### Optional Attributes
Apart from the type attribute on the tool-tip element, there are three optional attributes:
 1. popup-color (the font color of the popup message)
 2. popup-bg-color (the background color of the popup message)
 3. popup-width (the width of the popup message) - the default width is 150px


### Example
```sh
    <p>
        This is a sentence to show how the
        <tool-tip type="text">
            <span slot="text">tooltip</span>
            <span class="pop-mess" slot="popup-message">This is a tooltip, it is displayed on hover</span>
        </tool-tip>
        works.
    </p>
```

```sh
    <p>
        This is a test for a tooltip
        <tool-tip type="svg" popup-color="gold" popup-bg-color="purple" popup-width="300px">
            <span slot="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
            </span>
            <span slot="popup-message">Hiyaaaaa, I'm the tooltip for an svg icon</span>
        </tool-tip>
        svg
    </p>
```


Check out a live demo on [Codepen](https://codepen.io/andrestyles/pen/yLOrXev?editors=1100)
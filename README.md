# KotchiUI

KotchiUI is a lightweight UI kit that is cross-browser, accessabile and mobile compatible.
The web components of KotchiUI can be used with all JavaScript libraries and frameworks such Angular, Vue and React.

# New Features!

Ready to use components
  - [Button Component](https://ahmadigbaryia.github.io/kotchi-ui/button.html)
  - [FontAwesome Icon Component](https://ahmadigbaryia.github.io/kotchi-ui/icon.html)

With each component:
  - Get access to the inner HTML element for more control
  - Control the style and colors via CSS variables

# Used Technology
KotchiUI is built with [Web Component technology](https://www.webcomponents.org/) using the native browser API, the elements are extendable and configurable.
KotchiUI is an open source with a MIT license, you can view the [public repository here](https://github.com/ahmadigbaryia/kotchi-ui) on GitHub.

# Installation
## React, Angular, Vue, etc. ... 
Using npm, add the kotchi-ui dependecncy
```ssh
npm i kotchi-ui
```

In the view file, where you want to add the component
```js
import "kotchi-ui";

//Some where in your script, when the html variable gets rendered
//the KotchiUI custom element is 
const html = `<kui-button id="myButton" kui-style="kui-button-primary">My Button</kui-button>`;
```
If you want to save up on bundle size you can be more specific and only import the desored component
```js
import "kotchi-ui/kui-button";
//....
const html = `<kui-button id="myButton" kui-style="kui-button-primary">My Button</kui-button>`;
```
Once the component is rendered, it's public API is accessabe along with the inner HTML elements, you can have a look at the public API and the exposed inner HTML element on each components README or documentation page.

##### NativeJS and HTML5
To use with Native JS and HTML5 projects, just add the following two lines in the <head> section
```html
<!-- Polyfill for older browsers and those who don't support web components -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.0/webcomponents-loader.js"></script>
<script src="https://raw.githubusercontent.com/ahmadigbaryia/kotchi-ui/master/dist/kotchi-ui.js"></script>
```
and then somewhere in your <body> section you can add the KotchiUI components, for example:
```html
<kui-button id="myButton" kui-style="kui-button-primary" kui-size="kui-button-large">KotchiUI Button</kui-button>
```
To control it using JavaScript, each KotchiUI component has public API, you can refer to the docs of each component to learn more, for example, to add a click handler for the button you can write the following code

```js
const kuiButton = document.getElementById("myButton");
//Using the underling native button 
kuiButton.elements.button.addEventListener("click", function(e) {/** Your Handler Code */});
//Or using the KUIButton public API
kuiButton.addClickHandler(function(e) {/* Your Handler Code */});
```

# Development
So you want to contribute? That's Great, please follow this [contribution guide](https://github.com/ahmadigbaryia/kotchi-ui/CONTRIBUTING.md).

# License


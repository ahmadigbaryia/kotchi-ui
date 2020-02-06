# KotchiUI
KotchiUI is a lightweight UI kit that can be used with any framework on any browser, it's fully accessabile and mobile compatible.
Each KotchiUI component is a web component that is treated as a native HTML element.

The components have public API to access the composing inner elements and to control the style via CSS variables.

# Components
  - Alerts (Soon, contribute)
  - Accordion (Soon)
  - Badge (Soon)
  - Breadcrumb (Soon)
  - [Button](https://ahmadigbaryia.github.io/kotchi-ui/button.html)
  - Button Group (Soon)
  - Cards (Soon)
  - Checkbox (Soon)
  - Carousel (Soon)
  - Dropdowns (Soon)
  - [FontAwesome Icon](https://ahmadigbaryia.github.io/kotchi-ui/icon.html)
  - Forms (Soon)
  - Grid (Soon)
  - Input Group (Soon)
  - Images (Soon)
  - Figures (Soon)
  - List Group (Soon)
  - Modal (Soon)
  - Navs (Soon)
  - Navbar (Soon)
  - Overlays (Soon)
  - Pagination (Soon)
  - Popovers (Soon)
  - Progress (Soon)
  - Radio Button (Soon)
  - Spinners (Soon)
  - Switch (Soon)
  - Table (Soon)
  - Tabs (Soon)
  - Tooltips (Soon)
  - Toasts (Soon)


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
So you want to contribute? That's Great, please follow this [contribution guide](https://github.com/ahmadigbaryia/kotchi-ui/blob/master/CONTRIBUTING.md).

# License
MIT


[contribute]: https://ahmadigbaryia.github.io/kotchi-ui/button.html
# Kotchi UI

Kotchi UI is a lightweight UI kit based on Web Components technology, works with all modern browsers having accessability and mobile in mind.
The components of Kotchi UI works with all JavaScript libraries and frameworks such Angular, Vue and React.

# New Features!

  - Button Element
  - FontAwesome Icon Element 


You can also:
  - Have access to the inner element for more control
  - Control the CSS via CSS variables

### Technology

Kotchi UI is built with Web Component technology using the native browser API, the elements are extendable and configurable.
for more information about the Web component technology visit [WebComponents.org](https://www.webcomponents.org/)

Kotchi UI is open source with a [public repository](https://github.com/ahmadigbaryia/kotchi-ui) on GitHub.

### Installation
##### React, Angular, Vue, etc. ... 
add the kotchi-ui dependecncy
```ssh
npm i kotchi-ui
```

in your view file, where you want to add the component
```js
import "kotchi-ui";
//....
const html = `<kui-button id="myButton" kui-style="kui-button-primary">My Button</kui-button>`;
```
you can also import specific component
```js
import "kotchi-ui/kui-button";
//....
const html = `<kui-button id="myButton" kui-style="kui-button-primary">My Button</kui-button>`;
```
once the component is rendered, you can refer to it and access it's public API or access the underling elements using the elements property of the component reference.

##### NativeJS and HTML5
To use with Native JS and HTML5 projects, just add the following two lines in the <head> section
```html
<!-- Polyfill for older browsers and those who don't support web components -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.0/webcomponents-loader.js"></script>
<script src="https://raw.githubusercontent.com/ahmadigbaryia/kotchi-ui/master/dist/kotchi-ui.js"></script>
```
and then somewhere in your <body> section you can add the Kotchi UI components, for example:
```html
<kui-button id="myButton" kui-style="kui-button-primary" kui-size="kui-button-large">Kotchi UI Button</kui-button>
```
To control it using JavaScript, each Kotchi UI component has public API, you can refer to the docs of each component to learn more, for example, to add a click handler for the button you can write the following code

```js
const kuiButton = document.getElementById("myButton");
//Using the underling native button 
kuiButton.elements.button.addEventListener("click", function(e) {/** Your Handler Code */});
//Or using the KUIButton public API
kuiButton.addClickHandler(function(e) {/* Your Handler Code */});
```

### Development
Want to contribute? Great!

Kotchi UI uses Webpack for fast developing.

### Todos

 - Write test framework and integrate it with a CI
 - Use a storybook for live interaction with the UI Kit
 - Improve this README

License
----
MIT

# UI Kit - Button

Create powerful button elements with minimum code.

UI kit provides buttons with a lot of features 

* what are the attributes, properties, Events and slots
* Styles varialbes to maximize customization
* handlers
* RTL support
* Responsive
* Accessable
* 



primary (boolean : false)
outline (boolean : false)
disabled (boolean : false)
togglable (boolean : false) - (state controlled by selected attribute [true/false])
size (String [small, large] default is normal )
text (String)
icon (String URL, CSS class, base64)

dropdown (child)
group (parent)
split (child of group)

floating action button (new type)

custom (exten the button base and make your own)

Styles:
    primary-color
    ---- the folowing are generated from the primary-color but can be changed
    primary-bg-color
    primary-bg-hover-color
    primary-bg-disabled-color
    primary-border-color
    primary-border-hover-color
    primary-border-disabled-color
    primary-text-color
    primary-text-hover-color
    primary-text-disabled-color
    

//TODO:
1- build system to buyild each component and all components
2- finish button
2.1 - finish each attribute at a time while making sure it's accessable
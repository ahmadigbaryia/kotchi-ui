# UI Kit - Button

Create powerful button elements with minimum code.

//future types of buttons
1- "uik-button-toggleable"
    "uik-selected": {
        type: "Boolean",
        description: "Is the button selected (applicable only when toggleable is true)",
    }

2- "uik-button-dropdown"
    children slot will be the dropdown contents

3- "uik-button-float"
    "uik-position": {
        type: "[LEFT-TOP, RIGHT-TOP, LEFT-BOTTOM, RIGHT-BOTTOM]",
        description: "position the floating icon"
    }

4- "uik-button-group"
    the children are uik-button-* and uik-button-split only, will display the buttons as a button group


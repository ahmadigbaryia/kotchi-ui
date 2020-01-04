# UI Kit - Button

Create powerful button elements with minimum code.

//future types of buttons
1- "kui-button-toggleable"
    "kui-selected": {
        type: "Boolean",
        description: "Is the button selected (applicable only when toggleable is true)",
    }

2- "kui-button-dropdown"
    children slot will be the dropdown contents

3- "kui-button-float"
    "kui-position": {
        type: "[LEFT-TOP, RIGHT-TOP, LEFT-BOTTOM, RIGHT-BOTTOM]",
        description: "position the floating icon"
    }

4- "kui-button-group"
    the children are kui-button-* and kui-button-split only, will display the buttons as a button group


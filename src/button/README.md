# UI Kit - Button

Create powerful button elements with minimum code.


Attributes:

"uik-text": {
		type: "String",
		description: "The text of the button",
}

"uik-style": {
    type: "ButtonStyleEnum",
    description:
        "The style of the button, one of the following values only { Default, Primary, Secondary, Information, Dangerous, Warning, Success, Link }",
    default: Default,
}

"uik-outline": {
    type: "Boolean",
    description: "Apply the outline style on the button",
}

"uik-disabled": {
    type: "Boolean",
    description: "Disable the button",
}
"uik-size": {
    type: "ButtonSizeEnum",
    description: "The size to apply on the button [Large, Normal, Small]",
    default: Size.Normal,
}

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


CSS Variables
	/* Variables */
	--line-height: var(--uik-button-line-height, 1.5);
	--font-family: var(--uik-button-font-family, "Roboto" ,"sans-serif");
	--font-weight: var(--uik-button-font-weight, 400);
	--font-size: var(--uik-button-font-size, 1rem);
	--font-size-small: var(--uik-button-font-size, 0.75rem);
	--font-size-large: var(--uik-button-font-size, 1.25rem);

	--padding-left: var(--uik-button-padding-left, 10px);
	--padding-right: var(--uik-button-padding-right, 10px);
	--padding-top: var(--uik-button-padding-top, 5px);
	--padding-bottom: var(--uik-button-padding-bottom, 5px);

	--margin-left: var(--uik-button-margin-left, 0px);
	--margin-right: var(--uik-button-margin-right, 0px);
	--margin-top: var(--uik-button-margin-top, 0px);
	--margin-bottom: var(--uik-button-margin-bottom, 0px);

	--border-size: var(--uik-button-border-width, 2px);
	--border-style: var(--uik-button-border-style, solid);
	--border-color: var(--uik-button-border-color, transparent);
	--border-radius: var(--uik-button-border-radius, 2px);

	--default-text-color: var(--uik-button-default-text-color, #525a62);
	--default-text-color-hover: var(--uik-button-default-text-color-hover, #525a62);
	--default-text-color-disabled: var(--uik-button-default-text-color-disabled, #525a62);
	--default-text-color-active: var(--uik-button-default-text-color-active, #525a62);
	--default-bg-color: var(--uik-button-default-bg-color, #f6f6f6);
	--default-bg-color-hover: var(--uik-button-default-bg-color-hover, #e3e3e3);
	--default-bg-color-disabled: var(--uik-button-default-bg-color-disabled, #f6f6f6);
	--default-bg-color-active: var(--uik-button-default-bg-color-active, #dddcdc);
	--default-border-color: var(--uik-button-default-border-color, #f6f6f6);
	--default-border-color-hover: var(--uik-button-default-border-color-hover, #dddcdc);
	--default-border-color-disabled: var(--uik-button-default-border-color-disabled, #f6f6f6);
	--default-border-color-active: var(--uik-button-default-border-color-active, #d6d6d6);
	--default-box-shadow: var(--uik-button-default-box-shadow, 0 0 0 0 rgba(221, 223, 224, 0.5));
	--default-box-shadow-active: var(--uik-button-default-box-shadow-active, 0 0 0 0 rgba(221, 223, 224, 0.5));

	--primary-text-color: var(--uik-button-primary-text-color, #ffffff);
	--primary-text-color-hover: var(--uik-button-primary-text-color-hover, #ffffff);
	--primary-text-color-disabled: var(--uik-button-primary-text-color-disabled, #ffffff);
	--primary-text-color-active: var(--uik-button-primary-text-color-active, #ffffff);
	--primary-bg-color: var(--uik-button-primary-bg-color, #2196f3);
	--primary-bg-color-hover: var(--uik-button-primary-bg-color-hover, #0c83e2);
	--primary-bg-color-disabled: var(--uik-button-primary-bg-color-disabled, #2196f3);
	--primary-bg-color-active: var(--uik-button-primary-bg-color-active, #0c7cd5);
	--primary-border-color: var(--uik-button-primary-border-color, #2196f3);
	--primary-border-color-hover: var(--uik-button-primary-border-color-hover, #0c7cd5);
	--primary-border-color-disabled: var(--uik-button-primary-border-color-disabled, #2196f3);
	--primary-border-color-active: var(--uik-button-primary-border-color-active, #0b75c9);
	--primary-box-shadow: var(--uik-button-primary-box-shadow, 0 0 0 0 rgba(66, 166, 245, 0.5));
    --primary-box-shadow-active: var(--uik-button-primary-box-shadow-active, 0 0 0 0 rgba(66, 166, 245, 0.5));

    --secondary-text-color: var(--uik-button-secondary-text-color, #ffffff);
	--secondary-text-color-hover: var(--uik-button-secondary-text-color-hover, #ffffff);
	--secondary-text-color-disabled: var(--uik-button-secondary-text-color-disabled, #ffffff);
	--secondary-text-color-active: var(--uik-button-secondary-text-color-active, #ffffff);
	--secondary-bg-color: var(--uik-button-secondary-bg-color, #868e96);
	--secondary-bg-color-hover: var(--uik-button-secondary-bg-color-hover, #727b84);
	--secondary-bg-color-disabled: var(--uik-button-secondary-bg-color-disabled, #868e96);
	--secondary-bg-color-active: var(--uik-button-secondary-bg-color-active, #6c757d);
	--secondary-border-color: var(--uik-button-secondary-border-color, #868e96);
	--secondary-border-color-hover: var(--uik-button-secondary-border-color-hover, #6c757d);
	--secondary-border-color-disabled: var(--uik-button-secondary-border-color-disabled, #868e96);
	--secondary-border-color-active: var(--uik-button-secondary-border-color-active, #666e76);
	--secondary-box-shadow: var(--uik-button-secondary-box-shadow, 0 0 0 0 rgba(152, 159, 166, 0.5));
    --secondary-box-shadow-active: var(--uik-button-secondary-box-shadow-active,  rgba(152, 159, 166, 0.5));
    
    --info-text-color: var(--uik-button-info-text-color, #ffffff);
	--info-text-color-hover: var(--uik-button-info-text-color-hover, #ffffff);
	--info-text-color-disabled: var(--uik-button-info-text-color-disabled, #ffffff);
	--info-text-color-active: var(--uik-button-info-text-color-active, #ffffff);
	--info-bg-color: var(--uik-button-info-bg-color, #03a9f4);
	--info-bg-color-hover: var(--uik-button-info-bg-color-hover, #038fce);
	--info-bg-color-disabled: var(--uik-button-info-bg-color-disabled, #03a9f4);
	--info-bg-color-active: var(--uik-button-info-bg-color-active, #0286c2);
	--info-border-color: var(--uik-button-info-border-color, #03a9f4);
	--info-border-color-hover: var(--uik-button-info-border-color-hover, #0286c2);
	--info-border-color-disabled: var(--uik-button-info-border-color-disabled, #03a9f4);
	--info-border-color-active: var(--uik-button-info-border-color-active, #027db5);
	--info-box-shadow: var(--uik-button-info-box-shadow, 0 0 0 0 rgba(41, 182, 246, 0.5));
    --info-box-shadow-active: var(--uik-button-info-box-shadow-active, 0 0 0 0 rgba(41, 182, 246, 0.5));
    
    --dangerous-text-color: var(--uik-button-dangerous-text-color, #ffffff);
	--dangerous-text-color-hover: var(--uik-button-dangerous-text-color-hover, #ffffff);
	--dangerous-text-color-disabled: var(--uik-button-dangerous-text-color-disabled, #ffffff);
	--dangerous-text-color-active: var(--uik-button-dangerous-text-color-active, #ffffff);
	--dangerous-bg-color: var(--uik-button-dangerous-bg-color, #ff6b68);
	--dangerous-bg-color-hover: var(--uik-button-dangerous-bg-color-hover, #ff4642);
	--dangerous-bg-color-disabled: var(--uik-button-dangerous-bg-color-disabled, #ff6b68);
	--dangerous-bg-color-active: var(--uik-button-dangerous-bg-color-active, #ff3935);
	--dangerous-border-color: var(--uik-button-dangerous-border-color, #ff6b68);
	--dangerous-border-color-hover: var(--uik-button-dangerous-border-color, #ff3935);
	--dangerous-border-color-disabled: var(--uik-button-dangerous-border-color, #ff6b68);
	--dangerous-border-color-active: var(--uik-button-dangerous-border-color, #ff2d28);
	--dangerous-box-shadow: var(--uik-button-dangerous-box-shadow, 0 0 0 0 rgba(255, 129, 127, 0.5));
    --dangerous-box-shadow-active: var(--uik-button-dangerous-box-shadow-active, 0 0 0 0 rgba(255, 129, 127, 0.5));
    
    --warning-text-color: var(--uik-button-warning-text-color, #ffffff);
	--warning-text-color-hover: var(--uik-button-warning-text-color-hover, #ffffff);
	--warning-text-color-disabled: var(--uik-button-warning-text-color-disabled, #ffffff);
	--warning-text-color-active: var(--uik-button-warning-text-color-active, #ffffff);
	--warning-bg-color: var(--uik-button-warning-bg-color, #ffc721);
	--warning-bg-color-hover: var(--uik-button-warning-bg-color-hover, #fabb00);
	--warning-bg-color-disabled: var(--uik-button-warning-bg-color-disabled, #ffc721);
	--warning-bg-color-active: var(--uik-button-warning-bg-color-active, #edb100);
	--warning-border-color: var(--uik-button-warning-border-color, #ffc721);
	--warning-border-color-hover: var(--uik-button-warning-border-color-hover, #edb100);
	--warning-border-color-disabled: var(--uik-button-warning-border-color-disabled, #ffc721);
	--warning-border-color-active: var(--uik-button-warning-border-color-active, #e0a800);
	--warning-box-shadow: var(--uik-button-warning-box-shadow, 0 0 0 0 rgba(255, 207, 66, 0.5));
    --warning-box-shadow-active: var(--uik-button-warning-box-shadow-active, 0 0 0 0 rgba(255, 207, 66, 0.5));
    
    --success-text-color: var(--uik-button-success-text-color, #ffffff);
	--success-text-color-hover: var(--uik-button-success-text-color, #ffffff);
	--success-text-color-disabled: var(--uik-button-success-text-color, #ffffff);
	--success-text-color-active: var(--uik-button-success-text-color, #ffffff);
	--success-bg-color: var(--uik-button-success-bg-color, #32c787);
	--success-bg-color-hover: var(--uik-button-success-bg-color-hover, #2aa872);
	--success-bg-color-disabled: var(--uik-button-success-bg-color-disabled, #32c787);
	--success-bg-color-active: var(--uik-button-success-bg-color-active, #289e6b);
	--success-border-color: var(--uik-button-success-border-color, #32c787);
	--success-border-color-hover: var(--uik-button-success-border-color, #289e6b);
	--success-border-color-disabled: var(--uik-button-success-border-color, #32c787);
	--success-border-color-active: var(--uik-button-success-border-color, #259464);
	--success-box-shadow: var(--uik-button-success-box-shadow, 0 0 0 0 rgba(81, 207, 153, 0.5));
    --success-box-shadow-active: var(--uik-button-success-box-shadow-active, 0 0 0 0 rgba(81, 207, 153, 0.5));
    
    --link-text-color: var(--uik-button-link-text-color, #2196f3);
	--link-text-color-hover: var(--uik-button-link-text-color, #0a6ebd);
	--link-text-color-disabled: var(--uik-button-link-text-color, #868e96);
	--link-text-decoration: var(--uik-button-link-text-decoration, underline);

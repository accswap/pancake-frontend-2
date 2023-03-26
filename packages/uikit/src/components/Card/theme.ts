import { vars } from "@pancakeswap/ui/css/vars.css";
import { darkColors, lightColors } from "../../theme/colors";
export var light = {
    background: lightColors.backgroundAlt,
    boxShadow: vars.shadows.level1,
    boxShadowActive: vars.shadows.active,
    boxShadowSuccess: vars.shadows.success,
    boxShadowWarning: vars.shadows.warning,
    cardHeaderBackground: {
        default: lightColors.gradientCardHeader,
        blue: lightColors.gradientBlue,
        bubblegum: lightColors.gradientBubblegum,
        violet: lightColors.gradientViolet
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))"
};
export var dark = {
    background: darkColors.backgroundAlt,
    boxShadow: vars.shadows.level1,
    boxShadowActive: vars.shadows.active,
    boxShadowSuccess: vars.shadows.success,
    boxShadowWarning: vars.shadows.warning,
    cardHeaderBackground: {
        default: darkColors.gradientCardHeader,
        blue: darkColors.gradientBlue,
        bubblegum: lightColors.gradientBubblegum,
        violet: darkColors.gradientViolet
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))"
};

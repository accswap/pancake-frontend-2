import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import Svg from "../Svg";
var Icon = function(props) {
    return /*#__PURE__*/ _jsx(Svg, _object_spread_props(_object_spread({
        viewBox: "0 0 24 24"
    }, props), {
        children: /*#__PURE__*/ _jsx("path", {
            d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
        })
    }));
};
export default Icon;

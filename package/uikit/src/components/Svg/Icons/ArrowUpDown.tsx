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
            d: "M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.501.501 0 00-.7 0z"
        })
    }));
};
export default Icon;

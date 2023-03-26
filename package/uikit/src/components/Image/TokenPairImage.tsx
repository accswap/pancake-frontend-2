import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { variants } from "./types";
import { StyledPrimaryImage, StyledSecondaryImage } from "./styles";
import Wrapper from "./Wrapper";
var TokenPairImage = function(_param) {
    var primarySrc = _param.primarySrc, secondarySrc = _param.secondarySrc, width = _param.width, height = _param.height, _variant = _param.variant, variant = _variant === void 0 ? variants.DEFAULT : _variant, _primaryImageProps = _param.primaryImageProps, primaryImageProps = _primaryImageProps === void 0 ? {} : _primaryImageProps, _secondaryImageProps = _param.secondaryImageProps, secondaryImageProps = _secondaryImageProps === void 0 ? {} : _secondaryImageProps, props = _object_without_properties(_param, [
        "primarySrc",
        "secondarySrc",
        "width",
        "height",
        "variant",
        "primaryImageProps",
        "secondaryImageProps"
    ]);
    var secondaryImageSize = Math.floor(width / 2);
    return /*#__PURE__*/ _jsxs(Wrapper, _object_spread_props(_object_spread({
        position: "relative",
        width: width,
        height: height
    }, props), {
        children: [
            /*#__PURE__*/ _jsx(StyledPrimaryImage, _object_spread({
                variant: variant,
                src: primarySrc,
                width: width,
                height: height
            }, primaryImageProps)),
            /*#__PURE__*/ _jsx(StyledSecondaryImage, _object_spread({
                variant: variant,
                src: secondarySrc,
                width: secondaryImageSize,
                height: secondaryImageSize
            }, secondaryImageProps))
        ]
    }));
};
export default TokenPairImage;

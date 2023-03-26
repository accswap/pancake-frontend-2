import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Flex, Box } from "../Box";
import { SwapVertIcon } from "../Svg";
import Text from "../Text/Text";
import { StyledBalanceInput, StyledInput, UnitContainer, SwitchUnitsButton } from "./styles";
var BalanceInput = function(_param) {
    var value = _param.value, _placeholder = _param.placeholder, placeholder = _placeholder === void 0 ? "0.0" : _placeholder, onUserInput = _param.onUserInput, currencyValue = _param.currencyValue, inputProps = _param.inputProps, innerRef = _param.innerRef, _isWarning = _param.isWarning, isWarning = _isWarning === void 0 ? false : _isWarning, _decimals = _param.decimals, decimals = _decimals === void 0 ? 18 : _decimals, unit = _param.unit, switchEditingUnits = _param.switchEditingUnits, props = _object_without_properties(_param, [
        "value",
        "placeholder",
        "onUserInput",
        "currencyValue",
        "inputProps",
        "innerRef",
        "isWarning",
        "decimals",
        "unit",
        "switchEditingUnits"
    ]);
    var handleOnChange = function(e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return /*#__PURE__*/ _jsx(StyledBalanceInput, _object_spread_props(_object_spread({
        isWarning: isWarning
    }, props), {
        children: /*#__PURE__*/ _jsxs(Flex, {
            justifyContent: "flex-end",
            children: [
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsxs(Flex, {
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ _jsx(StyledInput, _object_spread({
                                    pattern: "^[0-9]*[.,]?[0-9]{0,".concat(decimals, "}$"),
                                    inputMode: "decimal",
                                    min: "0",
                                    value: value,
                                    onChange: handleOnChange,
                                    placeholder: placeholder,
                                    ref: innerRef
                                }, inputProps)),
                                unit && /*#__PURE__*/ _jsx(UnitContainer, {
                                    children: unit
                                })
                            ]
                        }),
                        currencyValue && /*#__PURE__*/ _jsx(Text, {
                            fontSize: "12px",
                            textAlign: "right",
                            color: "textSubtle",
                            children: currencyValue
                        })
                    ]
                }),
                switchEditingUnits && /*#__PURE__*/ _jsx(Flex, {
                    alignItems: "center",
                    pl: "12px",
                    children: /*#__PURE__*/ _jsx(SwitchUnitsButton, {
                        scale: "sm",
                        variant: "text",
                        onClick: switchEditingUnits,
                        children: /*#__PURE__*/ _jsx(SwapVertIcon, {
                            color: "textSubtle"
                        })
                    })
                })
            ]
        })
    }));
};
export default BalanceInput;

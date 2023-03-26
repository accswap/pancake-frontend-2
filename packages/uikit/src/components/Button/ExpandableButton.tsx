import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";
export var ExpandableButton = function(param) {
    var onClick = param.onClick, expanded = param.expanded, children = param.children;
    return /*#__PURE__*/ _jsxs(IconButton, {
        "aria-label": "Hide or show expandable content",
        onClick: onClick,
        children: [
            children,
            expanded ? /*#__PURE__*/ _jsx(ChevronUpIcon, {
                color: "invertedContrast"
            }) : /*#__PURE__*/ _jsx(ChevronDownIcon, {
                color: "invertedContrast"
            })
        ]
    });
};
ExpandableButton.defaultProps = {
    expanded: false
};
export var ExpandableLabel = function(param) {
    var onClick = param.onClick, expanded = param.expanded, children = param.children;
    return /*#__PURE__*/ _jsx(Button, {
        variant: "text",
        "aria-label": "Hide or show expandable content",
        onClick: onClick,
        endIcon: expanded ? /*#__PURE__*/ _jsx(ChevronUpIcon, {
            color: "primary"
        }) : /*#__PURE__*/ _jsx(ChevronDownIcon, {
            color: "primary"
        }),
        children: children
    });
};
ExpandableLabel.defaultProps = {
    expanded: false
};

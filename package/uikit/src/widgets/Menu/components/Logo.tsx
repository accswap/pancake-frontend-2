import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  0%,  100% { transform: scaleY(1); }\n  50% { transform:  scaleY(0.1); }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ",
        " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: none;\n    ",
        " {\n      display: block;\n    }\n  }\n  .eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .eye {\n      transform-origin: center 60%;\n      animation-name: ",
        ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { MenuContext } from "../context";
var blink = keyframes(_templateObject());
var StyledLink = styled("a").withConfig({
    componentId: "sc-eb385a4f-0"
})(_templateObject1(), function(param) {
    var theme = param.theme;
    return theme.mediaQueries.lg;
}, function(param) {
    var theme = param.theme;
    return theme.mediaQueries.lg;
}, blink);
var Logo = function(param) {
    var href = param.href;
    var linkComponent = useContext(MenuContext).linkComponent;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("img", {
                src: "/images/LogoIcon.png",
                alt: "ShadowSwap",
                className: "mobile-icon"
            }),
            /*#__PURE__*/ _jsx("img", {
                src: "/images/LogoWithTextIcon.png",
                alt: "Shadowswap",
                className: "desktop-icon"
            })
        ]
    });
    return /*#__PURE__*/ _jsx(Flex, {
        children: isAbsoluteUrl ? /*#__PURE__*/ _jsx(StyledLink, {
            as: "a",
            href: href,
            "aria-label": "Pancake home page",
            children: innerLogo
        }) : /*#__PURE__*/ _jsx(StyledLink, {
            href: href,
            as: linkComponent,
            "aria-label": "Pancake home page",
            children: innerLogo
        })
    });
};
export default /*#__PURE__*/ React.memo(Logo, function(prev, next) {
    return prev.isDark === next.isDark;
});

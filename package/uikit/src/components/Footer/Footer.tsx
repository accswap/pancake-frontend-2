import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import { Box, Flex } from "../Box";
import { Link } from "../Link";
import { StyledFooter, StyledIconMobileContainer, StyledList, StyledListItem, StyledSocialLinks, StyledText, StyledToolsContainer } from "./styles";
import { Button } from "../Button";
import CakePrice from "../CakePrice/CakePrice";
import LangSelector from "../LangSelector/LangSelector";
import { ArrowForwardIcon } from "../Svg";
import { ThemeSwitcher } from "../ThemeSwitcher";
var MenuItem = function(_param) {
    var items = _param.items, isDark = _param.isDark, toggleTheme = _param.toggleTheme, currentLang = _param.currentLang, langs = _param.langs, setLang = _param.setLang, cakePriceUsd = _param.cakePriceUsd, buyCakeLabel = _param.buyCakeLabel, props = _object_without_properties(_param, [
        "items",
        "isDark",
        "toggleTheme",
        "currentLang",
        "langs",
        "setLang",
        "cakePriceUsd",
        "buyCakeLabel"
    ]);
    return /*#__PURE__*/ _jsx(StyledFooter, _object_spread_props(_object_spread({
        "data-theme": "dark",
        p: [
            "40px 16px",
            null,
            "56px 40px 32px 40px"
        ]
    }, props), {
        justifyContent: "center",
        children: /*#__PURE__*/ _jsxs(Flex, {
            flexDirection: "column",
            width: [
                "100%",
                null,
                "1200px;"
            ],
            children: [
                /*#__PURE__*/ _jsx(StyledIconMobileContainer, {
                    display: [
                        "block",
                        null,
                        "none"
                    ],
                    children: /*#__PURE__*/ _jsx("img", {
                        src: "/images/LogoWithTextIcon.png",
                        alt: "Shadowswap",
                        className: "desktop-icon",
                        width: "130px"
                    })
                }),
                /*#__PURE__*/ _jsxs(Flex, {
                    order: [
                        2,
                        null,
                        1
                    ],
                    flexDirection: [
                        "column",
                        null,
                        "row"
                    ],
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: [
                        "42px",
                        null,
                        "36px"
                    ],
                    children: [
                        items === null || items === void 0 ? void 0 : items.map(function(item) {
                            var ref;
                            /*#__PURE__*/ return _jsxs(StyledList, {
                                children: [
                                    /*#__PURE__*/ _jsx(StyledListItem, {
                                        children: item.label
                                    }),
                                    (ref = item.items) === null || ref === void 0 ? void 0 : ref.map(function(param) {
                                        var label = param.label, href = param.href, _isHighlighted = param.isHighlighted, isHighlighted = _isHighlighted === void 0 ? false : _isHighlighted;
                                        return /*#__PURE__*/ _jsx(StyledListItem, {
                                            children: href ? /*#__PURE__*/ _jsx(Link, {
                                                "data-theme": "dark",
                                                href: href,
                                                target: "_blank",
                                                rel: "noreferrer noopener",
                                                color: isHighlighted ? vars.colors.warning : "text",
                                                bold: false,
                                                children: label
                                            }) : /*#__PURE__*/ _jsx(StyledText, {
                                                children: label
                                            })
                                        }, label);
                                    })
                                ]
                            }, item.label);
                        }),
                        /*#__PURE__*/ _jsx(Box, {
                            display: [
                                "none",
                                null,
                                "block"
                            ],
                            children: /*#__PURE__*/ _jsx("img", {
                                src: "/images/LogoWithTextIcon.png",
                                alt: "Shadowswap",
                                className: "desktop-icon",
                                width: "130px"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(StyledSocialLinks, {
                    order: [
                        2
                    ],
                    pb: [
                        "42px",
                        null,
                        "32px"
                    ],
                    mb: [
                        "0",
                        null,
                        "32px"
                    ]
                }),
                /*#__PURE__*/ _jsxs(StyledToolsContainer, {
                    "data-theme": "dark",
                    order: [
                        1,
                        null,
                        3
                    ],
                    flexDirection: [
                        "column",
                        null,
                        "row"
                    ],
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ _jsxs(Flex, {
                            order: [
                                2,
                                null,
                                1
                            ],
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ _jsx(ThemeSwitcher, {
                                    isDark: isDark,
                                    toggleTheme: toggleTheme
                                }),
                                /*#__PURE__*/ _jsx(LangSelector, {
                                    currentLang: currentLang,
                                    langs: langs,
                                    setLang: setLang,
                                    color: "textSubtle",
                                    dropdownPosition: "top-right"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(Flex, {
                            order: [
                                1,
                                null,
                                2
                            ],
                            mb: [
                                "24px",
                                null,
                                "0"
                            ],
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ _jsx(Box, {
                                    mr: "20px",
                                    children: /*#__PURE__*/ _jsx(CakePrice, {
                                        cakePriceUsd: cakePriceUsd,
                                        color: "textSubtle"
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Button, {
                                    "data-theme": "light",
                                    as: "a",
                                    href: "https://shadowswap.xyz/swap?outputCurrency=0xddBa66C1eBA873e26Ac0215Ca44892a07d83aDF5&chainId=1116",
                                    target: "_blank",
                                    scale: "sm",
                                    endIcon: /*#__PURE__*/ _jsx(ArrowForwardIcon, {
                                        color: "backgroundAlt"
                                    }),
                                    children: buyCakeLabel
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
export default MenuItem;

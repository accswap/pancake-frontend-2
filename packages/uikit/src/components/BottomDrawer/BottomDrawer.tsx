import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import useDelayedUnmount from "../../hooks/useDelayedUnmount";
import { useMatchBreakpoints } from "../../contexts";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import getPortalRoot from "../../util/getPortalRoot";
import { Box } from "../Box";
import { IconButton } from "../Button";
import { Overlay } from "../Overlay";
import { CloseIcon } from "../Svg";
import { DrawerContainer } from "./styles";
var BottomDrawer = function(param) {
    var content = param.content, isOpen = param.isOpen, setIsOpen = param.setIsOpen;
    var ref = useRef(null);
    var shouldRender = useDelayedUnmount(isOpen, 350);
    var isMobile = useMatchBreakpoints().isMobile;
    useOnClickOutside(ref === null || ref === void 0 ? void 0 : ref.current, useCallback(function() {
        return setIsOpen(false);
    }, [
        setIsOpen
    ]));
    if (!shouldRender || !isMobile) {
        return null;
    }
    var portal = getPortalRoot();
    if (portal) return /*#__PURE__*/ createPortal(/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Overlay, {
                isUnmounting: !isOpen
            }),
            /*#__PURE__*/ _jsxs(DrawerContainer, {
                ref: ref,
                isUnmounting: !isOpen,
                children: [
                    /*#__PURE__*/ _jsx(Box, {
                        position: "absolute",
                        right: "16px",
                        top: "0",
                        children: /*#__PURE__*/ _jsx(IconButton, {
                            variant: "text",
                            onClick: function() {
                                return setIsOpen(false);
                            },
                            children: /*#__PURE__*/ _jsx(CloseIcon, {})
                        })
                    }),
                    content
                ]
            })
        ]
    }), portal);
    return null;
};
export default BottomDrawer;

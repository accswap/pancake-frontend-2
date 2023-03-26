import _define_property from "@swc/helpers/src/_define_property.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  width: ",
        "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ",
        "\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  width: 50%;\n\n  ",
        "\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { variant as StyledSystemVariant } from "styled-system";
import { variants } from "./types";
import TokenImage from "./TokenImage";
var _obj;
export var StyledPrimaryImage = styled(TokenImage).withConfig({
    componentId: "sc-d928f27a-0"
})(_templateObject(), function(param) {
    var variant = param.variant;
    return variant === variants.DEFAULT ? "92%" : "82%";
}, StyledSystemVariant({
    variants: (_obj = {}, _define_property(_obj, variants.DEFAULT, {
        bottom: "auto",
        left: 0,
        right: "auto",
        top: 0,
        zIndex: 5
    }), _define_property(_obj, variants.INVERTED, {
        bottom: 0,
        left: "auto",
        right: 0,
        top: "auto",
        zIndex: 6
    }), _obj)
}));
var _obj1;
export var StyledSecondaryImage = styled(TokenImage).withConfig({
    componentId: "sc-d928f27a-1"
})(_templateObject1(), StyledSystemVariant({
    variants: (_obj1 = {}, _define_property(_obj1, variants.DEFAULT, {
        bottom: 0,
        left: "auto",
        right: 0,
        top: "auto",
        zIndex: 6
    }), _define_property(_obj1, variants.INVERTED, {
        bottom: "auto",
        left: 0,
        right: "auto",
        top: 0,
        zIndex: 5
    }), _obj1)
}));

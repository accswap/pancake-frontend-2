import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  width: 16px;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  margin-left: 4px;\n  text-align: right;\n  color: ",
        ";\n  white-space: nowrap;\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  border: 1px solid ",
        ";\n  border-radius: 16px;\n  box-shadow: ",
        ";\n  padding: 8px 16px;\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ",
        ";\n  border: none;\n\n  ::placeholder {\n    color: ",
        ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import Box from "../Box/Box";
import Input from "../Input/Input";
import Text from "../Text/Text";
import IconButton from "../Button/IconButton";
export var SwitchUnitsButton = styled(IconButton).withConfig({
    componentId: "sc-e3b8048d-0"
})(_templateObject());
export var UnitContainer = styled(Text).withConfig({
    componentId: "sc-e3b8048d-1"
})(_templateObject1(), function(param) {
    var theme = param.theme;
    return theme.colors.textSubtle;
});
export var StyledBalanceInput = styled(Box).withConfig({
    componentId: "sc-e3b8048d-2"
})(_templateObject2(), function(param) {
    var theme = param.theme;
    return theme.colors.input;
}, function(param) {
    var theme = param.theme;
    return theme.colors.inputSecondary;
}, function(param) {
    var theme = param.theme, isWarning = param.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
export var StyledInput = styled(Input).withConfig({
    componentId: "sc-e3b8048d-3"
})(_templateObject3(), function(param) {
    var _textAlign = param.textAlign, textAlign = _textAlign === void 0 ? "right" : _textAlign;
    return textAlign;
}, function(param) {
    var theme = param.theme;
    return theme.colors.textSubtle;
});

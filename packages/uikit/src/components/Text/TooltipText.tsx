import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  text-decoration: ",
        ";\n  text-underline-offset: 0.1em;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import Text from "./Text";
var TooltipText = styled(Text).withConfig({
    componentId: "sc-9806f639-0"
})(_templateObject(), function(param) {
    var theme = param.theme, decorationColor = param.decorationColor;
    var ref;
    return "underline dotted ".concat((theme === null || theme === void 0 ? void 0 : theme.colors) && decorationColor ? theme.colors[decorationColor] : theme === null || theme === void 0 ? void 0 : (ref = theme.colors) === null || ref === void 0 ? void 0 : ref.textSubtle);
});
export default TooltipText;

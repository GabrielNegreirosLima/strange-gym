"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var formik_1 = require("formik");
var react_1 = require("react");
var modality_1 = require("../../../api/modality");
// import { Modality } from "../../../api/types";
var Button_1 = require("../../../components/Button");
var Input_1 = require("../../../components/Input");
var ScreenComponents_1 = require("../../../components/ScreenComponents");
var styles_1 = require("./styles");
var validations_1 = require("./validations");
function Modality() {
    var _a = react_1.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    function handleSubmit(values) {
        setIsLoading(true);
        var newModality = {
            name: values.name
        };
        modality_1.createModality(__assign({}, newModality))
            .then(function (result) {
            alert("Modalidade cadastrada com sucesso!");
        })["catch"](function (err) {
            alert("Falha ao realizar o cadastro");
        })["finally"](function () {
            setIsLoading(false);
        });
    }
    return (react_1["default"].createElement(styles_1.ModalityContainer, null,
        react_1["default"].createElement(ScreenComponents_1.FormTitle, null, "Cadastro de modalidade"),
        react_1["default"].createElement(ScreenComponents_1.ContentWrapper, null,
            react_1["default"].createElement(formik_1.Formik, { initialValues: {
                    name: ""
                }, enableReinitialize: true, validationSchema: validations_1.ModalitySchema, onSubmit: function (values) {
                    handleSubmit(values);
                } }, function (_a) {
                var errors = _a.errors, touched = _a.touched, values = _a.values;
                return (react_1["default"].createElement(ScreenComponents_1.FormWrapper, null,
                    react_1["default"].createElement(formik_1.Form, null,
                        react_1["default"].createElement(Input_1["default"], { label: "Nome", name: "name", type: "string", placeholder: "Ex: Nata\u00E7\u00E3o" }),
                        react_1["default"].createElement(Button_1["default"], { title: "Salvar", primary: true, type: "submit", isLoading: isLoading }))));
            }))));
}
exports["default"] = Modality;

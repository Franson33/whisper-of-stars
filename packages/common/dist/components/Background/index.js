"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = require("../../constants/colors");
var Background = function () {
    var isDarkMode = (0, react_native_1.useColorScheme)() === "dark";
    return (react_1.default.createElement(react_native_1.ImageBackground, { accessibilityRole: "image", testID: "new-app-screen-header", source: require("../../../public/logo.png"), style: [
            styles.background,
            {
                backgroundColor: isDarkMode ? colors_1.Colors.darker : colors_1.Colors.lighter,
            },
        ], imageStyle: styles.logo },
        react_1.default.createElement(react_native_1.Text, { style: [
                styles.text,
                {
                    color: isDarkMode ? colors_1.Colors.white : colors_1.Colors.black,
                },
            ] },
            "Hello RN +",
            "\n",
            "React Native for Web")));
};
var styles = react_native_1.StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: react_native_1.Dimensions.get("screen").height / 2,
        width: react_native_1.Dimensions.get("screen").width,
        paddingBottom: 40,
        paddingTop: 96,
        paddingHorizontal: 32,
    },
    logo: {
        opacity: 0.2,
        overflow: "visible",
        resizeMode: "cover",
        marginLeft: -128,
        marginBottom: -192,
    },
    text: {
        fontSize: 40,
        fontWeight: "700",
        textAlign: "center",
    },
});
exports.default = Background;

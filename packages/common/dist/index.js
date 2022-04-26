"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Background_1 = __importDefault(require("./components/Background"));
var ShowCount_1 = require("./components/ShowCount");
var colors_1 = require("./constants/colors");
var App = function () {
    var isDarkMode = (0, react_native_1.useColorScheme)() === "dark";
    var backgroundStyle = {
        backgroundColor: isDarkMode ? colors_1.Colors.darker : colors_1.Colors.lighter,
    };
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    var onPressHandler = (0, react_1.useCallback)(function () {
        setCount(function (c) { return c + 1; });
    }, []);
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: backgroundStyle },
        react_1.default.createElement(react_native_1.StatusBar, { barStyle: isDarkMode ? "light-content" : "dark-content" }),
        react_1.default.createElement(react_native_1.ScrollView, { contentInsetAdjustmentBehavior: "automatic", style: backgroundStyle },
            react_1.default.createElement(Background_1.default, null),
            react_1.default.createElement(react_native_1.View, { style: [
                    {
                        backgroundColor: isDarkMode ? colors_1.Colors.black : colors_1.Colors.white,
                    },
                    styles.counterContainer,
                ] },
                react_1.default.createElement(react_native_1.Text, { style: styles.text }, "Count - ".concat(count)),
                react_1.default.createElement(ShowCount_1.ShowCount, { onPressHandler: onPressHandler })))));
};
exports.App = App;
var styles = react_native_1.StyleSheet.create({
    counterContainer: {
        flex: 1,
        height: react_native_1.Dimensions.get("screen").height * 0.4,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    text: {
        fontSize: 26,
    },
});

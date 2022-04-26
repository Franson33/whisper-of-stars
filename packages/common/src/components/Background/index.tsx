import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  Dimensions,
} from "react-native";
import { Colors } from "../../constants/colors";

const Background = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <ImageBackground
      accessibilityRole="image"
      testID="new-app-screen-header"
      source={require("../../../public/logo.png")}
      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      imageStyle={styles.logo}
    >
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        Hello RN +{"\n"}
        React Native for Web
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height / 2,
    width: Dimensions.get("screen").width,
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

export default Background;

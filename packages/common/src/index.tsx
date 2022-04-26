import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from "react-native";
import Background from "./components/Background";
import { ShowCount } from "./components/ShowCount";
import { Colors } from "./constants/colors";

export const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [count, setCount] = useState(0);

  const onPressHandler = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Background />
        <View
          style={[
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            },
            styles.counterContainer,
          ]}
        >
          <Text style={styles.text}>{`Count - ${count}`}</Text>
          <ShowCount onPressHandler={onPressHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flex: 1,
    height: Dimensions.get("window").height * 0.4,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
  },
});

import React, {useRef} from 'react';
import {Button, Text, StyleSheet} from 'react-native';

interface ShowCountPropsInterface {
  onPressHandler: () => void;
}

export const ShowCount = React.memo(
  ({onPressHandler}: ShowCountPropsInterface) => {
    const renders = useRef(0);

    return (
      <>
        <Text style={styles.text}>{`Renders - ${renders.current++}`}</Text>
        <Button title="Increment counter" onPress={onPressHandler} />
      </>
    );
  },
);

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
  },
});

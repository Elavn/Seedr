import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect, Line, Defs, Pattern } from 'react-native-svg';

const DiagonalBackground = () => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={styles.svg}>
        <Defs>
          <Pattern
            id="diagonal-stripes"
            patternUnits="userSpaceOnUse"
            width="20" // Adjust the width of the stroke spacing
            height="20"
            patternTransform="rotate(45)" // Rotates the pattern diagonally
          >
            <Line
              x1="0"
              y1="0"
              x2="0"
              y2="20"
              stroke="#F0F0F0" // Color of the stroke
              strokeWidth="4" // Thickness of the stroke
            />
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
      </Svg>
    </View>
  );
};

export default DiagonalBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    padding: 20,
    zIndex: 1,
  },
});

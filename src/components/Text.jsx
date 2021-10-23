import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  marginOne: {
    marginBottom: theme.marginBottom.one,
  },
  marginTwo: {
    marginBottom: theme.marginBottom.two,
  },
  marginThree:{
    marginBottom: theme.marginBottom.three,
  }
});

const Text = ({ color, fontSize, fontWeight, style, marginBottom, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    marginBottom === "mb-one" && styles.marginOne,
    marginBottom === "mb-two" && styles.marginTwo,
    marginBottom === "mb-three" && styles.marginThree,
    style,
  ];
  return <NativeText style={textStyle} {...props}/>;
};

export default Text;


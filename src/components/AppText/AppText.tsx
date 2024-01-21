import React, {ReactChild} from 'react';
import {Text, TextProps} from 'react-native';
import {fontFamily as fm, fontSize as fs} from './../../shared/theme/fonts';
import {COLORS} from '../../shared/theme/pallete';

interface Props extends TextProps {
  children: ReactChild;
  color?: string;
  bold?: boolean;
  Regular?: boolean;
  Medium?: boolean;
  semiBold?: boolean;
  light?: boolean;
  FONT_32?: boolean;
  FONT_34?: boolean;
  FONT_36?: boolean;
  FONT_24?: boolean;
  FONT_20?: boolean;
  FONT_18?: boolean;
  FONT_16?: boolean;

  FONT_14?: boolean;
  FONT_12?: boolean;
  FONT_10?: boolean;
  FONT_8?: boolean;

  FONT_26?: boolean;
  FONT_28?: boolean;
}

const AppText = (props: Props) => {
  const {
    children,
    bold,
    color,
    Medium,
    semiBold,
    light,
    FONT_32,
    FONT_34,
    FONT_36,
    FONT_26,

    FONT_24,
    FONT_20,
    FONT_18,
    FONT_16,
    FONT_14,
    FONT_12,
    FONT_10,
    FONT_8,

    FONT_28,
  } = props;

  let fontFamily = fm.REGULAR;

  if (bold) {
    fontFamily = fm.BOLD;
  }
  if (light) {
    fontFamily = fm.LIGHT;
  }
  if (Medium) {
    fontFamily = fm.MEDIUM;
  }
  if (semiBold) {
    fontFamily = fm.SEMIBOLD;
  }
  let fontSize = fs.FONT_14;
  let lineHeight = fs.FONT_20;
  if (FONT_28) {
    fontSize = fs.FONT_28;
    lineHeight = fs.FONT_34;
  }
  if (FONT_32) {
    fontSize = fs.FONT_32;
    lineHeight = fs.FONT_38;
  }
  if (FONT_34) {
    fontSize = fs.FONT_34;
    lineHeight = fs.FONT_40;
  }
  if (FONT_36) {
    fontSize = fs.FONT_34;
    lineHeight = fs.FONT_42;
  }
  if (FONT_24) {
    fontSize = fs.FONT_24;
    lineHeight = fs.FONT_30;
  }
  if (FONT_26) {
    fontSize = fs.FONT_24;
    lineHeight = fs.FONT_32;
  }
  if (FONT_20) {
    fontSize = fs.FONT_20;
    lineHeight = fs.FONT_26;
  }
  if (FONT_18) {
    fontSize = fs.FONT_18;
    lineHeight = fs.FONT_24;
  }
  if (FONT_16) {
    fontSize = fs.FONT_16;
    lineHeight = fs.FONT_22;
  }
  if (FONT_14) {
    fontSize = fs.FONT_14;
    lineHeight = fs.FONT_18;
  }
  if (FONT_12) {
    fontSize = fs.FONT_12;
    lineHeight = fs.FONT_18;
  }
  if (FONT_10) {
    fontSize = fs.FONT_10;
    lineHeight = fs.FONT_16;
  }
  if (FONT_8) {
    fontSize = fs.FONT_8;
    lineHeight = fs.FONT_14;
  }

  return (
    <Text
      {...props}
      style={[
        {
          fontSize,
          color: color ? color : COLORS.Tangaroa,
          fontFamily,
          lineHeight,
        },
        props?.style,
      ]}>
      {children}
    </Text>
  );
};

export default AppText;

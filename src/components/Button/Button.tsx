import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {COLORS} from '../../shared/theme/pallete';
import AppText from '../AppText/AppText';
import {styles} from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  backgroundColor?: string;
  borderColor?: string;
  title: string;
  buttonType?: 'Filled' | 'Outlined';
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  backgroundColor = COLORS.MayaBlue,
  borderColor = COLORS.MayaBlue,
  style,
  buttonType = 'Filled',
  ...props
}) => {
  const buttonStyleFilled = {
    backgroundColor,
    borderColor,
    ...styles.button,
    ...style,
  };
  const buttonStyleOutlined = {
    borderColor,
    ...styles.buttonOutlined,
    ...style,
  };

  if (buttonType === 'Filled') {
    return (
      <TouchableOpacity style={buttonStyleFilled} onPress={onPress} {...props}>
        <AppText FONT_16 semiBold color={COLORS.White}>
          {props.title}
        </AppText>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={buttonStyleOutlined}
        onPress={onPress}
        {...props}>
        <AppText FONT_16 semiBold color={COLORS.White}>
          {props.title}
        </AppText>
      </TouchableOpacity>
    );
  }
};

export default Button;

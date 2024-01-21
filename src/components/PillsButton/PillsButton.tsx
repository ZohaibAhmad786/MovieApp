import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../AppText/AppText';
import { RADIUS } from '../../shared/theme/radius';
import { mvs } from '../../shared/theme/metrices';

interface PillsButtonProps {
  label: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const PillsButton: React.FC<PillsButtonProps> = ({
  label,
  onPress,
  backgroundColor = '#3498db',
  textColor = 'white',
}) => {
  return (
    <TouchableOpacity
      style={{...styles.pillsButton, backgroundColor}}
      onPress={onPress}>
      <AppText color={textColor} FONT_12 semiBold>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pillsButton: {
    borderRadius: RADIUS.RADIUS_16, // Adjust the borderRadius to make it more or less rounded
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(4),
    marginRight: 5,
    marginBottom: mvs(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PillsButton;

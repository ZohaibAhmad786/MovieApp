import React from 'react';
import {View, StyleSheet} from 'react-native';

interface GrayLineProps {
  height?: number;
  width?: number;
}

const GrayLine: React.FC<GrayLineProps> = ({height = 1, width = '100%'}) => {
  return <View style={{...styles.grayLine, height, width}} />;
};

const styles = StyleSheet.create({
  grayLine: {
    backgroundColor: '#dcdcdc', // You can change this to any desired gray color
  },
});

export default GrayLine;

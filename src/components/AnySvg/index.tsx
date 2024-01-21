import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

import * as Svgs from './../../assets/svgs';
import * as TabSvgs from './../../assets/tabbar';
import {mvs} from '../../shared/theme/metrices';
interface Props {
  name: string | undefined;
  width?: any;
  height?: any;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
  svgStyle?: StyleProp<ViewStyle>;
  size?: any;
  activeOpacity?: number;
}
const AnySvg: React.FC<Props> = ({
  name = '',
  width = 27,
  height = 27,
  containerStyle = {},
  onPress = () => {},
  disabled = false,
  svgStyle = {},
  size,
  activeOpacity,
  ...props
}) => {
  // @ts-ignore
  const Tag: any = name ? Svgs[name] || TabSvgs[name] : null;
  let isWidthString = typeof width == 'string';
  let isHeightString = typeof height == 'string';

  return (
    <>
      {name && (
        <TouchableOpacity
          activeOpacity={activeOpacity || 0.7}
          style={[{padding: 0}, containerStyle]}
          disabled={disabled}
          onPress={onPress}>
          <Tag
            // {...props}
            width={size || (isWidthString ? width : mvs(width))}
            height={
              size || (isHeightString || isWidthString ? height : mvs(height))
            }
            style={svgStyle}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default AnySvg;

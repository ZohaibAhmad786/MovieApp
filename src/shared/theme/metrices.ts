import {Dimensions, Platform} from 'react-native';
import {PixelRatio} from 'react-native';

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const xdHeight = (xdHeight: number) => {
  const heightPercent = Math.round((xdHeight / 812) * 100);
  return PixelRatio.roundToNearestPixel((height * heightPercent) / 100);
};

const xdWith = (xdWidth: number) => {
  const widthPercent = Math.round((xdWidth / 375) * 100);
  return PixelRatio.roundToNearestPixel((width * widthPercent) / 100);
};

//Guideline sizes are based on standard ~5" screen mobile devices
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 800 + 40;
const scale = (size: number) => (width / guidelineBaseWidth) * size;
const vs = (size: number) => (height / guidelineBaseHeight) * size;
const ms = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;
const mvs = (
  size: number,
  factor: number = Platform.OS === 'android' ? 0.7 : 0.5,
) => size + (vs(size) - size) * factor;

// Calculate the pixel ratio
const pixelRatio = PixelRatio.get();
// Calculate the adjusted height and width based on pixel ratio
const adjustedHeight = height / pixelRatio;
const adjustedWidth = width / pixelRatio;

export {
  scale,
  vs,
  ms,
  mvs,
  height,
  width,
  xdHeight,
  xdWith,
  adjustedWidth,
  adjustedHeight,
};

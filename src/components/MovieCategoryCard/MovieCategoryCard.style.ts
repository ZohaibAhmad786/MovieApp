import {StyleSheet, Dimensions} from 'react-native';
import {RADIUS} from '../../shared/theme/radius';
import {mvs} from '../../shared/theme/metrices';
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2;
const spaceBetween = mvs(10);
export const styles = StyleSheet.create({
  CONTAINER: {
    height: mvs(110),
    // width: '47%',
    flex:0.485,
    // marginRight: spaceBetween,
    // marginVertical: spaceBetween,
    overflow: 'hidden',
    borderRadius: RADIUS.RADIUS_10,
  },
  BE_IMG_CONTAINER: {
    height: '100%',
    width: '100%',
  },
  TEXT_CONTAINER: {
    width: '100%',
    paddingHorizontal: mvs(20),
    position: 'absolute',
    bottom: mvs(20),
    // left: mvs(20),
    // right: mvs(20),
    zIndex: 1001,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 1000,
  },
});

import {StyleSheet} from 'react-native';
import {RADIUS} from '../../shared/theme/radius';
import {mvs} from '../../shared/theme/metrices';

export const styles = StyleSheet.create({
  CONTAINER: {
    height: mvs(180),
    marginVertical: mvs(10),
    overflow: 'hidden',
    borderRadius: RADIUS.RADIUS_10,
  },
  BE_IMG_CONTAINER: {
    height: '100%',
    width: '100%',
  },
  TEXT_CONTAINER: {
    position: 'absolute',
    bottom: mvs(20),
    left: mvs(20),
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

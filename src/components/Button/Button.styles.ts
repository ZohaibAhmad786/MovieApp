import {StyleSheet} from 'react-native';
import {RADIUS} from '../../shared/theme/radius';
import {mvs} from '../../shared/theme/metrices';

export const styles = StyleSheet.create({
  button: {
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: mvs(50),
    borderRadius: RADIUS.RADIUS_10,
  },
  buttonOutlined: {
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: mvs(2),
    backgroundColor: 'transparent',
    height: mvs(50),
    borderRadius: RADIUS.RADIUS_10,
  },
});

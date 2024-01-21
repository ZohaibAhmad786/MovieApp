import {StyleSheet, Dimensions} from 'react-native';
import {RADIUS} from '../../shared/theme/radius';
import {mvs} from '../../shared/theme/metrices';

export const styles = StyleSheet.create({
  CONTAINER: {
    height: mvs(110),
    // backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    overflow: 'hidden',
  
    marginBottom: mvs(10),
  },
  BE_IMG_CONTAINER: {
    height: '100%',
    width: mvs(130),
    borderRadius: RADIUS.RADIUS_10,
  },
  TEXT_CONTAINER:{
    paddingLeft: mvs(10),
  },
  RIGHT_BOX:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  }
});

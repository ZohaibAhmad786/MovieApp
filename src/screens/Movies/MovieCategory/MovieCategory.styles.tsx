import {StyleSheet} from 'react-native';
import { mvs } from '../../../shared/theme/metrices';
export const styles = StyleSheet.create({
  flatListContainer: {
     paddingHorizontal: mvs(20), // Optional padding for the entire FlatList container
  },
  columnWrapper: {
    paddingHorizontal: mvs(20),
    width:'100%',
    justifyContent: 'space-between',
    paddingTop: mvs(10), 
  },
});

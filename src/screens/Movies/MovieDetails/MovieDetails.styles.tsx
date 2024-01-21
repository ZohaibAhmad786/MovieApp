import {StyleSheet} from 'react-native';
import {mvs} from '../../../shared/theme/metrices';
export const styles = StyleSheet.create({
  POSTER_CONTENT: {
    position: 'absolute',
    zIndex: 1001,
    width: '100%',
    paddingHorizontal: mvs(66),
    alignItems: 'center',
    bottom: mvs(34),
  },
  MOVE_TITLE_CONTAINER: {
    marginBottom: mvs(5),
  },
  BUTTON_MARGIN: {
    marginTop: mvs(10),
  },
  DETAILS_CONTAINER: {
    padding: mvs(40),
  },
  DESCRIPTION: {
    marginTop: mvs(14),
  },
  GRAY_LINE_CONTAINER: {
    marginTop: mvs(22),
    marginBottom: mvs(15),
  },
  GENRE_CONTAINER: {
    marginTop: mvs(14),
    flexDirection: 'row',
    flexWrap: 'wrap',
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

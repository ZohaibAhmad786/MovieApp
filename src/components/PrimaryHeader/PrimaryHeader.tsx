import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { mvs } from '../../shared/theme/metrices';
import { COLORS } from '../../shared/theme/pallete';
import AnySvg from '../AnySvg';
import AppText from '../AppText/AppText';
interface Props {
  title: string;
  isSearchIcon?: boolean;
  isSearchInput?: boolean;
  onSearchPressed?: () => void;
}
const PrimaryHeader = (props: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <AppText FONT_16 Medium>
        {props.title}
      </AppText>
      {props.isSearchIcon ? (
        <TouchableOpacity
          onPress={() => props.onSearchPressed && props.onSearchPressed()}>
           <AnySvg disabled name='search' size={20}/>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default React.memo(PrimaryHeader);

const styles = StyleSheet.create({
  container: {
    height: mvs(70),
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.White,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: mvs(2),
    borderBottomColor: COLORS.WhiteSmoke,
    // marginTop: mvs(12),
    paddingHorizontal: mvs(20),
    // paddingBottom: mvs(24),
  },
});

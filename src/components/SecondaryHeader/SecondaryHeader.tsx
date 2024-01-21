import React from 'react';
import {Platform, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {mvs} from '../../shared/theme/metrices';
import {COLORS} from '../../shared/theme/pallete';
import AppText from '../AppText/AppText';
import AnySvg from '../AnySvg';
interface Props {
  title: string;
  onBackPress: () => void;
  centerHeader?: boolean;
  subTitle?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
const SecondaryHeader = ({title, ...props}: Props): JSX.Element => {
  return (
    <View style={[styles.container, props.contentContainerStyle]}>
      {props.centerHeader ? (
        <View style={styles.centeredHeader}>
          {props.onBackPress ? (
            <AnySvg
              onPress={props.onBackPress}
              name="caretLeft"
              size={17}
              containerStyle={styles.absoluteBackIcon}
            />
          ) : null}
          <AppText FONT_16 Medium color={COLORS.Tangaroa}>
            {title}
          </AppText>
          {props.subTitle ? (
            <AppText FONT_16 Medium color={COLORS.MayaBlue}>
              {props.subTitle}
            </AppText>
          ) : null}
        </View>
      ) : (
        <View style={styles.ROW}>
          {props.onBackPress ? (
            <AnySvg
              onPress={props.onBackPress}
              name="caretLeftWhite"
              size={17}
              containerStyle={styles.iconContainer}
            />
          ) : null}
          <AppText FONT_16 Medium color={COLORS.White}>
            {title}
          </AppText>
        </View>
      )}
    </View>
  );
};

export default React.memo(SecondaryHeader);

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'android' ? mvs(70) : mvs(80),
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1001,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: mvs(12),
    paddingHorizontal: mvs(20),
    // paddingBottom: mvs(24),
  },
  ROW: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: mvs(14),
  },
  absoluteBackIcon: {
    position: 'absolute',
    left: 0,
  },
  centeredHeader: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});

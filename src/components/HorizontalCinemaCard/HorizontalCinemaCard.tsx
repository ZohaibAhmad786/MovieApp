import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import AnySvg from '../AnySvg';
import {mvs} from '../../shared/theme/metrices';
import {COLORS} from '../../shared/theme/pallete';
import {RADIUS} from '../../shared/theme/radius';
import {IMAGES} from '../../assets/images';
import AppText from '../AppText/AppText';
interface HorizontalCardViewProps {
  index: number;
  activeCiname: number;
  setAtiveCinema: () => void;
}
const HorizontalCardView: React.FC<HorizontalCardViewProps> = props => {
  return (
    <View style={styles.container}>
      <AppText FONT_12 Medium color={COLORS.Tangaroa}>
        12:30{'  '}
        <AppText FONT_12 color={COLORS.SuvaGrey}>
          Cinetech + hall 1
        </AppText>
      </AppText>

      <Pressable
        onPress={props.setAtiveCinema}
        style={[
          styles.borderedBox,
          props.index === props.activeCiname && {borderColor: COLORS.MayaBlue},
        ]}>
        <Image
          source={IMAGES.CinemaSeats}
          style={styles.cinemaImg}
          resizeMode="cover"
        />
      </Pressable>

      <AppText FONT_12 Medium color={COLORS.SuvaGrey}>
        From{' '}
        <AppText FONT_12 bold color={COLORS.Tangaroa}>
          50${' '}
        </AppText>
        <AppText FONT_12 Medium color={COLORS.SuvaGrey}>
          or{' '}
        </AppText>
        <AppText FONT_12 bold color={COLORS.Tangaroa}>
          2500 bonus
        </AppText>
      </AppText>
    </View>
  );
};

export default HorizontalCardView;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'column',
  },
  cinemaImg: {
    height: mvs(140),
    width: mvs(170),
  },
  borderedBox: {
    marginTop: mvs(5),
    marginBottom: mvs(10),
    paddingVertical: mvs(16),
    paddingHorizontal: mvs(52),
    borderWidth: mvs(1),
    borderRadius: RADIUS.RADIUS_10,
    borderColor: COLORS.Tangaroa,
  },
});

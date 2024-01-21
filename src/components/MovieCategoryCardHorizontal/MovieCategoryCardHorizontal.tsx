import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../shared/theme/pallete';
import AppText from '../AppText/AppText';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import { styles } from './MovieCategoryCardHorizontal.style';
import LinearGradient from 'react-native-linear-gradient';
import { IWatchMovie } from '../../shared/types';
import AnySvg from '../AnySvg';
type Props = {
  movieItem: IWatchMovie;
};

const MovieCategoryCardHorizontal = (props: Props) => {
  return (
    <View style={styles.CONTAINER}>
      <ImagePlaceholder
        resizeMode={'cover'}
        image={props.movieItem.poster_path}
        imgStyle={styles.BE_IMG_CONTAINER}
      />

      <View style={styles.RIGHT_BOX}>
        <View style={styles.TEXT_CONTAINER}>
          <AppText FONT_16 Medium color={COLORS.Tangaroa}>
            {props.movieItem?.title}
          </AppText>
          <AppText FONT_12 Medium color={COLORS.WhiteLilac}>
            {props.movieItem?.title}
          </AppText>
        </View>
        <AnySvg name='dots' disabled />
      </View>
    </View>
  );
};

export default MovieCategoryCardHorizontal;

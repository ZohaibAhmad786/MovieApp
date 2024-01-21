import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../shared/theme/pallete';
import AppText from '../AppText/AppText';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import {styles} from './MovieCategoryCard.style';
import LinearGradient from 'react-native-linear-gradient';
import {IWatchMovie} from '../../shared/types';
type Props = {
  movieItem: IWatchMovie;
};

const MovieCategoryCard = (props: Props) => {
  return (
    <View style={styles.CONTAINER}>
      <ImagePlaceholder
        resizeMode={'cover'}
        image={ props.movieItem.poster_path}
        imgStyle={styles.BE_IMG_CONTAINER}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
        style={styles.linearGradient}
      />
      <View style={styles.TEXT_CONTAINER}>
        <AppText FONT_16 Medium color={COLORS.White}>
          {props.movieItem?.title}
        </AppText>
      </View>
    </View>
  );
};

export default MovieCategoryCard;

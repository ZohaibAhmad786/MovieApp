import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../shared/theme/pallete';
import AppText from '../AppText/AppText';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import {styles} from './MovieCard.style';
import LinearGradient from 'react-native-linear-gradient';
import {IWatchMovie} from '../../shared/types';
type Props = {
  movieItem: IWatchMovie;
  onPress: () => void;
};

const MovieCard = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.CONTAINER}>
      <ImagePlaceholder
        imageWithUrl
        resizeMode={'cover'}
        image={'https://image.tmdb.org/t/p/w1280' + props.movieItem.poster_path}
        imgStyle={styles.BE_IMG_CONTAINER}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
        style={styles.linearGradient}
      />
      <View style={styles.TEXT_CONTAINER}>
        <AppText FONT_18 Medium color={COLORS.White}>
          {props.movieItem?.title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

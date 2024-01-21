import React, { useCallback } from 'react';
import {Alert, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../../../components/AppText/AppText';
import Button from '../../../components/Button/Button';
import GrayLine from '../../../components/GrayLine/GrayLine';
import ImagePlaceholder from '../../../components/ImagePlaceholder/ImagePlaceholder';
import PillsButton from '../../../components/PillsButton/PillsButton';
import {mvs} from '../../../shared/theme/metrices';
import {COLORS} from '../../../shared/theme/pallete';
import {IMovieDetails} from '../../../shared/types';
import {styles} from './MovieDetails.styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WatchMovieParamsList} from '../../../navigation';
import SecondaryHeader from '../../../components/SecondaryHeader/SecondaryHeader';
import { formatDate } from '../../../shared/utils';
import { getMovieDetails, getMovieTrailer } from '../../../shared/API';

type MovieDetailsScreenProps = NativeStackScreenProps<
  WatchMovieParamsList,
  'MOVIE_DETAIL'
>;

const MovieDetails = (props: MovieDetailsScreenProps) => {
  const [data, setData] = React.useState<IMovieDetails>({});

  React.useEffect(() => {
    getMovieDetailsData();
  }, []);

  const getMovieDetailsData = useCallback(async () => {
    try {
      const responseData = await getMovieDetails(props.route.params.id);
      setData(responseData);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }, []);

const fetchTrailers=()=>{
  getMovieTrailer(props.route.params.id)
  .then(res => {
    // console.log(res);
    const trailerList=res.results.filter(e=>e.type ==='Trailer');
    const firstTrailer= trailerList[0]
    const link =`https://www.${firstTrailer.site.toLowerCase()}.com/watch?v=${firstTrailer?.key}`
    console.log(firstTrailer.key)
    props.navigation.navigate('MOVIE_PLAYER', {videoId:firstTrailer.key})
  })
  .catch(err => {
    console.log(err);
  });
}

const onBackPress=()=>props.navigation.goBack()
const nonGetTickets=()=>props.navigation.navigate("MOVIE_TICKETS")

  return (
    <View>
      <SecondaryHeader title="Watch"  onBackPress={onBackPress}/>
      <View style={{height: mvs(400)}}>
        <ImagePlaceholder image={data.poster_path} />
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          style={styles.linearGradient}
        />
        <View style={styles.POSTER_CONTENT}>
          <View style={styles.MOVE_TITLE_CONTAINER}>
            <AppText FONT_16 Medium color={COLORS.White}>
              In theaters {formatDate(data.release_date, 'MMMM DD, yyyy')}
            </AppText>
          </View>
          <Button
            onPress={nonGetTickets}
            title="Get Tickets"
            style={styles.BUTTON_MARGIN}
          />
          <Button
            onPress={fetchTrailers}
            buttonType="Outlined"
            title="Watch Trailer"
            style={styles.BUTTON_MARGIN}
          />
        </View>
      </View>
      <View style={styles.DETAILS_CONTAINER}>
        <AppText FONT_16 Medium color={COLORS.Tangaroa}>
          Genres
        </AppText>
        <View style={styles.GENRE_CONTAINER}>
          {data?.genres?.map((e, index) => (
            <PillsButton
              key={index}
              label={e.name}
              backgroundColor={
                COLORS.genreBackground[e.name as any] || COLORS.Gamboge
              }
              onPress={() => {}}
            />
          ))}
        </View>
        <View style={styles.GRAY_LINE_CONTAINER}>
          <GrayLine />
        </View>
        <AppText FONT_16 Medium color={COLORS.Tangaroa}>
          Overview
        </AppText>
        <View style={styles.DESCRIPTION}>
          <AppText FONT_12 color={COLORS.SuvaGrey}>
            {data.overview}
          </AppText>
        </View>
      </View>
    </View>
  );
};

// AIzaSyBGux1d24fHjSlPpcPX7qILKqgYkXAgEKs
export default MovieDetails;

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MovieCard from '../../../components/MovieCard/MovieCard';
import PrimaryHeader from '../../../components/PrimaryHeader/PrimaryHeader';
import {MovieStackParamsList, WatchMovieParamsList} from '../../../navigation';
import {COLORS} from '../../../shared/theme/pallete';
import {IWatchMovie} from '../../../shared/types';
import {styles} from './MovieWatch.styles';
import {getUpCommingMovies} from '../../../shared/API';
import { useSelector } from 'react-redux';
import store, { RootState } from '../../../shared/redux/store';
import { setMoviesList } from '../../../shared/redux/watchReducer';

type MovieWatchScreenProps = NativeStackScreenProps<
  MovieStackParamsList,
  'MOVIE_STACK'
>;

const MovieWatch = (props: MovieWatchScreenProps) => {
  //22d22d403c9d2bc75d6eca691181e097
  // const [data, setData] = React.useState([]);
  const data= useSelector((state:RootState)=>state.watchMovies.movies)
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    getUpcommingMoviesData();
  }, []);

  const getUpcommingMoviesData = useCallback(async () => {
    try {
      const responseData = await getUpCommingMovies();
    store.dispatch(setMoviesList(responseData.results))
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }, []);

  const navigateTo = (screenName: string, id: number) => {
    props.navigation.navigate(screenName as keyof WatchMovieParamsList, {id});
  };
  const navigate = (screenName: string) => {
    props.navigation.navigate(screenName as keyof WatchMovieParamsList);
  };
  const renderItem = ({item, index}: {item: IWatchMovie; index: number}) => (
    <MovieCard
      key={index}
      onPress={() => navigateTo('MOVIE_DETAIL', item.id)}
      movieItem={item}
    />
  );

  return (
    <View
      style={{flex: 1, paddingTop: insets.top, backgroundColor: COLORS.White}}>
      <PrimaryHeader
        title={'Watch'}
        isSearchIcon
        onSearchPressed={() => navigate('MOVIE_CATEGORY')}
      />
      <View style={{flex: 1, backgroundColor: COLORS.Solitude}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </View>
  );
};

export default MovieWatch;

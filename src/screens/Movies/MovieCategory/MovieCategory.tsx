import React from 'react';
import {FlatList, View} from 'react-native';
import MovieCategoryCard from '../../../components/MovieCategoryCard/MovieCategoryCard';
import {styles} from './MovieCategory.styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WatchMovieParamsList} from '../../../navigation';
import PrimaryHeader from '../../../components/PrimaryHeader/PrimaryHeader';
import {COLORS} from '../../../shared/theme/pallete';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {mvs} from '../../../shared/theme/metrices';
import RoundedSearchInput from '../../../components/SearchInput/SearchInput';
import {IWatchMovie} from '../../../shared/types';
import AppText from '../../../components/AppText/AppText';
import GrayLine from '../../../components/GrayLine/GrayLine';
import MovieCategoryCardHorizontal from '../../../components/MovieCategoryCardHorizontal/MovieCategoryCardHorizontal';

type MovieCategoryScreenProps = NativeStackScreenProps<
  WatchMovieParamsList,
  'MOVIE_CATEGORY'
>;
const MovieCategory = (props: MovieCategoryScreenProps) => {
  const [data, setData] = React.useState([]);
  const insets = useSafeAreaInsets();
  const [search, setSearch] = React.useState<string>('');
  const onSearchHandler = React.useCallback(() => {
    let url = search?
    `https://api.themoviedb.org/3/search/movie?api_key=22d22d403c9d2bc75d6eca691181e097&query=${search}`:
    `https://api.themoviedb.org/3/movie/upcoming?api_key=22d22d403c9d2bc75d6eca691181e097`
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => setData(res))
      .catch(err => {
        console.log(err);
      });
  }, [search]);

  React.useEffect(() => {
    onSearchHandler();
  }, [search]);
  const renderItem = ({item, index}: {item: IWatchMovie; index: number}) =>
    search ? (
      <MovieCategoryCardHorizontal key={index} movieItem={item} />
    ) : (
      <MovieCategoryCard key={index} movieItem={item} />
    );
  const navigateTo = (screenName: string, id: number) => {
    props.navigation.navigate(screenName as keyof WatchMovieParamsList, {id});
  };

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: insets.bottom,
        paddingTop: insets.top,
        backgroundColor: COLORS.White,
      }}>
      <View
        style={{
          width: '100%',
          backgroundColor: COLORS.White,
          borderBottomWidth: mvs(2),
          borderBottomColor: COLORS.WhiteSmoke,
          justifyContent: 'flex-end',
          paddingHorizontal: mvs(20),
          paddingVertical:mvs(14)
          // paddingTop: mvs(10),
          // paddingBottom: mvs(24),
        }}>
        <RoundedSearchInput onSearch={setSearch} returnKeyType="go" />
      </View>
  
      <View style={{flex: 1, backgroundColor: COLORS.Solitude}}>
      {search ? (
        <View
          style={{
            paddingHorizontal: mvs(20),
            marginTop: mvs(20),
            marginBottom: mvs(10),
          }}>
          <View style={{marginBottom: mvs(10)}}>
            <AppText FONT_16 Medium color={COLORS.Tangaroa}>
              Top Results
            </AppText>
          </View>
          <GrayLine />
        </View>
      ) : null}

        {search ? (
          <FlatList
            key={'Default'}
            data={data?.results}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.flatListContainer}
          />
        ) : (
          <FlatList
            key={'RowList'}
            data={data?.results}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            columnWrapperStyle={styles.columnWrapper}
          />
        )}
      </View>
    </View>
  );
};

export default MovieCategory;

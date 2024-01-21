import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import PrimaryHeader from '../../../components/PrimaryHeader/PrimaryHeader';
import {WatchMovieParamsList} from '../../../navigation';
import {COLORS} from '../../../shared/theme/pallete';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SecondaryHeader from '../../../components/SecondaryHeader/SecondaryHeader';
import {mvs} from '../../../shared/theme/metrices';
import Button from '../../../components/Button/Button';
import {styles} from './MovieTickets.styles';
import AppText from '../../../components/AppText/AppText';
import HorizontalWeekView from '../../../components/HorizontalWeekView/HorizontalWeekView';
import HorizontalCardView from '../../../components/HorizontalCinemaCard/HorizontalCinemaCard';

type MovieTicketsScreenProps = NativeStackScreenProps<
  WatchMovieParamsList,
  'MOVIE_TICKETS'
>;

const MovieTickets = (props: MovieTicketsScreenProps) => {
  const insets = useSafeAreaInsets();
  const [activeCinema, setAtiveCinema] = useState(-1);
  const onBackPress = () => props.navigation.goBack();
  const renderItem = ({item, index}: {item: number; index: number}) => (
    <HorizontalCardView
      index={index}
      activeCiname={activeCinema}
      setAtiveCinema={() => setAtiveCinema(index)}
    />
  );
  return (
    <View
      style={{flex: 1, paddingTop: insets.top, backgroundColor: COLORS.White}}>
      <SecondaryHeader
        centerHeader
        title="The King’s Man"
        subTitle={'In theaters december 22, 2021'}
        onBackPress={onBackPress}
        contentContainerStyle={{
          backgroundColor: COLORS.White,
          borderBottomWidth: mvs(2),
          borderBottomColor: COLORS.WhiteSmoke,
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',

          backgroundColor: COLORS.Solitude,
        }}>
        <View style={{paddingHorizontal: mvs(20)}}>
          <AppText FONT_16 Medium color={COLORS.Tangaroa}>
            Date
          </AppText>
        </View>
        <HorizontalWeekView />
        <View style={{height: mvs(300)}}>
          <FlatList
            data={Array(5).fill(0)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={{flex: 0}}
          />
        </View>
      </View>
      <View style={styles.BUTTON_CONTAINER}>
        <Button title="Select Seats" onPress={() => {}} />
      </View>
    </View>
  );
};

export default MovieTickets;

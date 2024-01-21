import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import moment from 'moment';
import {mvs} from '../../shared/theme/metrices';
import {RADIUS} from '../../shared/theme/radius';
import {COLORS} from '../../shared/theme/pallete';
import AppText from '../AppText/AppText';
import {formatDate} from '../../shared/utils';

const HorizontalWeekView = () => {
  // Get the current date

  const [selectedDate, setSelectedDate] = useState<string>(moment().toString());

  const currentDate = moment();

  console.log({selectedDate});
  // Generate data for the week starting from the current date
  const weekData = Array.from({length: 7}).map((_, index) => {
    const date = currentDate.clone().add(index, 'days');
    return {
      date: date,
    };
  });
  // Render each date pill
  const renderDatePill = ({item}) => (
    <Pressable
    onPress={()=>setSelectedDate(item.date)}
      style={
        moment(selectedDate).isSame(item.date, 'day')
          ? styles.datePillSelected
          : styles.datePill
      }>
      <AppText
        FONT_12
        semiBold
        color={
          moment(selectedDate).isSame(item.date, 'day')
            ? COLORS.White
            : COLORS.Tangaroa
        }>
        {formatDate(item.date, 'DD MMM')}
      </AppText>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={weekData}
        renderItem={renderDatePill}
        contentContainerStyle={{flexGrow: 0, paddingHorizontal: mvs(20)}}
        keyExtractor={item => item.date.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: mvs(10),
    height: mvs(50),
  },
  datePill: {
    height: mvs(40),
    backgroundColor: '#e0e0e0',
    padding: mvs(10),
    justifyContent: 'center',
    marginRight: mvs(10),
    borderRadius: RADIUS.RADIUS_10,
    alignItems: 'center',
  },
  datePillSelected: {
    height: mvs(40),
    backgroundColor: COLORS.MayaBlue,
    padding: mvs(10),
    justifyContent: 'center',
    marginRight: mvs(10),
    borderRadius: RADIUS.RADIUS_10,
    alignItems: 'center',
  },
});

export default HorizontalWeekView;

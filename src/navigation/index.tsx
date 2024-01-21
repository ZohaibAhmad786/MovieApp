import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import MovieCategory from '../screens/Movies/MovieCategory/MovieCategory';
import MovieDetails from '../screens/Movies/MovieDetails/MovieDetails';
import MovieWatch from '../screens/Movies/MovieWatch/MovieWatch';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviePlayerScreen from '../screens/Movies/MoviePlayerScreen/MoviePlayerScreen';
import AnySvg from '../components/AnySvg';
import {COLORS} from '../shared/theme/pallete';
import AppText from '../components/AppText/AppText';
import {RADIUS} from '../shared/theme/radius';
import {mvs} from '../shared/theme/metrices';
import {Platform} from 'react-native';
import MovieTickets from '../screens/Movies/MovieTickets/MovieTickets';

export type WatchMovieParamsList = {
  WATCH_MOVIE: undefined;
  MOVIE_DETAIL: {id: number};
  MOVIE_CATEGORY: undefined;
  MOVIE_PLAYER: {videoId: string};
  MOVIE_TICKETS: undefined
};

export type MovieStackParamsList = {
  DASHBOARD_STACK: undefined;
  MOVIE_STACK: undefined;
  MEDIA_LIBRARY_STACK: undefined;
  MORE_STACK: undefined;
};

const Tab = createBottomTabNavigator<MovieStackParamsList>();
const Stack = createNativeStackNavigator<WatchMovieParamsList>();
const BottomTabItemsKeys = {
  DASHBOARD_STACK: 'Dashboard' as const,
  MOVIE_STACK: 'Watch' as const,
  MEDIA_LIBRARY_STACK: 'Media Library' as const,
  MORE_STACK: 'More' as const,
} as const;

type BottomTabItem =
  (typeof BottomTabItemsKeys)[keyof typeof BottomTabItemsKeys];

const BottomTabItems = [
  {
    label: 'Dashboard',
    icon: 'dashbaord',
    route: 'DASHBOARD_STACK',
    component: MovieWatch,
    unmountOnBlur: true,
  },
  {
    label: 'Watch',
    icon: 'play',
    route: 'MOVIE_STACK',
    component: MovieWatch,
  },
  {
    label: 'Media Library',
    icon: 'library',
    route: 'MEDIA_LIBRARY_STACK',
    component: MovieWatch,
  },
  {
    label: 'More',
    icon: 'menu',
    route: 'MORE_STACK',
    component: MovieWatch,
  },
];
export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'android' ? mvs(80) : mvs(100),
          backgroundColor: COLORS.Haiti,
          borderTopLeftRadius: RADIUS.RADIUS_27,
          borderTopRightRadius: RADIUS.RADIUS_27,
        },
        tabBarLabel(props) {
          return (
            <AppText
              FONT_10
              bold
              style={{marginBottom: Platform.OS === 'ios' ? 0 : 10}}
              color={props.focused ? COLORS.White : COLORS.WhiteSmoke1}>
              {BottomTabItemsKeys[props.children]}
            </AppText>
          );
        },

      }}>
      {BottomTabItems.map((_, index) => (
        <Tab.Screen
          key={index}
          name={_.route}
          component={MovieWatch}
          options={{
            tabBarIcon: ({focused}) => (
              <AnySvg disabled name={focused?`${_.icon}_active`:_.icon} size={20} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WATCH_MOVIE" component={BottomTab} />
      <Stack.Screen name="MOVIE_DETAIL" component={MovieDetails} />
      <Stack.Screen name="MOVIE_CATEGORY" component={MovieCategory} />
      <Stack.Screen name="MOVIE_PLAYER" component={MoviePlayerScreen} />
      <Stack.Screen name="MOVIE_TICKETS" component={MovieTickets} />
    </Stack.Navigator>
  );
};

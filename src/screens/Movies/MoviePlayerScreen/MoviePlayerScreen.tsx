// VideoPlayerScreen.tsx

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { WatchMovieParamsList } from '../../../navigation';
import { height, width } from '../../../shared/theme/metrices';
type MoviePlayerScreenProps = NativeStackScreenProps<
  WatchMovieParamsList,
  'MOVIE_PLAYER'
>;

const MoviePlayerScreen: React.FC<MoviePlayerScreenProps> = props => {
  const [playing, setPlaying] = useState(false);

  const {videoId} = props.route.params as {videoId: string};

  useEffect(() => {
    setTimeout(() => {
      setPlaying(p => !p);
    }, 1000);
  }, []);

  const onStateChange = useCallback(state => {
    console.log({state});
    if (state === 'ended') {
      setPlaying(false);
      props.navigation.goBack();
      // alert("video has finished playing!");
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      <YoutubePlayer
        webViewProps={{
          allowsInlineMediaPlayback: false,
          injectedJavaScript: `
              var element = document.getElementsByClassName('container')[0];
              element.style.position = 'unset';
              element.style.paddingBottom = 'unset';
              true;
            `,

          allowsFullscreenVideo: true,
          renderToHardwareTextureAndroid: true,
          startInLoadingState: true,
        }}
        height={height}
        width={width}
        // videoId={'CjpR9UbiF0E'}
        forceAndroidAutoplay={true}
        play={playing}
        onFullScreenChange={console.log}
        videoId={videoId}
        onChangeState={onStateChange}
      />
    </View>
  );
};

export default MoviePlayerScreen;

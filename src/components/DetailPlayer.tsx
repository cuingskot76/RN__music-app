/* eslint-disable react-native/no-inline-styles */
import {
  View,
  ScrollView,
  Animated,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Heading from './atom/Heading';
import {COLORS, SIZES} from '../constants/theme';
import {ChevronLeft, FavoriteIcon} from '../../public/icons';
import Icon from './atom/Icon';
import Figure from './atom/Figure';
import {recentlyPlayed} from '../constants';

import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';

const DetailPlayer = ({navigation, route}: any) => {
  const {title, performedBy, image} = route?.params;

  const {width, height} = Dimensions.get('window');
  const songSlider = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
      });
      await TrackPlayer.add(songs);
    } catch (error) {
      console.log(error);
    }
  };

  // const togglePlayBack = async playBackState => {
  //   const currentTrack = await TrackPlayer.getCurrentTrack();
  //   console.log(currentTrack, playBackState, State.Playing);
  //   if (currentTrack != null) {
  //     if (playBackState == State.Paused) {
  //       await TrackPlayer.play();
  //     } else {
  //       await TrackPlayer.pause();
  //     }
  //   }
  // };

  // const MusicPlayer = () => {
  //   const playBackState = usePlaybackState();
  //   const progress = useProgress();
  //   //   custom states
  //   const [songIndex, setsongIndex] = useState(0);
  //   const [repeatMode, setRepeatMode] = useState('off');
  //   const [trackTitle, setTrackTitle] = useState();
  //   const [trackArtist, setTrackArtist] = useState();
  //   const [trackArtwork, setTrackArtwork] = useState();
  //   // custom referecnces

  //   //   changing the track on complete
  //   useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
  //     if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
  //       const track = await TrackPlayer.getTrack(event.nextTrack);
  //       const {title, artwork, artist} = track;
  //       setTrackTitle(title);
  //       setTrackArtist(artist);
  //       setTrackArtwork(artwork);
  //     }
  //   });

  //   const repeatIcon = () => {
  //     if (repeatMode == 'off') {
  //       return 'repeat-off';
  //     }

  //     if (repeatMode == 'track') {
  //       return 'repeat-once';
  //     }

  //     if (repeatMode == 'repeat') {
  //       return 'repeat';
  //     }
  //   };

  // const changeRepeatMode = () => {
  //   if (repeatMode == 'off') {
  //     TrackPlayer.setRepeatMode(RepeatMode.Track);
  //     setRepeatMode('track');
  //   }

  //   if (repeatMode == 'track') {
  //     TrackPlayer.setRepeatMode(RepeatMode.Queue);
  //     setRepeatMode('repeat');
  //   }

  //   if (repeatMode == 'repeat') {
  //     TrackPlayer.setRepeatMode(RepeatMode.Off);
  //     setRepeatMode('off');
  //   }
  // };

  // const skipTo = async trackId => {
  //   await TrackPlayer.skip(trackId);
  // };

  // useEffect(() => {
  //   setupPlayer();

  //   scrollX.addListener(({value}) => {
  //     //   console.log(`ScrollX : ${value} | Device Width : ${width} `);

  //     const index = Math.round(value / width);
  //     skipTo(index);
  //     setsongIndex(index);

  //     //   console.log(`Index : ${index}`);
  //   });

  //   return () => {
  //     scrollX.removeAllListeners();
  //     TrackPlayer.destroy();
  //   };
  // }, []);

  // const skipToNext = () => {
  //   songSlider.current.scrollToOffset({
  //     offset: (songIndex + 1) * width,
  //   });
  // };

  // const skipToPrevious = () => {
  //   songSlider.current.scrollToOffset({
  //     offset: (songIndex - 1) * width,
  //   });
  // };

  const renderSongs = (item, index) => {
    return (
      <Animated.View>
        <View>
          {/* <Image
            //   source={item.artwork}
            source={trackArtwork}
            style={style.musicImage}
          /> */}

          <Text
            style={{
              color: 'salmon',
            }}>
            {item.title}
          </Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <ScrollView
      style={{backgroundColor: COLORS.darkBlur, flex: 1, padding: SIZES.base}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon handlePress={() => navigation.goBack()}>
          <ChevronLeft />
        </Icon>
        <Heading
          isMuted={false}
          style={{fontSize: SIZES.lg, fontWeight: '600'}}>
          Now Playing
        </Heading>
        <Icon style={{backgroundColor: COLORS.dark, height: 40, width: 40}}>
          <FavoriteIcon />
        </Icon>
      </View>

      <View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: SIZES.base,
          }}>
          <View
            style={{
              height: 350,
              width: 350,
              borderRadius: SIZES.lg,
              overflow: 'hidden',
            }}>
            <Figure alt="test-1">
              {recentlyPlayed.map(item => item.image)[0]}
            </Figure>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: SIZES.base,
          }}>
          <Heading
            isMuted={false}
            style={{fontSize: SIZES.lg, fontWeight: '600'}}>
            {title}
          </Heading>
          <Heading isMuted={true} style={{fontWeight: '600', marginTop: 5}}>
            {performedBy}
          </Heading>
        </View>
      </View>

      <View>
        {/* <Animated.FlatList
          ref={songSlider}
          data={recentlyPlayed}
          renderItem={renderSongs}
          // keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {x: scrollX}},
              },
            ],
            {useNativeDriver: false},
          )}
        /> */}

        {/* slider  */}
        <Slider
          style={{
            width: '100%',
            height: 40,
            marginTop: 25,
            flexDirection: 'row',
          }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          // onSlidingComplete={value => console.log(value)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: SIZES.base,
          }}>
          <Text
            style={{
              color: COLORS.darkWhite,
            }}>
            00:00
          </Text>
          <Text
            style={{
              color: COLORS.darkWhite,
            }}>
            00:00
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailPlayer;

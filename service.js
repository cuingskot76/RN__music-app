import TrackPlayer from 'react-native-track-player';

module.exports = async function () {
  try {
    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());
  } catch (error) {
    console.log(error);
  }
};

import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    paddingHorizontal: SIZES.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.xl,
    marginBottom: SIZES.lg,
  },
  trendingMusicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: SIZES.lg,
  },
  trendingMusicImageContainer: {
    height: 200,
    width: 250,
    borderRadius: 30,
    overflow: 'hidden',
    position: 'relative',
  },
  trendingMusicDescriptionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: SIZES.lg,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playIcon: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentlyPlayedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.xl,
    marginBottom: SIZES.lg,
  },
});

export default styles;

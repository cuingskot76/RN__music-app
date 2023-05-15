import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    paddingHorizontal: SIZES.lg,
    paddingTop: SIZES.lg,
    paddingBottom: SIZES.xxl,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerUserInfo: {
    marginLeft: SIZES.lg,
  },
  trendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.xl,
    marginBottom: SIZES.lg,
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
  popularArtistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.xl,
    marginBottom: SIZES.lg,
  },
  popularArtistImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  recentlyPlayedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.xl,
    marginBottom: SIZES.lg,
  },
  recentlyPlayedImageContainer: {
    height: 150,
    width: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  recentlyPlayedDescriptionContainer: {
    marginTop: SIZES.sm,
  },
  allMusicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.xl,
    marginBottom: SIZES.lg,
  },
  allMusicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  allMusicImageContainer: {
    height: 80,
    width: 80,
    borderRadius: 10,
    overflow: 'hidden',
  },
  allMusicDescriptionContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.sm,
    marginLeft: SIZES.sm,
  },
});

export default styles;

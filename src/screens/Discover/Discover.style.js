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
  searchContainer: {
    // backgroundColor: 'salmon',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.lg,
    height: 50,
    backgroundColor: COLORS.darkGray,
    borderRadius: SIZES.base,
    paddingHorizontal: SIZES.xs,
  },
  searchInput: {
    flex: 1,
    width: '100%',
    height: '100%',
    color: COLORS.white,
  },
});

export default styles;

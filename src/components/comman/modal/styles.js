import {StyleSheet} from 'react-native';
import colors from '../../../assists/theme/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },

  modalView: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 4,
    minHeight: 300,
  },
});

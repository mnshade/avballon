import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { sizes } from './sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizes.padding,
  },
  infoTexto: {
    textAlign: 'center',
    fontSize: sizes.texto,
    color: colors.red,
  }
});
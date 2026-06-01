import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fs20: {
    fontSize: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 10,
    width: '100%',
    minHeight: 75,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  settingsButtonText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default styles;

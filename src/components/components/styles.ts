import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalTouchable: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  modalInner: {
    margin: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#000',
  },
});

export default styles;

import mockAnalytics from './mock';
import Constants from 'expo-constants';

const isExpoGo = Constants.appOwnership === 'expo';

const analytics = isExpoGo
  ? mockAnalytics
  : require('@react-native-firebase/analytics').default;

export default analytics;

import { useIAP as useIAPMock } from './mock';
import Constants from 'expo-constants';

const isExpoGo = Constants.appOwnership === 'expo';

export const useIAP = isExpoGo ? useIAPMock : require('expo-iap').useIAP;
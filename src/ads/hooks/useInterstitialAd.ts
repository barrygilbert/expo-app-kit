import * as React from 'react';
import { useInterstitialAd as useRNInterstitialAd } from 'react-native-google-mobile-ads';
import { Platform } from 'react-native';
import type { InterstitialAdHook } from '../types';
import {
  ANDROID_TEST_INTERSTITIAL_AD_ID,
  IOS_TEST_INTERSTITIAL_AD_ID,
} from '../constants';

export const useInterstitialAd: InterstitialAdHook = ({
  adUnitAndroid = ANDROID_TEST_INTERSTITIAL_AD_ID,
  adUnitIOS = IOS_TEST_INTERSTITIAL_AD_ID,
  requestOptions = {
    requestNonPersonalizedAdsOnly: true,
  },
  debug = false,
}) => {
  const adUnit = Platform.OS === 'ios' ? adUnitIOS : adUnitAndroid;

  // Grab interstitial ad hook
  const { show, load, isLoaded, isClosed } = useRNInterstitialAd(
    adUnit,
    requestOptions
  );

  // Load ad on mount
  React.useEffect(() => {
    if (load) {
      if (debug) {
        console.log('Loading interstitial ad', adUnit);
      }
      load();
    }
  }, [load, debug, adUnit]);

  // Reload ad when closed
  React.useEffect(() => {
    if (isClosed && load) {
      if (debug) {
        console.log('Loading interstitial ad', adUnit);
      }
      load();
    }
  }, [isClosed, load, debug, adUnit]);

  // Show ad when requested
  const showAd = React.useCallback(() => {
    if (isLoaded) {
      if (debug) {
        console.log('Showing interstitial ad', adUnit);
      }
      show();
    }
  }, [isLoaded, show, debug, adUnit]);

  return {
    show: showAd,
    isLoaded,
  };
};

export default useInterstitialAd;

import * as React from 'react';
import type { InterstitialAdHook } from '../types';

const useMockInterstitialAd: InterstitialAdHook = ({ debug = false }) => {
  const show = React.useCallback(() => {
    if (debug) {
      console.log('Showing interstitial ad');
    }
  }, [debug]);

  return {
    show,
    isLoaded: true,
  };
};

export default useMockInterstitialAd;

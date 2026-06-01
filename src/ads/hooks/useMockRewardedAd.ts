import * as React from 'react';
import { RewardAdResult, type RewardedAdHook } from '../types';

const useMockRewardedAd: RewardedAdHook = ({
  rewardedCallback,
  debug = false,
}) => {
  const show = React.useCallback(() => {
    if (debug) {
      console.log('Showing rewarded ad');
    }
    if (rewardedCallback) {
      rewardedCallback(RewardAdResult.Rewarded);
    }
  }, [rewardedCallback, debug]);

  return {
    show,
    isLoaded: true,
  };
};

export default useMockRewardedAd;

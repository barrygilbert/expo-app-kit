import * as React from 'react';
import {
  RewardedAd,
  RewardedAdEventType,
} from 'react-native-google-mobile-ads';
import { Platform } from 'react-native';
import { RewardAdResult, type RewardedAdHook } from '../types';

export const useRewardedAd: RewardedAdHook = ({
  adUnitAndroid,
  adUnitIOS,
  rewardedCallback,
  requestOptions = {
    requestNonPersonalizedAdsOnly: true,
  },
  debug = false,
}) => {
  const [loaded, setLoaded] = React.useState(false);
  const [rewarded, setRewarded] = React.useState<RewardedAd | null>(null);

  const adUnit = Platform.OS === 'ios' ? adUnitIOS : adUnitAndroid;

  React.useEffect(() => {
    if (!rewarded && adUnit) {
      if (debug) {
        console.log('Creating rewarded ad', adUnit);
      }
      setRewarded(RewardedAd.createForAdRequest(adUnit, requestOptions));
    }
  }, [adUnit, rewarded, requestOptions, debug]);

  React.useEffect(() => {
    if (!rewarded) {
      return;
    }

    const unsubscribeLoad = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );

    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      () => {
        rewardedCallback(RewardAdResult.Rewarded);
        setLoaded(false);
        setRewarded(null);
      }
    );

    if (debug) {
      console.log('Loading rewarded ad', adUnit);
    }

    rewarded.load();

    return () => {
      unsubscribeLoad();
      unsubscribeEarned();
    };
  }, [rewarded, rewardedCallback, debug, adUnit]);

  // Show ad when requested
  const show = React.useCallback(async () => {
    if (rewarded && loaded) {
      if (debug) {
        console.log('Showing rewarded ad', adUnit);
      }
      rewarded.show();
      return;
    }
    if (debug) {
      console.log('No rewarded ad to show', adUnit);
    }
    rewardedCallback(RewardAdResult.NoAd);
  }, [rewarded, loaded, rewardedCallback, debug, adUnit]);

  return {
    show,
    isLoaded: loaded,
  };
};

export default useRewardedAd;

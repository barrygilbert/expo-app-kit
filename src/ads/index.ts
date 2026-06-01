import type React from 'react';
import type {
  BannerAdProps,
  InterstitialAdHook,
  RewardedAdHook,
} from './types';
import Constants from 'expo-constants';

const isExpoGo = Constants.appOwnership === 'expo';

export const BannerAd: React.FC<BannerAdProps> = isExpoGo
  ? require('./components/MockAd').default
  : require('./components/BannerAd').default;

export const useInterstitialAd: InterstitialAdHook = isExpoGo
  ? require('./hooks/useMockInterstitialAd').default
  : require('./hooks/useInterstitialAd').default;

export const useRewardedAd: RewardedAdHook = isExpoGo
  ? require('./hooks/useMockRewardedAd').default
  : require('./hooks/useRewardedAd').default;

export * from './types';

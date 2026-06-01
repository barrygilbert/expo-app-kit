import type { ViewStyle } from 'react-native';
import type { BannerAdSize } from './BannerAdSize';
import type { RequestOptions } from './RequestOptions';

export interface BannerAdProps {
  size: BannerAdSize;
  adUnitAndroid: string;
  adUnitIOS: string;
  requestOptions?: RequestOptions;
  onAdLoaded?: (dimensions: { width: number; height: number }) => void;
  onAdFailedToLoad?: (error: Error) => void;
  onAdOpened?: () => void;
  onAdClosed?: () => void;
  showLabel?: boolean;
  mockStyles?: ViewStyle;
}

export enum RewardAdResult {
  AdFailed = 1,
  Rewarded = 2,
  NoAd = 3,
}

export interface RewardedAdHookProps {
  adUnitAndroid?: string;
  adUnitIOS?: string;
  rewardedCallback: (result: RewardAdResult) => void;
  requestOptions?: RequestOptions;
  debug?: boolean;
}

export interface AdHookResult {
  show: () => void;
  isLoaded: boolean;
}

export type RewardedAdHook = (props: RewardedAdHookProps) => AdHookResult;

export interface InterstitialAdHookProps {
  adUnitAndroid?: string;
  adUnitIOS?: string;
  requestOptions?: RequestOptions;
  debug?: boolean;
}

export type InterstitialAdHook = (
  props: InterstitialAdHookProps
) => AdHookResult;

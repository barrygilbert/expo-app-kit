import * as React from 'react';
import type { BannerAdProps } from '../types';
import styles from '../styles';
import { Text, View } from 'react-native';
import { BannerAdSize } from '../types';

const mockAdStyleLookup = {
  [BannerAdSize.BANNER]: styles.bannerAd,
  [BannerAdSize.FULL_BANNER]: styles.fullBannerAd,
  [BannerAdSize.LARGE_BANNER]: styles.largeBannerAd,
  [BannerAdSize.LEADERBOARD]: styles.leaderboardBannerAd,
  [BannerAdSize.MEDIUM_RECTANGLE]: styles.mediumRectangleBannerAd,
  [BannerAdSize.ADAPTIVE_BANNER]: styles.adaptiveBannerAd,
  [BannerAdSize.ANCHORED_ADAPTIVE_BANNER]: styles.adaptiveBannerAd,
  [BannerAdSize.INLINE_ADAPTIVE_BANNER]: styles.inlineAdaptiveBannerAd,
  [BannerAdSize.WIDE_SKYSCRAPER]: styles.wideSkyscraperBannerAd,
};

const mockAdTextLookup = {
  [BannerAdSize.BANNER]: 'Banner Ad',
  [BannerAdSize.FULL_BANNER]: 'Full Banner Ad',
  [BannerAdSize.LARGE_BANNER]: 'Large Banner Ad',
  [BannerAdSize.LEADERBOARD]: 'Leaderboard Ad',
  [BannerAdSize.MEDIUM_RECTANGLE]: 'Medium Rectangle Ad',
  [BannerAdSize.ADAPTIVE_BANNER]: 'Adaptive Banner Ad',
  [BannerAdSize.ANCHORED_ADAPTIVE_BANNER]: 'Anchored Adaptive Banner Ad',
  [BannerAdSize.INLINE_ADAPTIVE_BANNER]: 'Inline Adaptive Banner Ad',
  [BannerAdSize.WIDE_SKYSCRAPER]: 'Wide Skyscraper Ad',
};

const adDimensionsLookup = {
  [BannerAdSize.BANNER]: { width: 320, height: 50 },
  [BannerAdSize.FULL_BANNER]: { width: 468, height: 60 },
  [BannerAdSize.LARGE_BANNER]: { width: 320, height: 100 },
  [BannerAdSize.LEADERBOARD]: { width: 728, height: 90 },
  [BannerAdSize.MEDIUM_RECTANGLE]: { width: 300, height: 250 },
  [BannerAdSize.ADAPTIVE_BANNER]: { width: 320, height: 50 },
  [BannerAdSize.ANCHORED_ADAPTIVE_BANNER]: { width: 320, height: 50 },
  [BannerAdSize.INLINE_ADAPTIVE_BANNER]: { width: 320, height: 50 },
  [BannerAdSize.WIDE_SKYSCRAPER]: { width: 160, height: 600 },
};

const MockAd: React.FC<BannerAdProps> = ({
  size = BannerAdSize.ANCHORED_ADAPTIVE_BANNER,
  onAdLoaded,
  mockStyles,
}) => {
  React.useEffect(() => {
    if (onAdLoaded) {
      onAdLoaded(adDimensionsLookup[size]);
    }
  }, [onAdLoaded, size]);

  return (
    <View style={[mockAdStyleLookup[size], mockStyles]}>
      <Text style={styles.centerText}>{mockAdTextLookup[size]}</Text>
    </View>
  );
};

export default MockAd;

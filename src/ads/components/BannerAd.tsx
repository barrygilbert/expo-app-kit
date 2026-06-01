import * as React from 'react';
import {
  BannerAd as GoogleBannerAd,
  BannerAdSize,
} from 'react-native-google-mobile-ads';
import { Platform, View, Text } from 'react-native';
import type { BannerAdProps } from '../types';
import styles from '../styles';

const defaultRequestOptions = {
  requestNonPersonalizedAdsOnly: true,
};

const BannerAd: React.FC<BannerAdProps> = ({
  size = BannerAdSize.ANCHORED_ADAPTIVE_BANNER,
  adUnitAndroid,
  adUnitIOS,
  requestOptions = defaultRequestOptions,
  showLabel = false,
  ...props
}) => {
  return (
    <View>
      {showLabel && <Text style={styles.centerText}>Advertisement</Text>}
      <GoogleBannerAd
        unitId={Platform.OS === 'ios' ? adUnitIOS : adUnitAndroid}
        size={size}
        requestOptions={requestOptions}
        {...props}
      />
    </View>
  );
};

export default BannerAd;

import { useCallback, type FC } from 'react';
import { Platform, Linking } from 'react-native';
import { SettingsButton } from './SettingsButton';
import { APP_STORE_LINK, PLAY_LINK } from './constants';

export const OurOtherApps: FC = () => {
  const goToApps = useCallback(() => {
    const link = Platform.OS === 'ios' ? APP_STORE_LINK : PLAY_LINK;
    Linking.openURL(link);
  }, []);

  return (
    <SettingsButton onPress={goToApps} label="Our Other Apps" />
  );
};

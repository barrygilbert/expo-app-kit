import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  ParamListBase,
  useNavigationContainerRef,
  type NavigationContainerProps,
} from '@react-navigation/native';
import { NavigationContainer } from '../components';
import { useColorScheme } from 'react-native';
import analytics from './analytics';

export const AnalyticsNavigationContainer: React.FC<
  NavigationContainerProps
> = (props) => {
  const theme = useColorScheme();
  const routeNameRef = React.useRef<string | undefined>(undefined);
  const navigationRef = useNavigationContainerRef<ParamListBase>();

  return (
    <NavigationContainer
      theme={theme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName =
          navigationRef?.current?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          try {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          } catch (e) {
            console.error(e);
          }
        }
        routeNameRef.current = currentRouteName;
      }}
    />
  );
};

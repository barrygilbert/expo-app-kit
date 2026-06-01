import { forwardRef } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainerRef, ParamListBase, NavigationContainer as RNNavigationContainer } from '@react-navigation/native';
import type { NavigationContainerProps } from './types';
import { useIsDark } from '../hooks';

export const NavigationContainer = forwardRef<NavigationContainerRef<ParamListBase>, NavigationContainerProps>((
  {
    children,
    ...props
  }: NavigationContainerProps,
  ref
) => {
  const isDark = useIsDark();
  const theme = isDark ? DarkTheme : DefaultTheme;
  return (
    <RNNavigationContainer<ParamListBase> theme={theme} {...props} ref={ref}>
      {children}
    </RNNavigationContainer>
  );
});

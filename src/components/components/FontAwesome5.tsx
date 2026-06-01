import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { FontAwesome5 as RNFontAwesome5 } from '@expo/vector-icons';
import type { FontAwesome5Props } from './types';

export const FontAwesome5: React.FC<FontAwesome5Props> = ({
  style,
  size,
  ...props
}) => {
  const theme = useTheme();
  return (
    <RNFontAwesome5
      color={theme.colors.text}
      size={size || 24}
      {...props}
    />
  );
};

import { type FC } from 'react';
import { Text as RNText, type TextProps } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const Text: FC<TextProps> = ({
  style,
  ...props
}) => {
  const theme = useTheme();

  return (
    <RNText
      style={[{ color: theme.colors.text }, style]}
      {...props}
    />
  );
};

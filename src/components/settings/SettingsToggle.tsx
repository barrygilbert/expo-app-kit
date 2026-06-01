import React from 'react';
import { Pressable, type PressableProps, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { Text } from '../components/Text';
import styles from './styles';
import { SettingsSwitch } from './SettingsSwitch';

type Props = {
  style?: StyleProp<ViewStyle>,
  onChange: () => void,
  value: boolean,
  label: string,
  labelRight?: string,
  iconSize?: number,
  labelStyle?: StyleProp<TextStyle>,
} & PressableProps;

export const SettingsToggle: React.FC<Props> = ({
  style,
  onChange,
  value,
  label,
  labelRight,
  iconSize,
  labelStyle,
  ...props
}) => (
  <Pressable
    style={[styles.settingsButton, styles.rowBetween, style]}
    onPress={onChange}
    {...props}
  >
    <Text style={[styles.settingsButtonText, labelStyle]}>
      {label}
    </Text>
    <SettingsSwitch
      value={value}
      onValueChange={onChange}
    />
    {labelRight && (
      <Text style={[styles.settingsButtonText, labelStyle]}>
        {labelRight}
      </Text>
    )}
  </Pressable>
);

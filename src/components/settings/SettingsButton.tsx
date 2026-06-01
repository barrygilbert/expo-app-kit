import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesome5 } from '../components/FontAwesome5';
import { Text } from '../components/Text';
import styles from './styles';
import type { SettingsButtonProps } from './types';

export const SettingsButton: React.FC<SettingsButtonProps> = ({
  style,
  onPress,
  label,
  icon,
  iconSize,
  labelStyle,
  ...props
}) => (
  <Pressable
    style={[styles.settingsButton, styles.rowBetween, style]}
    onPress={onPress}
    {...props}
  >
    <Text style={[styles.settingsButtonText, labelStyle]}>
      {label}
    </Text>
    {icon && (
      <FontAwesome5 name={icon} size={iconSize ?? 24} />
    )}
  </Pressable>
);

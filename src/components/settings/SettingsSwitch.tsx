import React from 'react';
import { Switch, type SwitchProps } from 'react-native';

export const SettingsSwitch: React.FC<SwitchProps> = ({
  value,
  ...props
}) => (
  <Switch
    {...props}
    trackColor={{ false: '#767577', true: '#30779c' }}
    thumbColor={value ? '#a1d4f0' : '#f4f3f4'}
    ios_backgroundColor="#3e3e3e"
    value={value}
  />
);

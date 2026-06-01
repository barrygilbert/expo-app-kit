import type { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

export type SettingsModalButtonProps = {
  style?: StyleProp<ViewStyle>,
  label: string;
  children: React.ReactNode | React.ReactNode[];
  onOpen?: () => void;
  labelStyle?: StyleProp<TextStyle>,
};

export type SettingsButtonProps = {
  style?: StyleProp<ViewStyle>,
  onPress: () => void,
  label: string,
  icon?: string,
  iconSize?: number,
  labelStyle?: StyleProp<TextStyle>,
} & PressableProps;

export type AboutModalProps = {
  appName: string;
  appVersion: string;
};

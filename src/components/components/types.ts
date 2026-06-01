import type { TextProps } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

export type NavigationContainerProps = React.ComponentProps<typeof NavigationContainer>;

export type BasicModalProps = {
  visible: boolean;
  onTapOut: () => void;
  children: React.ReactNode | React.ReactNode[];
};

export type FontAwesome5Props = {
  name: string;
  size?: number;
} & TextProps;

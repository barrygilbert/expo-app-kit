import { useColorScheme } from "react-native";

export const useIsDark = () => {
  const scheme = useColorScheme();
  return scheme === 'dark';
};

import { useWindowDimensions } from 'react-native';

export type Orientation = {
  isPortrait: boolean;
  isLandscape: boolean;
};

export const useOrientation = (): Orientation => {
  const { height, width } = useWindowDimensions();
  return {
    isPortrait: height >= width,
    isLandscape: width >= height,
  };
};

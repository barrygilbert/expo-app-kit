import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import { useOrientation } from '../hooks';
import type { BasicModalProps } from './types';

export const BasicModal: React.FC<BasicModalProps> = ({
  visible,
  onTapOut,
  children,
}) => {
  const theme = useTheme();
  const { isPortrait } = useOrientation();

  return (
    <Modal visible={visible} transparent={true} onRequestClose={onTapOut}>
      <TouchableOpacity style={styles.modalTouchable} onPressOut={onTapOut}>
        <View style={styles.modalOuter}>
          <View
            style={[
              styles.modalInner,
              {
                backgroundColor: theme.colors.card,
                width: isPortrait ? '80%' : '50%',
              },
            ]}
          >
            {children}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

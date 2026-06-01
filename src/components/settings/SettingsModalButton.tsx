import { useCallback, useState, type FC } from 'react';
import { Pressable } from 'react-native';
import styles from './styles';
import { BasicModal } from '../components/BasicModal';
import { Text } from '../components/Text';
import type { SettingsModalButtonProps } from './types';

export const SettingsModalButton: FC<SettingsModalButtonProps> = ({
  label,
  children,
  onOpen,
  style,
  labelStyle,
}) => {
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => {
    setVisible(true);
    if (onOpen) {
      onOpen();
    }
  }, [onOpen]);

  return (
    <>
      <Pressable style={[styles.settingsButton, style]} onPress={open}>
        <Text style={[styles.settingsButtonText, labelStyle]}>{label}</Text>
      </Pressable>
      <BasicModal
        visible={visible}
        onTapOut={() => setVisible(false)}
      >
        {children}
      </BasicModal>
    </>
  );
};

import React from 'react';
import { type AboutModalProps } from './types';
import { Text } from '../components';
import styles from './styles';
import { SettingsModalButton } from './SettingsModalButton';

export const AboutModal: React.FC<AboutModalProps> = ({
  appName,
  appVersion,
}) => (
  <SettingsModalButton
    label="About"
  >
    <Text style={styles.fs20}>
      {appName} was created by
    </Text>
    <Text />
    <Text style={[styles.fs20, styles.bold]}>Bear and Rye, LLC.</Text>
    <Text />
    <Text>Version: {appVersion}</Text>
  </SettingsModalButton>
);

import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  textColor?: string;
  onPress: () => void;
}

export function Button({ title, color, textColor, onPress, ...rest }: Props){
  return (
    <Container onPress={onPress} color={color} {...rest}>
      <Title textColor={textColor}>{title}</Title>
    </Container>
  );
}
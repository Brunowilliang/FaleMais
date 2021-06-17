import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  color?: string;
  textColor?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  background-color: ${({ color, theme }) => color ? color : theme.colors.secondary};
  align-items: center;
  padding: 18px;
  border-radius: 5px;
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ textColor, theme }) => textColor ? textColor : theme.colors.shape};
`;
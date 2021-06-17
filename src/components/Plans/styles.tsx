import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'


export const Container = styled.View`
  height: ${RFValue(200)}px;
  width: ${RFValue(230)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  justify-content: center;
  padding: 30px;
  margin-right: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.View`
  margin-top: 10px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(34)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Footer = styled.View`
`;

export const Span = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SpanPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;
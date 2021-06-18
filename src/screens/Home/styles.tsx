import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  background: ${({ theme }) => theme.colors.priamry};
`;

export const Logo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;


export const Content = styled.View`
  padding: 24px;
`;


export const SelectWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SelectContent = styled.View`
  width: 43%;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 16px 18px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.shape} ;
  border-radius: 5px;
`;

export const ContainerButton = styled.View`
  margin-top: 20px;
`;


export const ContentPlans = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle:{
    paddingHorizontal: 24,
  },
  showsHorizontalScrollIndicator: false,
  })`
`;

export const Error = styled.Text`
  margin-top: 30px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;




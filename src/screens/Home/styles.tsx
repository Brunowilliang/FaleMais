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
  margin-bottom: 24px;

`;

export const SelectContent = styled.View`
  width: 43%;
`;

export const ContentPlans = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle:{
    paddingHorizontal: 24,
  },
  showsHorizontalScrollIndicator: false,
  })`
`;
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Svg } from 'react-native-svg';

import { Container, Header, Footer, Content, Price, Span, SpanPrice } from './styles';
import PlanLogo from '../../assets/plan30.svg';

// const icons = {
//   30: 'arrow-up-circle',
//   60: 'arrow-down-circle',
//   120: 'arrow-down-circle',
// }

// interface Props {
//   type: 30 | 60 | 120;
//   price: string;
//   spanPrice: string;
// }
// { type, price, spanPrice }: Props

export function Plans(){
  return (
    <Container>
      <Header >
        <PlanLogo width={RFValue(184)} height={RFValue(45)} />
      </Header>
      <Content>
        <Price>R$ 30,00</Price>
      </Content>
      <Footer>
        <Span>Sem Fale Mais</Span>
        <SpanPrice>R$ 38,00</SpanPrice>
      </Footer>
    </Container>
  );
}


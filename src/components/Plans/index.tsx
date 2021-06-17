import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Svg } from 'react-native-svg';

import { Container, Header, Footer, Content, Price, Span, SpanPrice } from './styles';
import Plan30 from '../../assets/plan30.svg';
import Plan60 from '../../assets/plan60.svg';
import Plan120 from '../../assets/plan120.svg';
import { useTheme } from 'styled-components';

const icon = {
  '30': <Plan30 width={RFValue(184)} height={RFValue(45)}/>,
  '60': <Plan60 width={RFValue(184)} height={RFValue(45)}/>,
  '120': <Plan120 width={RFValue(184)} height={RFValue(45)}/>,
}

interface Props {
  type: '30' | '60' | '120';
  price: string;
  spanPrice: string;
}


export function Plans({ type, price, spanPrice }: Props){
  const theme = useTheme();
  return (
    <Container>
      <Header >
        <Svg >
          {icon[type]}
        </Svg>

      </Header>
      <Content>
        <Price>R$ {price}</Price>
      </Content>
      <Footer>
        <Span>Sem Fale Mais</Span>
        <SpanPrice>R$ {spanPrice}</SpanPrice>
      </Footer>
    </Container>
  );
}


import React, { useState } from 'react';
import { StatusBar, Modal } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, Header, Content, SelectWrapper, SelectContent, ContentPlans } from './styles';
import Logo from  '../../assets/logo.svg';
import Arrow from  '../../assets/arrow.svg';
import { AreaInput } from '../../components/AreaInput';
import { Button } from '../../components/Button';
import { Plans } from '../../components/Plans';
import { AreaSelect } from '../AreaSelect';


export function Home(){
  const theme = useTheme();
  const [openPlan, setOpenPlan] = useState(false);
  
  const [areaModalOpen1, setAreaModalOpen1] = useState(false);
  const [areaModalOpen2, setAreaModalOpen2] = useState(false);

  const [price30, setPrice30] = useState('00,00')
  const [price60, setPrice60] = useState('00,00')
  const [price120, setPrice120] = useState('00,00')

  const [area1, setArea1] = useState({ name: 'Origem' });
  const [area2, setArea2] = useState({ name: 'Destino' });

  function handleOpenAreaModal1() {
    setAreaModalOpen1(true);
  }

  function handleCloseAreaModal1() {
    setAreaModalOpen1(false);
  }

  function handleOpenAreaModal2() {
    setAreaModalOpen2(true);
  }

  function handleCloseAreaModal2() {
    setAreaModalOpen2(false);
  }

  function handleReset(){
    setArea1({ name: 'Origem' })
    setArea2({ name: 'Destino' })
    setPrice30('00,00')
    setPrice60('00,00')
    setPrice120('00,00')
    setOpenPlan(false)
  }

  function handlePlans(){
    if (area1.name === '011' && area2.name === '016')
    setOpenPlan(true)
    setPrice30('50,00')
    setPrice60('100,00')
    setPrice120('200,00')
    
    if (area1.name === '018' && area2.name === '011')
    setOpenPlan(true)
    setPrice30('30,00')
    setPrice60('80,00')
    setPrice120('100,00')
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <Logo width={RFValue(130)} height={RFValue(25)}/>
      </Header>

      <Content>
        <SelectWrapper>
          <SelectContent>
            <AreaInput title={'DDD ' + area1.name} onPress={handleOpenAreaModal1} />
          </SelectContent>

          <Arrow width={RFValue(18)} height={RFValue(23)}/>

          <SelectContent>
            <AreaInput title={'DDD ' + area2.name} onPress={handleOpenAreaModal2} />
          </SelectContent>
        </SelectWrapper>
        <Button onPress={handlePlans} title="Pesquisar Planos"/>
        <Button color={theme.colors.background} textColor={theme.colors.secondary} onPress={handleReset} title="Resetar Pesquisa"/>

      </Content>
      { openPlan &&
        <ContentPlans>
          <Plans type="30" price={price30} spanPrice="58,90" />
          <Plans type="60" price={price60} spanPrice="58,90" />
          <Plans type="120" price={price120} spanPrice="58,90" />
        </ContentPlans>
      }

      <Modal visible= {areaModalOpen1} animationType="slide" >
        <AreaSelect area={area1} setArea={setArea1} closeAreaSelect={handleCloseAreaModal1} />
      </Modal>

      <Modal visible={areaModalOpen2} animationType="slide" >
        <AreaSelect area={area2} setArea={setArea2} closeAreaSelect={handleCloseAreaModal2} />
      </Modal>

    </Container>
  );
}
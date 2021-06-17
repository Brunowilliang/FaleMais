import React, { useState } from 'react';
import { StatusBar, Modal, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, Header, Content, SelectWrapper, SelectContent, Input, ContainerButton, ContentPlans } from './styles';

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

  const [price30, setPrice30] = useState('')
  const [price60, setPrice60] = useState('')
  const [price120, setPrice120] = useState('')

  const [semPlano30, setSemPlano30] = useState('')
  const [semPlano60, setSemPlano60] = useState('')
  const [semPlano120, setSemPlano120] = useState('')

  const [origem, setOrigem] = useState({ name: 'Origem' });
  const [destino, setDestino] = useState({ name: 'Destino' });
  const [tempo, setTempo] = useState('');

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
    // console.log(tempo, origem.name, destino.name)
    
    // setOrigem({ name: 'Origem' })
    // setDestino({ name: 'Destino' })
    // setPrice30('00,00')
    // setPrice60('00,00')
    // setPrice120('00,00')
    // setOpenPlan(false)
  }

  function handlePlans(){
    // Errors
    if (origem.name === 'Origem' && destino.name === 'Destino' ) {
      Alert.alert('Selecione o DDD de origem, DDD de Destino e o tempo')
    }
    else if (origem.name === 'Origem' && destino.name !== 'Destino') {
      Alert.alert('Selecione o DDD de Origem')
    }
    else if (origem.name !== 'Origem' && destino.name === 'Destino') {
      Alert.alert('Selecione o DDD de Destino')
    }
    //


    if (origem.name === '011' && destino.name === '016') {
    }

    if (origem.name === '018' && destino.name === '011') {
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <Header>
          <Logo width={RFValue(130)} height={RFValue(25)}/>
        </Header>

        <Content>
          <SelectWrapper>
            <SelectContent>
              <AreaInput title={'DDD ' + origem.name} onPress={handleOpenAreaModal1} />
            </SelectContent>

            <Arrow width={RFValue(18)} height={RFValue(23)}/>

            <SelectContent>
              <AreaInput title={'DDD ' + destino.name} onPress={handleOpenAreaModal2} />
            </SelectContent>
          </SelectWrapper>

          <Input
            onChangeText={text => setTempo(text)}
            value={tempo}
            placeholderTextColor={theme.colors.text}
            placeholder="Quantos minutos deseja falar?"
            keyboardType="numeric"
          />

          <ContainerButton>
            <Button 
              onPress={handlePlans} 
              title="Pesquisar Planos"
            />
            <Button 
              color={theme.colors.background} 
              textColor={theme.colors.secondary} 
              onPress={handleReset} 
              title="Resetar Pesquisa"
            />
          </ContainerButton>
        
        </Content>
        { openPlan &&
          <ContentPlans>
            <Plans type="30" price={price30} spanPrice={semPlano30} />
            <Plans type="60" price={price60} spanPrice={semPlano60} />
            <Plans type="120" price={price120} spanPrice={semPlano120} />
          </ContentPlans>
        }

        <Modal visible= {areaModalOpen1} animationType="slide" >
          <AreaSelect area={origem} setArea={setOrigem} closeAreaSelect={handleCloseAreaModal1} />
        </Modal>

        <Modal visible={areaModalOpen2} animationType="slide" >
          <AreaSelect area={destino} setArea={setDestino} closeAreaSelect={handleCloseAreaModal2} />
        </Modal>

      </Container>
    </TouchableWithoutFeedback>
  );
}
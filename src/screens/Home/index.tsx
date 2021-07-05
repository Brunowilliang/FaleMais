import React, { useState } from 'react';
import { StatusBar, Modal, Alert, Keyboard } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { tarifasOrigemDestino, formatNumber } from '../../utils/areas';

import { Container, Header, Content, SelectWrapper, SelectContent, Input, ContainerButton, ContentPlans, Error } from './styles';

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
  const [error, setError] = useState('');

  const [price30, setPrice30] = useState('')
  const [price60, setPrice60] = useState('')
  const [price120, setPrice120] = useState('')

  const [semPlano30, setSemPlano30] = useState('')
  const [semPlano60, setSemPlano60] = useState('')
  const [semPlano120, setSemPlano120] = useState('')

  const [origin, setOrigin] = useState({ name: 'Origem' });
  const [destiny, setDestiny] = useState({ name: 'Destino' });
  const [time, setTime] = useState('');

  

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


  function getPrices(decrecimo: number) {
    let comFaleMais = 0;
    let semFaleMais = 0;
    let tempoComFaleMais = Number(time) - decrecimo;

    if (tempoComFaleMais < 0) {
      tempoComFaleMais = 0;
    }
    // @ts-ignore
    const tarifa = (tarifasOrigemDestino[origin.name][destiny.name])
    if (!tarifa){
      setOpenPlan(false);
      setError(
        `Ops,\n Não existem planos para sua localização, refaça sua pesquisa usando outro DDD de origem`
      )
    }  

    comFaleMais = tarifa * tempoComFaleMais;
    semFaleMais = tarifa * Number(time);

    comFaleMais *= 1.1; // acrescimo de 10% da tarifa excedente
    return { comFaleMais, semFaleMais };

  }

  function handleSearchPlan() {
    if (origin.name === 'Origem' || destiny.name === 'Destino' || time === ''){
      Alert.alert('Preencha todos os campos');
      // setError(
      //   `Preencha todos os campos!`
      // )
      return;
    }


    setOpenPlan(true);
    
    const Plan30 = getPrices(30);
    const Plan60 = getPrices(60);
    const Plan120 = getPrices(120);

    setPrice30(Plan30.comFaleMais.toFixed(2));
    setPrice60(Plan60.comFaleMais.toFixed(2));
    setPrice120(Plan120.comFaleMais.toFixed(2));

    setSemPlano30(Plan30.semFaleMais.toFixed(2));
    setSemPlano60(Plan60.semFaleMais.toFixed(2));
    setSemPlano120(Plan120.semFaleMais.toFixed(2));
    Keyboard.dismiss();

  }

  function handleReset() {
    setOpenPlan(false);
    setOrigin({ name: 'Origem' });
    setDestiny({ name: 'Destino' });
    setTime('');
    setError('');
    Keyboard.dismiss();
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
            <AreaInput title={'DDD ' + origin.name} onPress={handleOpenAreaModal1} />
          </SelectContent>

          <Arrow width={RFValue(18)} height={RFValue(23)}/>

          <SelectContent>
            <AreaInput title={'DDD ' + destiny.name} onPress={handleOpenAreaModal2} />
          </SelectContent>
        </SelectWrapper>

        <Input
          onChangeText={text => setTime(text)}
          value={time}
          placeholderTextColor={theme.colors.text}
          placeholder="Quantos minutos deseja falar?"
          keyboardType="numeric"
        />

        <ContainerButton>
          <Button 
            onPress={handleSearchPlan} 
            title="Pesquisar Planos"
          />
          <Button 
            color={theme.colors.background} 
            textColor={theme.colors.secondary} 
            onPress={handleReset} 
            title="Refazer Pesquisa"
          />
        </ContainerButton>
      { !!error && <Error>{error}</Error>}
      </Content>
      
      { openPlan &&
        <ContentPlans keyboardShouldPersistTaps='never'>
          <Plans type="30" price={formatNumber(Number(price30))} spanPrice={semPlano30} />
          <Plans type="60" price={formatNumber(Number(price60))} spanPrice={semPlano60} />
          <Plans type="120" price={formatNumber(Number(price120))} spanPrice={semPlano120} />
        </ContentPlans>
      } 

      <Modal visible= {areaModalOpen1} animationType="slide" >
        <AreaSelect area={origin} setArea={setOrigin} closeAreaSelect={handleCloseAreaModal1} />
      </Modal>

      <Modal visible={areaModalOpen2} animationType="slide" >
        <AreaSelect area={destiny} setArea={setDestiny} closeAreaSelect={handleCloseAreaModal2} />
      </Modal>

    </Container>
  );
}
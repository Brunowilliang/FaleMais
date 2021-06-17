import React, { useState } from 'react';
import { StatusBar, Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, Header, Content, SelectWrapper, SelectContent, ContentPlans } from './styles';
import Logo from  '../../assets/logo.svg';
import Arrow from  '../../assets/arrow.svg';
import { AreaInput } from '../../components/AreaInput';
import { Button } from '../../components/Button';
import { Plans } from '../../components/Plans';
import { AreaSelect } from '../AreaSelect';


export function Home(){
  const [areaModalOpen, setAreaModalOpen] = useState(false);
  // const [areaModalOpen2, setAreaModalOpen2] = useState(false);

  const [area, setArea] = useState({
    key: 'area',
    name: 'DDD Destino',
  });



  function handleOpenAreaModal() {
    setAreaModalOpen(true);
  }

  function handleCloseAreaModal() {
    setAreaModalOpen(false);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Logo width={RFValue(130)} height={RFValue(25)}/>
      </Header>

      <Content>
        <SelectWrapper>
          <SelectContent>
            <AreaInput
              title={`DDD ${area.name}`}
              onPress={handleOpenAreaModal}
            />
          </SelectContent>

          <Arrow width={RFValue(18)} height={RFValue(23)}/>

          <SelectContent>
            <AreaInput
              title={`DDD ${area.name}`}
              onPress={handleOpenAreaModal}
            />
          </SelectContent>
        </SelectWrapper>
        <Button onPress={() => {}} title="Pesquisar Planos"/>

      </Content>
        <ContentPlans>
          <Plans />
          <Plans />
          <Plans />
        </ContentPlans>

      <Modal
        visible={areaModalOpen}
        animationType="slide"
      >
        <AreaSelect 
          area={area}
          setArea={setArea}
          closeAreaSelect={handleCloseAreaModal}
        />
      </Modal>

    </Container>
  );
}
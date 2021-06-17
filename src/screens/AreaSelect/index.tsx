import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { areas } from '../../utils/areas';

import { Container, Header, Title, Area, Icon, Name, Separator, Footer } from './styles';

interface Area {
  key: string;
  name: string;
}

interface Props {
  area: Area;
  setArea: (area: Area) => void;
  closeAreaSelect: () => void;
}


export function AreaSelect({ area, setArea, closeAreaSelect }: Props){

  function handleAreaSelect(area: Area) {
    setArea(area);
  }

  return (
    <Container>
      <Header>
        <Title>Selecione o DDD</Title>
      </Header>

      <FlatList
        data={areas}
        style={{ flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Area
            onPress={() => handleAreaSelect(item)}
            isActive={area.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Area>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />


      <Footer>
        <Button title="Selecionar" onPress={closeAreaSelect}/>
      </Footer>
    </Container>
  );
}
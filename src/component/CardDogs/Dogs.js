import React from 'react';
import { View, Text } from 'react-native';
import style from './DogsCss.js';
import { DataTable } from 'react-native-paper';
import { Info } from 'phosphor-react-native';

export function CardDogs() {
  return (
    <View style={style.container}>
      <DataTable style={style.container}>
        <DataTable.Header style={style.tableHeader}>
          <DataTable.Title>
            <Text style={{ fontWeight: '700', color: '#141415' }}>Porte</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={{ fontWeight: '700', color: '#141415' }}>Idade/Peso</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={{ fontWeight: '700', color: '#141415' }}>Quantidade</Text>
          </DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={{ borderColor: '#48ff9a' }}>
          <DataTable.Cell>
            <Text style={style.txtTable}>Miniatura</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>1 kg a 4 kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>55g a 95g</Text>
          </DataTable.Cell>
        </DataTable.Row >

        <DataTable.Row style={{ borderColor: '#48ff9a' }}>
          <DataTable.Cell>
            <Text style={style.txtTable}>Pequeno</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>4 kg a 8 kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>95g a 155g</Text>
          </DataTable.Cell>
        </DataTable.Row >
        <DataTable.Row style={{ borderColor: '#48ff9a' }}>
          <DataTable.Cell>
            <Text style={style.txtTable}>Médio</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>8 kg a 20 kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>160g a 320g</Text>
          </DataTable.Cell>
        </DataTable.Row >
        <DataTable.Row style={{ borderColor: '#48ff9a' }}>
          <DataTable.Cell>
            <Text style={style.txtTable}>Grande</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>20 kg a 40 kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>320g a 530g</Text>
          </DataTable.Cell>
        </DataTable.Row>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
          <Info size={20} color='#48ff9a' weight='duotone' />
          <Text style={{ color: '#48ff9a', fontWeight: 'bold', marginLeft: 5 }}>Quantidade diária recomendada</Text>
        </View>
      </DataTable>
    </View>
  );
}

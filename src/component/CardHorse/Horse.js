import React from 'react';
import { View, Text } from 'react-native';
import style from './HorseCss.js';
import { DataTable } from 'react-native-paper';
import { Info } from 'phosphor-react-native';

export function CardHorse() {
  return (
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
            <Text style={style.txtTable}>Pequeno</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>Até 350kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>2Kg a 4kg</Text>
          </DataTable.Cell>
        </DataTable.Row >

        <DataTable.Row style={{ borderColor: '#48ff9a' }}>
          <DataTable.Cell>
            <Text style={style.txtTable}>Médio</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>350 kg a 550 kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>4kg a 6g</Text>
          </DataTable.Cell>
        </DataTable.Row >
        <DataTable.Row style={{ borderColor: '#48ff9a' }}>
          <DataTable.Cell>
            <Text style={style.txtTable}>Grande</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>Acima 550kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>6Kg a 10Kg</Text>
          </DataTable.Cell>
        </DataTable.Row >
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
          <Info size={20} color='#48ff9a' weight='duotone' />
          <Text style={{ color: '#48ff9a', fontWeight: 'bold', marginLeft: 5 }}>Quantidade diária recomendada</Text>
        </View>
      </DataTable>
  );
}

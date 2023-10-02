import React from 'react';
import { View, Text } from 'react-native';
import style from './CatsCss.js';
import { DataTable } from 'react-native-paper';
import { Info } from 'phosphor-react-native';

export function CardCats() {
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
            <Text style={style.txtTable}>Filhote</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>2 a 12 meses</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>40g a 80g</Text>
          </DataTable.Cell>
        </DataTable.Row >

        <DataTable.Row style={{ borderColor: '#48ff9a' }}>
          <DataTable.Cell>
            <Text style={style.txtTable}>Adulto (P)</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>3 kg a 4 kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>40g a 55g</Text>
          </DataTable.Cell>
        </DataTable.Row >
        <DataTable.Row style={{ borderColor: '#48ff9a' }}>
          <DataTable.Cell>
            <Text style={style.txtTable}>Adulto (G)</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>5 kg a 6 kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>55g a 75g</Text>
          </DataTable.Cell>
        </DataTable.Row >
        <DataTable.Row style={{ borderColor: '#48ff9a' }}>
          <DataTable.Cell>
            <Text style={style.txtTable}>Idoso (P)</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>3 kg a 4 kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>40g a 55g</Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={{ borderColor: '#48ff9a' }}>
          <DataTable.Cell>
            <Text style={style.txtTable}>Idoso(G)</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>5 kg a 6 kg</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={style.txtTable}>55g a 75g </Text>
          </DataTable.Cell>
        </DataTable.Row >
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          <Info size={20} color='#48ff9a' weight='duotone' />
          <Text style={{ color: '#48ff9a', fontWeight: 'bold', marginLeft: 5 }}>Quantidade diária recomendada</Text>
        </View>
      </DataTable>
    </View>
  );
}

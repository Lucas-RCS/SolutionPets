import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import style from './CalendaryCss.js';
import { Div, DivCommon } from '../../elements/common.js';
import { CalendarX, PlusCircle } from 'phosphor-react-native';

export function Calendary() {

  const today = new Date();

  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  // console.log(date);

  function handleOnPress() {
    setOpen(!open);
  }
  function handleChange(propDate) {
    setDate(propDate);
  }

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={handleOnPress}>
        <DivCommon>
          <Div style={style.openBtn}>
            <PlusCircle size={32} weight='duotone' color='#141415' />
            <Text style={style.textBtn}>
              Adicionar Data
            </Text>
          </Div>
        </DivCommon>
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent={true}
        visible={open}
      >
        <View style={style.content}>
          <View style={style.modalView}>
            <DatePicker
              mode='calendar'
              selected={date}
              minimumDate={startDate}
              onDateChange={handleChange}
              options={{
                backgroundColor: '#141415',
                textColor: '#f8f9fc', 
                textHeaderColor: '#f8f9fc',
                selectorColor: '#48ff9a', 
                mainColor: '#48ff9a',
                textDefaultColor: '#f8f9fc',
              }}
            />
            <TouchableOpacity onPress={handleOnPress}>
            <Div style={style.closeBtn}>
            <CalendarX size={32} weight='duotone' color='#141415' />
            <Text style={style.textBtn}>
              Fechar
            </Text>
          </Div>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

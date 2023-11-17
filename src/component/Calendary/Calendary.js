import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  Calendar,
  CalendarPlus,
  FloppyDisk,
  Trash,
} from "phosphor-react-native";
import style from "./CalendaryCss";
import moment from "moment-timezone";
import { v4 as idDate } from "uuid";
import activationHook from "../../../api/hooks/activation";

export function Calendary() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    activationHook
      .get()
      .then((data) => {
        setSelectedDates(
          data.map((data) => {
            return { id: idDate(), date: data };
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function saveDates() {
    activationHook
      .set(selectedDates.map((item) => item.date))
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const formatDateTime = (date) => {
    const isoFormattedDate = moment(date, "DD/MM/YYYY HH:mm:ss", true);
    if (isoFormattedDate.isValid()) {
      return isoFormattedDate.format("DD/MM/YYYY HH:mm:ss");
    } else {
      console.error("Data e hora no formato inválido:", date);
      return "Data e hora inválidas";
    }
  };

  const handleConfirm = (date) => {
    const id = idDate();

    setSelectedDates([...selectedDates, { id, date: date }]);

    hideDatePicker();
  };

  const handleDeleteDate = (id) => {
    const updatedDates = selectedDates.filter((date) => date.id !== id);
    setSelectedDates(updatedDates);
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={showDatePicker} style={style.buttonContainer}>
        <CalendarPlus size={32} weight="duotone" color="#141415" />
        <Text style={style.buttonText}>Selecione a Data</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <FlatList
        data={selectedDates}
        style={style.dateList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={style.dateCard}>
            <Calendar size={32} weight="duotone" color="#f8f9fc" />
            <Text style={style.txtDateTime}>{`Dia: ${moment(item.date)
              .format("DD/MM/YYYY HH:mm:ss")
              .toString()}`}</Text>
            <TouchableOpacity
              onPress={() => handleDeleteDate(item.id)}
              style={style.deleteButton}
            >
              <Text>
                <Trash size={30} weight="duotone" color="#d61818" />
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={style.saveBtn} onPress={saveDates}>
        <FloppyDisk size={38} weight="duotone" color="#141415" />
      </TouchableOpacity>
    </View>
  );
}

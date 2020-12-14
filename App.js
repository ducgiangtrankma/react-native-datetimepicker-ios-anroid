import React, {useState} from 'react';
import {Button, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import moment from 'moment';
import PickTime from './src/component';
export default function App(props) {
  const [scaleAnimationModal, setScaleAnimationModal] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [mode, setMode] = useState(true);
  const closeModal = () => {
    setMode(true);
    setScaleAnimationModal(false);
  };
  const openModal = () => {
    setDate(new Date());
    setTime(new Date());
    setScaleAnimationModal(true);
  };
  const onCancel = () => {
    setTime(null);
    setDate(null);
    closeModal();
  };
  const onDateChange = (value) => {
    mode ? setDate(value) : setTime(value);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Button
          title="Show Modal"
          onPress={() => {
            openModal();
          }}
        />
        <Text>
          {date === null ? 'Chưa chọn' : moment(date).format('DD/MM/YYYY')}
        </Text>
        <Text>
          {time === null ? 'Chưa chọn' : moment(time).format('h:mm:ss a')}
        </Text>
      </View>
      <PickTime
        scaleAnimationModal={scaleAnimationModal}
        mode={mode}
        date={date}
        time={time}
        closeModal={closeModal}
        onCancel={onCancel}
        onDateChange={onDateChange}
        onPickDate={() => {
          setMode(true);
        }}
        onPickTime={() => {
          setMode(false);
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import {View, Button} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const Datepicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={data => {
          setOpen(false);
          setDate(data);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default Datepicker;

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ListRegisteredDevicesView} from 'react-native-cloud-ca';

const ListRegisteredDevices = () => {
  const navigation = useNavigation();
  return (
    <ListRegisteredDevicesView
      goBack={() => navigation?.goBack()}
      onDone={event => console.log('ListRegisteredDevicesView', event)}
    />
  );
};

export default ListRegisteredDevices;

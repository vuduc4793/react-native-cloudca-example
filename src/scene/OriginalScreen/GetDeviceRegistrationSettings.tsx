import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {GetDeviceRegistrationSettingsView} from 'react-native-cloud-ca';

const GetDeviceRegistrationSettings = () => {
  const navigation = useNavigation();
  return (
    <GetDeviceRegistrationSettingsView
      goBack={() => navigation?.goBack()}
      onDone={event => console.log('GetDeviceRegistrationSettingsView', event)}
    />
  );
};

export default GetDeviceRegistrationSettings;

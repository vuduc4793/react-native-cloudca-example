import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {GetPendingAuthorisationRequestView} from 'react-native-cloud-ca';

const GetPendingAuthorisationRequest = () => {
  const navigation = useNavigation();
  return (
    <GetPendingAuthorisationRequestView
      authorisationPendingOptions={{
        biometricApiType: 'AUTO',
        localizedReason: 'Unlock to add device',
      }}
      goBack={() => navigation?.goBack()}
      onDone={event => console.log('GetPendingAuthorisationRequestView', event)}
    />
  );
};

export default GetPendingAuthorisationRequest;

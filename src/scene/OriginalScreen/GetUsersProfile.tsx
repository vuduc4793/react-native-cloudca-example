import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {GetUsersProfileView} from 'react-native-cloud-ca';

const GetUsersProfile = () => {
  const navigation = useNavigation();
  return (
    <GetUsersProfileView
      goBack={() => navigation?.goBack()}
      onDone={event => console.log('GetUsersProfileView', event)}
    />
  );
};

export default GetUsersProfile;

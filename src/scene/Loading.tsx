import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loading = () => {
  return (
    <View
      style={{
        width: ' 100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={'large'} color="white" />
    </View>
  );
};

export default Loading;

import React from 'react';
import {ActivityIndicator, View, Dimensions} from 'react-native';

const Loading = () => {
  const {width} = Dimensions.get('screen');
  return (
    <View
      style={{
        width: width,
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

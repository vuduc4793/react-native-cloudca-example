import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  AuthenClientScreen,
  AuthenUserScreen,
  GenerateQRCodeScreen,
  ListRegisteredDevicesScreen,
  MenuScreen,
  NotificationScreen,
  PendingRequestsScreen,
  VerifyOTPScreen,
  VerifyQRCodeScreen,
} from './src';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Authen Client" component={AuthenClientScreen} />
        <Stack.Screen name="Authen User" component={AuthenUserScreen} />
        <Stack.Screen
          name="Generate QR Code"
          component={GenerateQRCodeScreen}
        />
        <Stack.Screen
          name="List Registered Devices"
          component={ListRegisteredDevicesScreen}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen
          name="Pending Requests"
          component={PendingRequestsScreen}
        />
        <Stack.Screen name="Verify OTP" component={VerifyOTPScreen} />
        <Stack.Screen name="Verify QR Code" component={VerifyQRCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

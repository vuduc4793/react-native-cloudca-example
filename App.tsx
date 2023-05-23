import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
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
  CloudCAUI,
  ListRegisteredDevices,
  GetDeviceRegistrationSettings,
  GetPendingAuthorisationRequest,
  GetUsersProfile,
  InitDataScreen,
} from './src';
import {CloudCAProvider} from 'react-native-cloud-ca';

const Stack = createNativeStackNavigator();
export default function App() {
  const [themeColor, setThemeColor] = React.useState<string>('#EE0033');
  const [headerTheme, setHeaderTheme] = React.useState({});

  const onChangeTheme = (color: string, header?: any) => {
    setThemeColor(color);
    setHeaderTheme(header);
  };

  return (
    <NavigationContainer>
      <CloudCAProvider themeColor={themeColor} headerTheme={headerTheme}>
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
          <Stack.Screen name="Cloud CA UI" component={CloudCAUI} />
          <Stack.Screen
            name="ListDevices"
            component={ListRegisteredDevices}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DeviceRegistrationView"
            component={GetDeviceRegistrationSettings}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AuthorView"
            component={GetPendingAuthorisationRequest}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserInfoView"
            component={GetUsersProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Init Data" component={InitDataScreen} />
        </Stack.Navigator>
      </CloudCAProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  uiContainerButton: {
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 100,
    left: 10,
    zIndex: 100,
    opacity: 0.5,
  },
});

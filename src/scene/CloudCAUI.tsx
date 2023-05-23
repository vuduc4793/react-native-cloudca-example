import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  CloudCAProviderContext,
  DeleteDeviceView,
  DeviceRegistrationView,
  PrimaryButton,
} from 'react-native-cloud-ca';

const CloudCAUI = () => {
  const navigation = useNavigation();
  const cloudCAProviderContext = React.useContext(CloudCAProviderContext);
  const {themeColor} = cloudCAProviderContext;
  return (
    <View>
      <DeviceRegistrationView
        onDone={event => console.log('DeviceRegistrationView', event)}
        buttonLabel="Đăng ký"
        registerDeviceParams={{
          biometricApiType: 'AUTO',
          localizedReason: 'Unlock to add device',
        }}>
        <Image
          style={{height: 50}}
          source={{
            uri: 'https://ngolongnd.net/wp-content/uploads/2022/03/ngolongnd_register-di-voi-gioi-tu-gi.jpg',
          }}
          resizeMode={'contain'}
        />
      </DeviceRegistrationView>
      <DeleteDeviceView
        buttonLabel="Xoá thiết bị"
        onDone={event => console.log('DeleteDeviceView', event)}>
        <Image
          style={{height: 50}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3687/3687412.png',
          }}
          resizeMode={'contain'}
        />
      </DeleteDeviceView>

      <DeviceRegistrationView
        onDone={event => console.log('DeviceRegistrationView', event)}
        buttonLabel="Đăng ký"
        registerDeviceParams={{
          biometricApiType: 'AUTO',
          localizedReason: 'Unlock to add device',
        }}
        style={[styles.container, {backgroundColor: themeColor}]}>
        <Text style={styles.labelText}>Đăng ký</Text>
      </DeviceRegistrationView>
      <DeleteDeviceView
        onDone={event => console.log('DeleteDeviceView', event)}
        buttonLabel="Xoá thiết bị"
        style={[styles.container, {backgroundColor: themeColor}]}>
        <Text style={styles.labelText}>Xoá thiết bị</Text>
      </DeleteDeviceView>

      <PrimaryButton
        label="Danh sách thiết bị"
        onPress={() => navigation.navigate('ListDevices' as never)}
      />
      <PrimaryButton
        label="Ủy quyền xác thực"
        onPress={() => navigation.navigate('AuthorView' as never)}
      />
      <PrimaryButton
        label="Thông tin tài khoản"
        onPress={() => navigation.navigate('UserInfoView' as never)}
      />
      <PrimaryButton
        label="Thông tin cấu hình cài đặt"
        onPress={() => navigation.navigate('DeviceRegistrationView' as never)}
      />
    </View>
  );
};

export default CloudCAUI;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 4,
  },
  labelText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
  },
});

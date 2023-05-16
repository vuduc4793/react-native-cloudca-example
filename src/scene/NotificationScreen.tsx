import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import {
  BaseResponse,
  CustomError,
  useDeleteDeviceForPushNotification,
  useRegisterDeviceForPushNotification,
} from 'react-native-cloud-ca';

function VerifyOTPScreen() {
  const [deviceToken, setDeviceToken] = React.useState<string>('');
  const [registerResult, registerError, registerFunc] =
    useRegisterDeviceForPushNotification();
  const [deleteResult, deleteError, deleteFunc] =
    useDeleteDeviceForPushNotification();
  const [result, setResult] = React.useState<BaseResponse | null>();
  const [error, setError] = React.useState<CustomError | null>();

  React.useEffect(() => {
    setResult(registerResult);
  }, [registerResult]);

  React.useEffect(() => {
    setResult(deleteResult);
  }, [deleteResult]);

  React.useEffect(() => {
    setError(registerError);
  }, [registerError]);

  React.useEffect(() => {
    setError(deleteError);
  }, [deleteError]);

  const handleRegisterToken = () => {
    registerFunc({deviceToken: deviceToken});
  };

  const handleDeleteToken = () => {
    deleteFunc({deviceToken: deviceToken});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          onChangeText={setDeviceToken}
          value={deviceToken}
          style={styles.textInputContainer}
          placeholder={'Device token'}
        />
        <Text>{result?.result}</Text>

        <Text>
          {error?.code}
          {error?.message}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <Button title="Register Token" onPress={handleRegisterToken} />
        <Button title="Delete Token" onPress={handleDeleteToken} />
      </View>
    </SafeAreaView>
  );
}

export default VerifyOTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  textInputContainer: {
    color: 'black',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
  },
});

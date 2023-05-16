import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import {useVerifyOTP} from 'react-native-cloud-ca';
import Loading from './Loading';

function VerifyOTPScreen() {
  const [otpSms, setOtpSms] = React.useState<string>('');
  const [otpMail, setOtpMail] = React.useState<string>('');
  const [result, error, onVerifyOTP, isLoading] = useVerifyOTP();

  const onAuthen = () => {
    onVerifyOTP({otpMail, otpSms});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          onChangeText={setOtpSms}
          value={otpSms}
          style={styles.textInputContainer}
          placeholder={'SMS OTP'}
        />
        <TextInput
          onChangeText={setOtpMail}
          value={otpMail}
          style={styles.textInputContainer}
          placeholder={'Email OTP'}
        />
        <View>
          <Text>"access_token": {result?.access_token}</Text>
          <Text>"expires_in": {result?.expires_in}</Text>
          <Text>"refresh_token": {result?.refresh_token}</Text>
          <Text>"token_type": {result?.token_type}</Text>
          <Text>
            {error?.code}
            {error?.message}
          </Text>
        </View>
      </View>
      <Button title="Verify OTP" onPress={onAuthen} />

      {isLoading && <Loading />}
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

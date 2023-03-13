import * as React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useVerifyQRCode} from 'react-native-cloud-ca';

const USER_ID = 'duynq7_viettel7';
function VerifyQRCodeScreen() {
  const [qrCode, setQrCode] = React.useState<string>('');
  const [verifyQRresult, verifyQRerror, onVerifyQRCode] = useVerifyQRCode();

  const handleVerifyQRCode = () => {
    onVerifyQRCode({qrCode: qrCode, userId: USER_ID});
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={qrCode}
          onChangeText={setQrCode}
          style={styles?.textInputContainer}
          placeholder={'QR Code'}
        />
        <Text>
          {verifyQRerror?.code}
          {verifyQRerror?.message}
        </Text>
        <Text>{verifyQRresult && JSON.stringify(verifyQRresult)}</Text>
      </View>
      <Button title="Generate QR Code" onPress={handleVerifyQRCode} />
    </View>
  );
}

export default VerifyQRCodeScreen;

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
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

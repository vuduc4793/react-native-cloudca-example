import * as React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {QRFormat, useGenerateQRCode} from 'react-native-cloud-ca';
import Loading from './Loading';

const CLIENT_ID = '';
function GenerateQRCodeScreen() {
  const [size, setSize] = React.useState<string>('256');
  const [genQRresult, genQRerror, onGenerateQRCode, isLoading] =
    useGenerateQRCode();

  const handleGenQR = () => {
    onGenerateQRCode({
      size: size,
      clientId: CLIENT_ID,
      format: QRFormat.PNG,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={size}
          onChangeText={setSize}
          style={styles?.textInputContainer}
          placeholder={'Size'}
        />
        <TextInput value={genQRresult?.qr_code} />
        <Text>
          {genQRerror?.code}
          {genQRerror?.message}
        </Text>
      </View>
      <Button title="Generate QR Code" onPress={handleGenQR} />

      {isLoading && <Loading />}
    </View>
  );
}

export default GenerateQRCodeScreen;

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

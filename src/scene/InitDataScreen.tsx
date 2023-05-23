import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  Platform,
} from 'react-native';
import {useInitData} from 'react-native-cloud-ca';
import Loading from './Loading';

const CLIENT_ID = 'samples_test_client';
const CLIENT_SECRET = '205640fd6ea8c7d80bb91c630b52d286d21ee511';
const GRANT_TYPE = 'client_credentials';
const USER_ID = 'MST_0123456787-932';
const BASE_URL = 'https://remotesigning.viettel.vn';
function InitDataScreen() {
  const [clientId, setClientId] = React.useState<string>(CLIENT_ID);
  const [clientSecret, setClientSecret] = React.useState<string>(CLIENT_SECRET);
  const [grantType, setGrantType] = React.useState<string>(GRANT_TYPE);
  const [userId, setUserId] = React.useState<string>(USER_ID);
  const [baseUrl, setBaseUrl] = React.useState<string>(BASE_URL);
  const [biometricTitle, setBiometricTitle] = React.useState<string>(
    'Unlock to add device',
  );
  const [result, , onInitData, isLoading] = useInitData();

  const onAuthen = () => {
    onInitData({
      baseURL: baseUrl,
      biometricTitle: biometricTitle,
      clientId: clientId,
      clientSecret: clientSecret,
      grantType: grantType,
      userId: userId,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          onChangeText={setClientId}
          value={clientId}
          style={styles.textInputContainer}
          placeholder={'Client ID'}
        />
        <TextInput
          onChangeText={setClientSecret}
          value={clientSecret}
          style={styles.textInputContainer}
          placeholder={'Client Secret'}
        />
        <TextInput
          onChangeText={setGrantType}
          value={grantType}
          style={styles.textInputContainer}
          placeholder={'Grant Type'}
        />
        <TextInput
          onChangeText={setUserId}
          value={userId}
          style={styles.textInputContainer}
          placeholder={'User ID'}
        />
        {Platform.OS === 'android' && (
          <>
            <TextInput
              onChangeText={setBaseUrl}
              value={baseUrl}
              style={styles.textInputContainer}
              placeholder={'Base URL'}
            />
            <TextInput
              onChangeText={setBiometricTitle}
              value={biometricTitle}
              style={styles.textInputContainer}
              placeholder={'Biometric Title'}
            />
          </>
        )}
        <View>
          <Text>"Init": {result?.result}</Text>
        </View>
      </View>
      <Button title="Init Data" onPress={onAuthen} />
      {isLoading && <Loading />}
    </SafeAreaView>
  );
}

export default InitDataScreen;

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
    color: 'black',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
  },
});

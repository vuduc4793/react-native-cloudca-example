import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import {useAuthenticateClient} from 'react-native-cloud-ca';

const CLIENT_ID = 'samples_test_client';
const CLIENT_SECRET = '205640fd6ea8c7d80bb91c630b52d286d21ee511';
const GRANT_TYPE = 'client_credentials';

function AuthenClient() {
  const [clientId, setClientId] = React.useState<string>(CLIENT_ID);
  const [clientSecret, setClientSecret] = React.useState<string>(CLIENT_SECRET);
  const [grantType, setGrantType] = React.useState<string>(GRANT_TYPE);
  const [authenClientResult, authenClientError, onAuthenticateClient] =
    useAuthenticateClient();

  const onAuthen = () => {
    onAuthenticateClient({clientId, clientSecret, grantType});
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
        <View>
          <Text>"access_token": {authenClientResult?.access_token}</Text>
          <Text>"expires_in": {authenClientResult?.expires_in}</Text>
          <Text>"refresh_token": {authenClientResult?.refresh_token}</Text>
          <Text>"token_type": {authenClientResult?.token_type}</Text>
          <Text>
            {authenClientError?.code}
            {authenClientError?.message}
          </Text>
        </View>
      </View>
      <Button title="Authenticate Client" onPress={onAuthen} />
    </SafeAreaView>
  );
}

export default AuthenClient;

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

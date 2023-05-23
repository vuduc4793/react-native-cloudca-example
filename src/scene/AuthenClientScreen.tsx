import * as React from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';
import {useAuthenticateClient} from 'react-native-cloud-ca';
import Loading from './Loading';

function AuthenClient() {
  const [
    authenClientResult,
    authenClientError,
    onAuthenticateClient,
    isLoading,
  ] = useAuthenticateClient();

  const onAuthen = () => {
    onAuthenticateClient();
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <Button title="Authenticate Client" onPress={onAuthen} />
      {isLoading && <Loading />}
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
    color: 'black',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
  },
});

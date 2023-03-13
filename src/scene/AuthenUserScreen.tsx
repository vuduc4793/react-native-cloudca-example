import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {useAuthenticateUser} from 'react-native-cloud-ca';

const USER_ID = 'duynq7_viettel7';

function AuthenUser() {
  const [userId, setUserId] = React.useState<string>(USER_ID);
  const [result, error, onAuthenticateUser] = useAuthenticateUser();
  const onAuthen = () => {
    onAuthenticateUser({userId});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          onChangeText={setUserId}
          value={userId}
          style={styles.textInputContainer}
          placeholder={'User ID'}
        />
        <Text>"auth type": {result?.auth_type}</Text>
        <Text>token info:</Text>
        <Text>"access_token": {result?.token_info?.access_token}</Text>
        <Text>"expires_in": {result?.token_info?.expires_in}</Text>
        <Text>"refresh_token": {result?.token_info?.refresh_token}</Text>
        <Text>"token_type": {result?.token_info?.token_type}</Text>
        <Text>
          {error?.code}
          {error?.message}
        </Text>
      </View>
      <Button title="Authenticate User" onPress={onAuthen} />
    </SafeAreaView>
  );
}

export default AuthenUser;

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

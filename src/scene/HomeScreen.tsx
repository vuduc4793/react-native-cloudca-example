import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {sdkSetup, useSdkSetup} from 'react-native-cloud-ca';

function HomeScreen() {
  const navigation = useNavigation();
  const [baseUrl, setBaseUrl] = React.useState<string>(
    'https://remotesigning.viettel.vn',
  );

  const onSetUrl = () => {
    sdkSetup({baseUrl}).then(() => {
      navigation.navigate('Menu', {baseUrl: baseUrl});
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.label}>Base URL</Text>
        <TextInput
          onChangeText={setBaseUrl}
          value={baseUrl}
          style={styles.textInputContainer}
        />
      </View>
      <Button title="Set URL" onPress={onSetUrl} />
    </SafeAreaView>
  );
}

export default HomeScreen;

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
  },
});

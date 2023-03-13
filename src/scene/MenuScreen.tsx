import {useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  Pressable,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';
import {
  authorisationPendingRequest,
  cancelPendingRequest,
  CustomError,
  deleteDevice,
  getDeviceRegistrationSettings,
  getUserProfile,
  registerDevice,
  renewAccessToken,
} from 'react-native-cloud-ca';
import {API_LIST} from '../constants/constants';

function MenuScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {params} = route;
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<string>('');

  const handleApiAction = (key: number) => {
    switch (key) {
      case 1:
        navigation.navigate('Authen Client' as never);
        break;
      case 2:
        navigation.navigate('Authen User' as never);
        break;
      case 3:
        navigation.navigate('Verify OTP' as never);
        break;
      case 4:
        setModalVisible(true);
        renewAccessToken({refresh_token: undefined})
          .then(response => {
            setResult(JSON.stringify(response));
          })
          .catch(error => {
            setResult((error as CustomError)?.message);
          });
        break;
      case 5:
        setModalVisible(true);
        registerDevice({
          biometricApiType: 'AUTO',
          localizedReason: 'Unlock to add device',
        })
          .then(response => {
            setResult(JSON.stringify(response));
          })
          .catch(error => {
            setResult((error as CustomError)?.message);
          });
        break;
      case 6:
        navigation.navigate('List Registered Devices' as never);
        break;
      case 7:
        setModalVisible(true);
        deleteDevice({deviceId: ''})
          .then(response => {
            setResult(JSON.stringify(response));
          })
          .catch(error => {
            setResult((error as CustomError)?.message);
          });
        break;
      case 8:
        navigation.navigate('Pending Requests' as never);
        break;
      case 9:
        setModalVisible(true);
        authorisationPendingRequest({
          biometricApiType: 'AUTO',
          localizedReason: 'Unlock to add device',
          hashAlgorithm: '',
          request: '',
          transactionID: '',
        })
          .then(response => {
            setResult(JSON.stringify(response));
          })
          .catch(error => {
            setResult((error as CustomError)?.message);
          });
        break;
      case 10:
        setModalVisible(true);
        cancelPendingRequest({
          hashAlgorithm: '',
          request: '',
          transactionID: '',
        })
          .then(response => {
            setResult(JSON.stringify(response));
          })
          .catch(error => {
            setResult((error as CustomError)?.message);
          });
        break;
      case 11:
        setModalVisible(true);
        getUserProfile()
          .then(response => {
            setResult(JSON.stringify(response));
          })
          .catch(error => {
            setResult((error as CustomError)?.message);
          });
        break;
      case 12:
        setModalVisible(true);
        getDeviceRegistrationSettings()
          .then(response => {
            setResult(JSON.stringify(response));
          })
          .catch(error => {
            setResult((error as CustomError)?.message);
          });
        break;
      case 13:
        navigation.navigate('Generate QR Code' as never);
        break;
      case 14:
        navigation.navigate('Verify QR Code' as never);
        break;
      case 15:
        navigation.navigate('Notification' as never);
        break;
      default:
        break;
    }
  };

  const renderApiButton = (
    item: {label: string; key: number},
    index: number,
  ) => {
    const {key, label} = item;
    return (
      <Button key={index} title={label} onPress={() => handleApiAction(key)} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{params?.baseUrl}</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {API_LIST?.map((item, index) => renderApiButton(item, index))}
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{result}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setResult('');
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Hide</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 22,
  },
  modalView: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

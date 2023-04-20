import * as React from 'react';
import {View, Text, Button, FlatList, ListRenderItemInfo} from 'react-native';
import {
  DeviceInfo,
  ListRegisteredDevicesResponse,
  deleteDevice,
  listRegisteredDevices,
} from 'react-native-cloud-ca';
import Loading from './Loading';

function ListRegisteredDevicesScreen() {
  const [getListLoading, setGetListLoading] = React.useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = React.useState<boolean>(false);
  const [listDevices, setListDevices] =
    React.useState<ListRegisteredDevicesResponse>([]);

  React.useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      setGetListLoading(true);
      const result = await listRegisteredDevices();
      setListDevices(result);
      // console.log(result);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetListLoading(false);
    }
  };

  const onDeleteDevice = async (device_id: string) => {
    try {
      console.log('device_id', device_id);
      setDeleteLoading(true);
      const response = await deleteDevice({deviceId: device_id});
      // setListDevices(
      //   listDevices.filter(device => device.device_id !== device_id),
      // );
      if (response?.result) {
        fetchDevices();
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const renderItem = ({item, index}: ListRenderItemInfo<DeviceInfo>) => {
    return (
      <View key={index}>
        <Text>device id: {item?.device_id}</Text>
        <Text>devices name: {item?.device_name}</Text>
        <Button
          title="Delete"
          onPress={() => onDeleteDevice(item?.device_id)}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <FlatList
        data={listDevices}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {(getListLoading || deleteLoading) && <Loading />}
    </View>
  );
}

export default ListRegisteredDevicesScreen;

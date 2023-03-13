import * as React from 'react';
import {View, Text, Button, FlatList, ListRenderItemInfo} from 'react-native';
import {
  DeviceInfo,
  useDeleteDevice,
  useListRegisteredDevices,
} from 'react-native-cloud-ca';

const USER_ID = 'duynq7_viettel7';

function ListRegisteredDevicesScreen() {
  const [listDevices, , listRegisteredDevicesFnc] = useListRegisteredDevices();
  const [, , deleteDevicesFnc] = useDeleteDevice();

  React.useEffect(() => {
    listRegisteredDevicesFnc({
      userId: USER_ID,
    });
  }, []);

  const renderItem = ({item, index}: ListRenderItemInfo<DeviceInfo>) => {
    return (
      <View key={index}>
        <Text>device id: {item?.device_id}</Text>
        <Text>devices name: {item?.device_name}</Text>
        <Button
          title="Delete"
          onPress={() => {
            deleteDevicesFnc({deviceId: item?.device_id});
            listRegisteredDevicesFnc({
              userId: USER_ID,
            });
          }}
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
    </View>
  );
}

export default ListRegisteredDevicesScreen;

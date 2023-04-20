import {useFocusEffect} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {
  authorisationPendingRequest,
  cancelPendingRequest,
  CustomError,
  useGetPendingAuthorisationRequest,
} from 'react-native-cloud-ca';
import Loading from './Loading';

function PendingRequestsScreen() {
  const [
    getPendingResult,
    getPendingError,
    onGetPendingAuthorisationRequest,
    getPendingLoading,
  ] = useGetPendingAuthorisationRequest();
  const [result, setResult] = React.useState<string>('');
  const [disableButton, setDisableButton] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  useFocusEffect(
    React.useCallback(() => {
      onGetPendingAuthorisationRequest();
    }, []),
  );

  React.useEffect(() => {
    if (
      getPendingResult?.hash_algorithm &&
      getPendingResult?.request &&
      getPendingResult?.transaction_id
    ) {
      setDisableButton(false);
    }
  }, [getPendingResult]);

  React.useEffect(() => {
    setIsLoading(getPendingLoading);
  }, [getPendingLoading]);

  const author = async () => {
    try {
      if (
        getPendingResult?.hash_algorithm &&
        getPendingResult?.request &&
        getPendingResult?.transaction_id
      ) {
        setResult('');
        setIsLoading(true);
        const response = await authorisationPendingRequest({
          biometricApiType: 'AUTO',
          localizedReason: 'Unlock to add device',
          hashAlgorithm: getPendingResult?.hash_algorithm,
          request: getPendingResult?.request,
          transactionID: getPendingResult?.transaction_id,
        });

        setResult('author' + response?.result || 'Successed');
      }
    } catch (error) {
      setResult('author' + (error as CustomError)?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelPending = async () => {
    if (
      getPendingResult?.hash_algorithm &&
      getPendingResult?.request &&
      getPendingResult?.transaction_id
    ) {
      setResult('');
      setIsLoading(true);
      try {
        const response = await cancelPendingRequest({
          hashAlgorithm: getPendingResult?.hash_algorithm,
          request: getPendingResult?.request,
          transactionID: getPendingResult?.transaction_id,
        });
        setResult('cancel' + response?.result || 'Successed');
      } catch (error) {
        setResult('cancel' + (error as CustomError)?.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <Text>
          {result?.length !== 0 ? (
            result
          ) : (
            <>
              <Text>{`hash_algorithm: ${getPendingResult?.hash_algorithm}`}</Text>
              <Text>{`request: ${getPendingResult?.request}`}</Text>
              <Text>{`transaction_id: ${getPendingResult?.transaction_id}`}</Text>
            </>
          )}
        </Text>
        <Text />
        <Text>
          {!!getPendingError?.message &&
            `Get Pending Error: ${JSON.stringify(getPendingError)}`}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button title="Author" onPress={author} disabled={disableButton} />
        <Button
          title="Cancel"
          onPress={cancelPending}
          disabled={disableButton}
        />
      </View>
      {isLoading && <Loading />}
    </View>
  );
}

export default PendingRequestsScreen;

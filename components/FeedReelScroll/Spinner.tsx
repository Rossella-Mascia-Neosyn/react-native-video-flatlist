import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';

const Spinner = memo((): React.JSX.Element => {
  return (
    <View style={{height: 60, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
});

export default Spinner;

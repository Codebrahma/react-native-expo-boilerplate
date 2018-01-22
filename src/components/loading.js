import React from 'react';
import { View, Text } from 'react-native';

import globalStyles from '~/src/styles/index';

const Loading = () => (
  <View style={[
      globalStyles.container,
      globalStyles.center,
    ]}
  >
    <Text>
      Loading...
    </Text>
  </View>
);

export default Loading;

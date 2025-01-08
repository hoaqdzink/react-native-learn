import { StyleSheet, Text, View } from 'react-native';

import Styling from './leanr/styling';
import Flexbox from './leanr/flexBox';

export default function App() {
  return (
    <View style={style.container}>
      {/* <Text style={style.titleText}>Tìm hiểu về Styling</Text>
      <Styling />  */}

      {/* <Flexbox /> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 70,
    alignItems: 'center'
  },
  titleText: {
    fontSize: 40,
    marginBottom: 10,
    fontWeight: 'bold',
  }
});
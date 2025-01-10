import { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

const FirstRouter = () => {
  return (  // Thêm return ở đây
    <View style={[styles.scene, { backgroundColor: 'red' }]}>
      <Text>First Router</Text>
    </View>
  );
};

const SecondRouter = () => {
  return (  // Thêm return ở đây
    <View style={[styles.scene, { backgroundColor: 'blue' }]}>
      <Text>Second Router</Text>
    </View>
  );
};

const initialLayout = { width: Dimensions.get('window').width };

const HomeTabView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' }
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRouter />;
      case 'second':
        return <SecondRouter />;
      default:
        return null;
    }
  };
  

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

export default HomeTabView;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

import { StyleSheet, Text, View } from 'react-native';

import Styling from './leanr/styling';
import Flexbox from './leanr/flexBox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './page/HomeScreen';
import DetailScreen from './page/DetailScreen';

export default function App() {
  return (
    // <View style={style.container}>
    //   {/* <Text style={style.titleText}>Tìm hiểu về Styling</Text>
    //   <Styling />  */}

    //   {/* <Flexbox /> */}
    // </View>

    // Navigation
    /*
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home'  component={HomeScreen}/>
        <Stack.Screen name='Details'  component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    */

    //Tab navigation
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home'){
              iconName = 'home';
            } else if (route.name === 'Details'){
              iconName = 'list';
            }
            return <Icon name={iconName} color={color} size={size || 24} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen name='Home'  component={HomeScreen}/>
        <Tab.Screen name='Details'  component={DetailScreen}/>
      </Tab.Navigator>
    </NavigationContainer>

    );
}

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

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
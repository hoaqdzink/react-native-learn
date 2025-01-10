import { Button, StyleSheet, Text, View } from 'react-native';
import HomeTabView from '../TabView/HomeTabView';

export default function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            
            <Button title="Open Details" onPress={() => navigation.navigate('Details')}></Button> 

            
        </View>
        // <HomeTabView />

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
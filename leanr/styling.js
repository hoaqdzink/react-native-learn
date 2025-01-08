import { StyleSheet, Text, View } from 'react-native';

export default function Styling(){
    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app 1 234!</Text>
          {/* Inline style */}
          <Text style={{ margin: 20, borderWidth: 2, borderColor: 'green', padding: 10 }}>
            Vinh cute a hehe
          </Text>

          {/* StyleSheet */}
          <Text style={styles.styleSheet}>
            Vinh cute a haha
          </Text>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'top',
    },
    styleSheet: {
        margin: 20, 
        borderWidth: 2, 
        borderColor: 'red', 
        padding: 10
    }
  });
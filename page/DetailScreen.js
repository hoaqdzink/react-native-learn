import { StyleSheet, Text, View } from 'react-native';
import DetailList from './DetailList';

export default function Detail(){
    return (
        // <View style={styles.container}>
        //     <Text>Details Screen</Text>
        // </View>

        <DetailList/>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItem: 'center',
        jutifyContent: 'center'
    }
});
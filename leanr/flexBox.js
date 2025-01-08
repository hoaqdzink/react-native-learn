import {StyleSheet, View, Text, Button, TextInput} from 'react-native'

export default function Flexbox(){

    function textInputChanged(textChanged){
        console.log(textChanged);
    }

    function addTodo(){

    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={textInputChanged} style = {styles.textInput} placeholder='your todo' />
                <Button title="Add todo" />
            </View>

            <View>
                <Text>The todo list...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 0
    },
    inputContainer: {
        flexDirection: 'row'
    },
    textInput: {
        borderWidth: 2,
        borderColor: 'blue',
        padding: 10,
        marginRight: 10,
        width: '70%'
    }
});
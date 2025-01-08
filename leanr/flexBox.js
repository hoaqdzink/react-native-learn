import {StyleSheet, View, Text, Button, TextInput} from 'react-native'
import {useState} from 'react';

export default function Flexbox(){

    const[todoText, setTodoText] = useState('');

    const [todoList, setTodoList] = useState([]);

    function textInputChanged(textChanged){
        console.log(textChanged);
        setTodoText(textChanged)
    }

    function addTodo(){
        // console.log('Btn ' + todoText);

        setTodoList((currentTodoList) => [...currentTodoList, todoText]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={textInputChanged} style = {styles.textInput} placeholder='your todo' />
                <Button onPress={addTodo} title="Add todo" />
            </View>

            <View style={styles.todoList}>
                {todoList.map((todo) => <Text key={todo}>{todo}</Text>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 0,
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
    },
    todoList:{
        flex: 4
    }
});
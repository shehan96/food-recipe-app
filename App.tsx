import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, GestureResponderEvent, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  const handleOnPress = (event : GestureResponderEvent) => {
    setCount(currentCount => count + 1);
  }

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Text style={{ margin: 8, borderWidth: 1, borderColor: 'red', padding: 16, borderRadius: 5 }}>Inline Style</Text>
      <Text style={styles.textInput}>Hello World</Text>
      <Button title='Click Me' onPress={handleOnPress} />
      <Button title='Click Me' onPress={handleOnPress} />
      <TouchableOpacity style={{ margin: 4, padding: 4, backgroundColor: '#f9f9f9' }}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    color: '#464646',
    fontSize: 20
  }
});

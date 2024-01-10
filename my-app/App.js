import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hi}>Hi, this is Roi</Text>
      <Text style={styles.text}>Welcome! this app is in production</Text>
      <Image
          source={{
            uri: 'https://wallpapercave.com/wp/wp4180307.jpg',
          }}
          style={{width: 200, height: 200}}
        />
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
  fontSize: 30,
  color: 'lightblue'
  },
  
  hi: {
  fontSize: 20,
  color: 'lightblue'
  
  }
});

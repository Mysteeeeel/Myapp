import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image} from 'react-native';

export default function App() {
  return (

    <ScrollView>

      <Image style ={styles.container}
      
      source={{uri:'https://i.pinimg.com/originals/e8/24/46/e82446f5b648d07ff21bf72bbfc69c86.gif'}}
      
      
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

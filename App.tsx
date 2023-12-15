import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({  Roboto_400Regular, Roboto_700Bold  })
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202024'}}>
      <StatusBar
          backgroundColor='transparent'
          style='light' 
          translucent
        />
      
      { fontsLoaded ? <Text>Hello World!</Text>: <View/>}
    </View>
  );
}


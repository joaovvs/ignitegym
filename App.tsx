import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({  Roboto_400Regular, Roboto_700Bold  })
  return (
    <NativeBaseProvider theme={THEME}>
    <StatusBar
          backgroundColor='transparent'
          style='light' 
          translucent
        />
      
      { fontsLoaded ? <View/>: <Loading/>}
    </NativeBaseProvider>
  );
}


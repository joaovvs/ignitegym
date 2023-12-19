import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { AuthContextProvider } from '@contexts/AuthContext';

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
      <AuthContextProvider>
        { fontsLoaded ? <Routes/>: <Loading/>}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}


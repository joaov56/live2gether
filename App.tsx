import { useFonts } from 'expo-font';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded, fontErrord] = useFonts({
    'OpenSans': require('./assets/fonts/sans.ttf'),
  })
  return (
      <Home />
  )
}




import { Text, View } from 'react-native';
import Login from './screens/Login';
import { useFonts } from "expo-font";
import Registration from './screens/Registration';

export default function App() {

  const [loaded] = useFonts({
    RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoLight: require('./assets/fonts/Roboto-Light.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Black.ttf'),
  })

  if (!loaded) {
    return null;
  }


  return (
    // <Registration />
    // <ProfileVerification />
    <Login />
  );
}



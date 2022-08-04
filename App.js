import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Auth/Splash';
import Auth from './src/navigation/Auth';
import HomeDrawer from './src/navigation/HomeDrawer';
import DetailedScreen from './src/Screen/DetailedScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="homedrawer" component={HomeDrawer} />
        <Stack.Screen name='detailed' component={DetailedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
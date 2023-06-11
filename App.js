import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from './src/pages/MoviesPage';
import MovieDetailsPage from './src/pages/MovieDatailsPage';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import ComprarPage from './src/pages/ComprarPage';
import ForgetPasswordPage from './src/pages/ForgetPasswordPage';

const animationConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MoviesPage' component={MoviesPage} options= {{headerShown: false}} />
        <Stack.Screen name='MovieDetailsPage' component={MovieDetailsPage} />
        <Stack.Screen name='ComprarPage' component={ComprarPage} />
        <Stack.Screen name='ForgetPasswordPage' component={ForgetPasswordPage} />
        <Stack.Screen name='LoginPage' component={LoginPage} options={{
            transitionSpec: {
              open: animationConfig,
              close: animationConfig
            }}}/>
          <Stack.Screen name="RegisterPage" component={RegisterPage} options={{
            transitionSpec: {
              open: animationConfig,
              close: animationConfig
            }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

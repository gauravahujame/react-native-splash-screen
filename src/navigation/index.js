import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, TabNavigator } from 'react-navigation';
import { LoginScreen, HomeScreen } from '../screens';

export default createStackNavigator(
    {
        Login: LoginScreen,
        Home: HomeScreen,
    },
    {
        headerMode: 'none'
    }
);

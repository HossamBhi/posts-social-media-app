import {createStackNavigator} from '@react-navigation/stack';
import {Home, PostDetails, Splash} from '../pages';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="PostDetails" component={PostDetails} />
  </Stack.Navigator>
);

export default MainStack;

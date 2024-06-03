import {createStackNavigator} from '@react-navigation/stack';
import {Home, PostDetails} from '../pages';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="PostDetails" component={PostDetails} />
  </Stack.Navigator>
);

export default MainStack;

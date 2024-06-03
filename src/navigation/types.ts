import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {PostType} from '../utils/types';

export type RootStackParamList = {
  Home: undefined;
  PostDetails: {post: PostType};
};

export type ReactNavigationProps = NativeStackScreenProps<RootStackParamList>;

export type ScreenNavigationProp = ReactNavigationProps['navigation'];
export type ScreenRouteProp = ReactNavigationProps['route'];
export type PostDetailsNav = NativeStackScreenProps<
  RootStackParamList,
  'PostDetails'
>;

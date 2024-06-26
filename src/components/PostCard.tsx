import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, PressableProps, View} from 'react-native';
import {ScreenNavigationProp} from '../navigation/types';
import {PostType} from '../utils/types';
import CustomText from './CustomText';

const PostCard = ({item, ...props}: {item: PostType} & PressableProps) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <Pressable
      onPress={() => navigation.push('PostDetails', {post: item})}
      className="p-4"
      {...props}>
      <View className="flex-row">
        <Image
          source={require('../assets/avatar.png')}
          resizeMode="contain"
          className="w-[60px] h-[60px]"
        />
        <View className="px-4 gap-2">
          <CustomText text="Hossam Pasha" />
          <CustomText
            text={
              new Date()?.toLocaleTimeString() +
              ' ' +
              new Date()?.toLocaleDateString()
            }
            className="text-md opacity-80"
          />
        </View>
      </View>
      <View className="pt-[8px]">
        <CustomText
          className="text-md py-2 font-bold"
          text={
            item.title.length > 100
              ? item.title.slice(0, 100) + '...'
              : item.title
          }
        />
        <CustomText
          text={item.body || ''}
          className="text-md opacity-80 pb-2"
        />
      </View>
    </Pressable>
  );
};

export default PostCard;

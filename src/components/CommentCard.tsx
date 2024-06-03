import {Image, View, ViewProps} from 'react-native';
import {CommentType} from '../utils/types';
import CustomText from './CustomText';

const CommentCard = ({item, ...props}: {item: CommentType} & ViewProps) => (
  <View className="p-4" {...props}>
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
      <CustomText className="text-md py-2 font-bold" text={item.body} />
    </View>
  </View>
);

export default CommentCard;

import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

export interface CustomTextProps {
  style?: StyleProp<TextStyle>;
  text?: string;
}

const CustomText = ({
  children,
  text,
  style,
  ...props
}: CustomTextProps & TextProps) => {
  return (
    <Text
      className={`text-black`}
      allowFontScaling={false}
      style={style}
      {...props}>
      {children}
      {text}
    </Text>
  );
};

export default CustomText;

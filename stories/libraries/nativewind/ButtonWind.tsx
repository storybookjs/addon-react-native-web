import * as React from 'react';
import { StyleProp, Text, ViewStyle, TouchableOpacity } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
};

export const ButtonWind = ({ onPress, label, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      className='bg-slate-500 min-w-0 px-4 py-2 rounded w-24'
      style={style}
      onPress={onPress}
    >
      <Text className='text-white text-center'>{label}</Text>
    </TouchableOpacity>
  );
};

import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors'

import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    color?: string,
    blackText?: boolean,
    doubleSize?: boolean,
    onPress: () => void 
}

const CalculatorBtn = ({
  label, 
  color = Colors.darkGray, 
  blackText = false, 
  doubleSize = false, 
  onPress
}: Props) => {
  return (
    <Pressable 
      style={({pressed}) => (
        {
          ...globalStyles.button,
          backgroundColor: color,
          opacity: pressed ? 0.7 : 1,
          width: doubleSize ? 180 : 80
        }
      )}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
        <Text 
            style={{
                ...globalStyles.btnText,
                color: blackText ? 'black' : 'white',
            }}>{label}</Text>
    </Pressable>
  )
}

export default CalculatorBtn
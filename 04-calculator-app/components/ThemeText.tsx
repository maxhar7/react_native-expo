import { Text, type TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors'

interface Props extends TextProps{
  variant?: 'primary' | 'secondary',
}

const ThemeText = ({children, variant = 'primary', ...props} : Props) => {
  return (
      <Text
        {...props}        
        numberOfLines={1} 
        adjustsFontSizeToFit
        style={[
          variant === 'primary' && globalStyles.mainResult,
          variant === 'secondary' && globalStyles.subResult,
        ]}
      >
        {children}
      </Text>
  ) 
}

export default ThemeText
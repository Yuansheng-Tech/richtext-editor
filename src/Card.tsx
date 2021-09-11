import React from 'react'
import { View, Label } from '@tarojs/components'

export const Card = ({
  label,
  children
}) => {
  return <View className='editor-card'>
    <Label
      className='editor-card-label'
      for={label}
      key={label}
    >
      {label}
    </Label>
    <View>
      {children}
    </View>
  </View>
}
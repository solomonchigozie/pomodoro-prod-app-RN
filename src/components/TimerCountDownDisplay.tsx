import React from 'react'
import { Text, View } from 'react-native'

type Props = {
  timerDate : Date;
}

export const TimerCountDownDisplay : React.FC<Props> = ({timerDate}) => {
  return (
    <View className='my-4 p-5'>
        <Text className='text-6xl font-bold text-white'>{timerDate.getMinutes().toString().padStart(2,"0")} : 
        {timerDate.getSeconds().toString().padStart(2,"0")}</Text>
    </View>
  )
}


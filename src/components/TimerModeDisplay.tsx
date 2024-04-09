import React from 'react'
import { Text, View } from 'react-native'

export type TimerModes = "Focus" | "Break"

type Props = {
    timerMode : TimerModes
}

export const TimerModeDisplay : React.FC<Props> = ({timerMode}) => {
  return (
    <View>
        <Text className='text-4xl font-bold text-white pb-16'>{timerMode} Time {timerMode == "Focus" ? '🍅' : '☕️'}  </Text>
    </View>
  )
}


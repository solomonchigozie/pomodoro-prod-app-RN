import React from 'react'
import { Button, Pressable, TouchableOpacity, View } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

type Props = {
    isTimerRunning : boolean,
    stopTimer : ()=> void,
    startTimer : () => void
}

export const TimerToggleButton: React.FC<Props> = ({isTimerRunning, startTimer, stopTimer}) => {
  return (
    <View className='border-white flex items-center w-[200px] h-[200px] justify-center rounded-full border-4'>
        <TouchableOpacity onPress={isTimerRunning? stopTimer : startTimer}>
            <FontAwesome name={isTimerRunning ?'pause' :'play'} size={105} color={'white'} />
        </TouchableOpacity>

        {/* <Button title={isTimerRunning? 'stop timer' : 'start timer'} 
            onPress={isTimerRunning? stopTimer : startTimer} /> */}
    </View>
  )
}


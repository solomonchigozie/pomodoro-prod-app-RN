import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TimerCountDownDisplay } from './src/components/TimerCountDownDisplay';
import { TimerToggleButton } from './src/components/TimerToggleButton';
import { TimerModeDisplay, TimerModes } from './src/components/TimerModeDisplay';
// import { TimerCountDownDisplay } from './src/components/TimerCountDownDisplay';

const FOCUS_TIME_MINUTES = 0.3 * 60 * 1000;
const BREAK_TIME_MINUTES = 0.2 * 60 * 1000;

export default function App() {

  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES)
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)
  const [timerMode, setTimerMode] = useState<TimerModes>("Focus")

  useEffect(()=>{
    if(timerCount ==0){
      if(timerMode == "Focus"){
        setTimerMode("Break")
        setTimerCount(BREAK_TIME_MINUTES)
      }else{
        setTimerMode("Focus")
        setTimerCount(FOCUS_TIME_MINUTES)
      }
      stopTimer()
    }
  }, [timerCount])
  const startTimer = () => {
    setIsTimerRunning(true)
    //start the timer and remove one second every second
    const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000)
    setTimerInterval(id)
  }
  const stopTimer = () => {
    if (timerInterval != null) {
      clearInterval(timerInterval)
    }
    setIsTimerRunning(false)
  }

  // const timerDate = new Date(timerCount)

  return (
    <View style={styles.container} className={timerMode =='Focus' ? 'bg-[#BD2D2D] space-y-6' : 'bg-green-800 space-y-6'}>
      <TimerModeDisplay timerMode={timerMode} />
      <StatusBar style="auto" />
      <TimerToggleButton isTimerRunning={isTimerRunning}
        startTimer={startTimer} stopTimer={stopTimer} />
      {/* <Button title='stop timer' onPress={stopTimer} /> */}

      {/* <TimerCountDownDisplay timerDate={new Date(timerCount)} /> */}
      {/* <TimerCountDownDisplay /> */}
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

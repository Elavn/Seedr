import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"

const LinearProgress = () => {
  return (
    <View>
      <ProgressBar
       completed={60}
       borderRadius='8'
       animateOnRender={true}
       height='20'
        />
    </View>
  )
}

export default LinearProgress

const styles = StyleSheet.create({})
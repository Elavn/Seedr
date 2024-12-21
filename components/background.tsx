import { StyleSheet, StatusBar, View } from 'react-native'
import React, { ReactNode } from 'react'
import { BLACK, PRIMARY, WHITE } from '@/styles/colors'
import { ImageBackground } from 'react-native';

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children } : BackgroundProps) => {
  return (
    <ImageBackground style={styles.backbg} source={require('@/assets/images/background.png')}>
      
        <View style={styles.contentContainer}>
          {children} 
      </View>
       
   </ImageBackground>
  )
}

export default Background;

const styles = StyleSheet.create({
    backbg: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      zIndex: 1,
      paddingHorizontal: 32,
      paddingTop: 30,
    },
    
})
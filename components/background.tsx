import { StyleSheet, StatusBar, View } from 'react-native'
import React, { ReactNode } from 'react'
import { BLACK, PRIMARY } from '@/styles/colors'

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children } : BackgroundProps) => {
  return (
    <View style={styles.backbg}>

      <StatusBar
        barStyle="light-content" // For white text/icons
        backgroundColor={BLACK} // Set the background to match your app
        translucent={false} // Ensures content doesn't go behind the status bar
      />
       
        <View style={styles.contentContainer}>
          {children} 
      </View>
       
    </View>
  )
}

export default Background;

const styles = StyleSheet.create({
    backbg: {
      flex: 1,
      backgroundColor: BLACK,
    },
    contentContainer: {
      flex: 1,
      zIndex: 1,
      paddingHorizontal: 32,
      paddingTop: 30 
    },
    
})
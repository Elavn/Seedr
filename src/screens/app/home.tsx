import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Background from '@/components/background'
import BalanceCard from '@/components/balanceCard'
import TransactionCard from '@/components/transactionCard'
import ProgressRing from '@/components/charts/pieCharts/progressRing'
import { ACCENT, WHITE } from '@/styles/colors'
import { FONT_SIZE_28 } from '@/styles/fonts'
import Spacer from '@/components/spacer'


const DashboardScreen = () => {
  return (
    
      <Background>
        <Image style={styles.logo}
        resizeMode='contain'
        source={require("../../../assets/images/logo.png")} />
        <Spacer height={18}/>
      <Text style={styles.headerText}>My dashboard</Text>
      <Spacer height={20}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      
        <BalanceCard />
      <Spacer height={20}/>
        <TransactionCard />
      <Spacer height={20}/>
      <ProgressRing />
      </ScrollView>
      
    </Background>
    
    
    
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FONT_SIZE_28,
    color: WHITE
  },
  logo: {
    width: 79,
    height: 20,
  },
  chartBg: {
    backgroundColor: ACCENT,
    alignItems: 'center',
  }
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MAIN, WHITE } from '@/styles/colors'
import BalanceData from '@/data/totalBalance'
import LinearProgress from './progressBar'
import { FONT_SIZE_16, FONT_SIZE_18, FONT_SIZE_20, FONT_SIZE_26, FONT_SIZE_28, FONT_SIZE_32, FONT_SIZE_45 } from '@/styles/fonts'
import Spacer from './spacer'

const {
     totalBalance: {
    total
    },
    monthlyLimit: {
        percentage,
        amountLimit,
        spentAmount
    }
} = BalanceData


const BalanceCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tbText}>Total Balance</Text>
      <Spacer height={8} />
      <Text style={styles.amount}>₦{total}.00</Text>
      <Spacer height={10} />
      <View style={styles.limit}>
        <Text style={styles.monthLimit}>Monthly payment limit</Text>
        <Text style={styles.amountLimit}>₦{amountLimit}</Text>
      </View>
    </View>
  )
}

export default BalanceCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: 'rgba(73, 198, 168, 0.2)',
        borderWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderRightColor: 'rgba(0, 0, 0, 0.1)',
        borderLeftColor: 'rgba(255, 255, 255, 0.1)',
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
        width: '100%',
        padding: 10
    },
    limit: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tbText: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontFamily: 'Inter-SemiBold',
      fontSize: FONT_SIZE_16
    },
    amount: {
      fontFamily: 'Inter-Bold',
      fontSize: 40,
      color: WHITE
    },
    monthLimit: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontFamily: 'Inter-SemiBold'
    },
    amountLimit: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontFamily: 'Inter-SemiBold'
    }
})
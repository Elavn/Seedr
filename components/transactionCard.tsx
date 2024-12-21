import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Chart from './charts/lineCharts/Chart'
import { ACCENT, PRIMARY, WHITE } from '@/styles/colors'
import { FONT_SIZE_12, FONT_SIZE_20 } from '@/styles/fonts'
import TransactionsChart from './charts/lineCharts/barChart'

const TransactionCard = () => {
  return (
    <View>
      <TransactionsChart />
    </View>
  )
}

export default TransactionCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY,
        padding: 10
    },
    transactionTxt: {
        fontFamily: 'Inter-Regular',
        fontSize: FONT_SIZE_20,
        color: WHITE
    }
})


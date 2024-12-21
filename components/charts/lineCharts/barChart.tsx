import DiagonalBackground from '@/components/diagonalBackground';
import { ACCENT, PRIMARY, WHITE } from '@/styles/colors';
import { FONT_SIZE_16, FONT_SIZE_18 } from '@/styles/fonts';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import Svg, { Line, Rect, Defs, Pattern, Path } from 'react-native-svg';

const TransactionChart = () => {

  // Bar chart data
  const barData = [
    { value: 80000, label: 'Jul', frontColor: ACCENT },
    { value: 70000, label: 'Aug', frontColor: ACCENT },
    { value: 50000, label: 'Sep', frontColor: ACCENT},
    { value: 65000, label: 'Oct', frontColor: ACCENT },
    { value: 54000, label: 'Nov', frontColor: ACCENT },
    { value: 90000, label: 'Dec', frontColor: ACCENT },
  ];

  const maxValue = 100000;
  const stepValue = 20000;

  const formatYAxisLabels = (maxValue: number, stepValue: number) => {
    const labels = [];
    for (let i = 0; i <= maxValue; i += stepValue) {
      labels.push(i >= 1000 ? `${i / 1000}k` : i.toString());
    }
    return labels;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your transactions this year</Text>
      <BarChart
        data={barData}
        barWidth={30}
        noOfSections={3} // Y-axis steps
        maxValue={maxValue}
        stepValue={stepValue}
        barBorderTopLeftRadius={12}
        barBorderTopRightRadius={12}
        isAnimated
        spacing={15}
        xAxisThickness={0} // Hide x-axis line
        yAxisColor={ACCENT}
        hideRules
        yAxisLabelPrefix="₦"
        yAxisTextStyle={styles.yAxisText}
        xAxisLabelTextStyle={styles.xAxisText}
        height={180}
        yAxisLabelTexts={formatYAxisLabels(maxValue, stepValue)}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(27, 33, 31, 0.1)',
    padding: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(67, 183, 155, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: FONT_SIZE_16,
    fontFamily: 'Inter-Bold',
    marginBottom: 10,
    color: ACCENT,
    paddingBottom: 5
  },
  yAxisText: {
    fontSize: 14,
    color: WHITE,
    fontFamily: 'Inter-Medium'
  },
  xAxisText: {
    fontSize: 12,
    color: WHITE,
    fontFamily: 'Inter-Medium'
  },
});

export default TransactionChart;

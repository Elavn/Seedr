import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { PRIMARY, ACCENT } from "@/styles/colors";

const screenWidth = Dimensions.get("window").width;

const Chart = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [1000, 1200, 900, 1400, 1800, 2200],
              strokeWidth: 2, // Optional
            },
          ],
        }}
        
        width={screenWidth - 70} // Adjust for padding
        height={220}
        yAxisLabel="₦"
        chartConfig={{
          backgroundGradientFrom: "#1E2923",
          backgroundGradientTo: "#08130D",
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 12 },
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: PRIMARY,
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
  },
  chart: {
    borderRadius: 8,
  },
});

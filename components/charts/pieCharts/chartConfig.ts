const ChartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0.5, // Opacity for the top gradient
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5, // Opacity for the bottom gradient
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Line/bar color
    strokeWidth: 2, // Line thickness (for LineChart)
    barPercentage: 0.5, // Width of each bar (for BarChart)
    useShadowColorFromDataset: false, // Use dataset color for shadow (for LineChart)
    decimalPlaces: 0, // Number of decimal places for chart values
    style: {
      borderRadius: 16, // Corner radius for the chart container
    },
    propsForBackgroundLines: {
      strokeWidth: 1, // Thickness of grid lines
      strokeDasharray: "5", // Dashed grid lines
      stroke: "#E0E0E0", // Color of grid lines
    },
    propsForLabels: {
      fontSize: 12, // Size of axis labels
      fontFamily: "Inter-Medium", // Custom font
    },
  };

  export default ChartConfig
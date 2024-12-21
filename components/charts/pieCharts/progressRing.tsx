import { WHITE } from "@/styles/colors";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import Icon from "react-native-vector-icons/Ionicons";

const TransactionsComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Pie chart data
  const pieChartData = [
    {
      value: 30,
      color: "#FFF",
      text: "Entertainment",
    },
    {
      value: 29,
      color: "rgba(255, 255, 255, 0.2)", 
      text: "Home",
    },
    {
      value: 41,
      color: "#FFD700", // Yellow
      text: "Children",
    },
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Transactions</Text>
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdown}>
          <Text style={styles.dropdownText}>{`By ${selectedFilter}`}</Text>
          <Icon name="chevron-down" size={16} color="#FFF" />
        </TouchableOpacity>
        {isDropdownVisible && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity
              onPress={() => {
                setSelectedFilter("spending");
                setDropdownVisible(false);
              }}
            >
              <Text style={styles.dropdownOption}>By spending</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedFilter("income");
                setDropdownVisible(false);
              }}
            >
              <Text style={styles.dropdownOption}>By income</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Pie Chart */}
      <View style={styles.chartContainer}>
        <PieChart
          data={pieChartData}
          donut
          radius={100}
          isAnimated
          animationDuration={500}
          strokeColor="#1B1B1F"
          strokeWidth={8}
          innerCircleColor="#1B1B1F" // Background color of the chart
          centerLabelComponent={() => (
            <Text style={styles.chartText}>12K</Text>
          )}
        />
      </View>

      {/* Category List */}
      <View style={styles.categoryList}>
        {pieChartData.map((item, index) => (
          <View key={index} style={styles.categoryItem}>
            <View
              style={[styles.colorIndicator, { backgroundColor: item.color }]}
            />
            <Text style={styles.categoryText}>{item.text}</Text>
            <Text style={styles.categoryPercentage}>{`${item.value}%`}</Text>
          </View>
        ))}
      </View>

      {/* Add Category Button */}
      <TouchableOpacity style={styles.addCategoryButton}>
        <Text style={styles.addCategoryText}>Add category</Text>
        <Icon name="add-circle" size={20} color={WHITE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(27, 27, 31, 0.6)',
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: WHITE,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 14,
    color: WHITE,
    marginRight: 5,
  },
  dropdownMenu: {
    position: "absolute",
    top: 25,
    right: 0,
    backgroundColor: "#2C2C2C",
    padding: 10,
    borderRadius: 8,
  },
  dropdownOption: {
    fontSize: 14,
    color: WHITE,
    paddingVertical: 5,
  },
  chartContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  chartText: {
    fontSize: 24,
    fontWeight: "bold",
    color: WHITE,
  },
  categoryList: {
    marginTop: 10,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  colorIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  categoryText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: WHITE,
  },
  categoryPercentage: {
    fontSize: 14,
    color: WHITE,
  },
  addCategoryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 8,
  },
  addCategoryText: {
    fontSize: 14,
    color: WHITE,
    marginRight: 5,
  },
});

export default TransactionsComponent;

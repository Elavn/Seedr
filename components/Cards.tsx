import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from "react-native";

interface CardProps {
  title: string;
  subtitle?: string;
  value: string;
  backgroundColor?: string;
  icon?: React.ReactNode;
  onEdit?: (newValue: string) => void;
}

const Card = ({ title, subtitle, value, backgroundColor = "#333", icon, onEdit }: CardProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newValue, setNewValue] = useState(value);

  const handleSave = () => {
    setModalVisible(false);
    if (onEdit) {
      onEdit(newValue); // Pass the updated value to the parent
    }
  };

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={styles.header}>
        {icon}
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.value}>{value}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

      {/* Edit Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit {title}</Text>
            <TextInput
              style={styles.input}
              value={newValue}
              onChangeText={setNewValue}
              placeholder="Enter new value"
              keyboardType="numeric"
            />
            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
  },
  subtitle: {
    fontSize: 14,
    color: "#aaa",
  },
  editText: {
    fontSize: 14,
    color: "#FFD700",
    textDecorationLine: "underline",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },
});

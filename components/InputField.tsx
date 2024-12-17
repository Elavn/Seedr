import {
    KeyboardTypeOptions,
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
    TouchableOpacity,
    TextStyle
  } from "react-native";
  import React, { useState } from "react";
  import { DANGER, INPUT, PLACEHOLDER_TXT, WHITE } from "@/styles/colors";
  import { FONT_SIZE_18 } from "@/styles/fonts";
  import { boolean } from "yup";
  import Ionicons from "@expo/vector-icons/Ionicons";

  
  
  interface InputFieldProps extends TextInputProps {
    onChangeText: (text: string) => void;
    icon?: React.ReactNode;
    iconSecondary?: React.ReactNode;
    iconPosition?: "left" | "right";
    style?: StyleProp<TextStyle>;
    value: string;
    label?: string;
    error?: string;
    editable?: boolean;
    labelStyles?: StyleProp<TextStyle>;
    inputContainerStyles?: StyleProp<ViewStyle>;
    isPassword?: boolean
  };
  
  const InputField = ({
    onChangeText,
    icon,
    iconSecondary,
    iconPosition,
    style,
    value,
    label,
    error,
    editable = true,
    labelStyles,
    inputContainerStyles,
    isPassword = false,
    ...props
  }: InputFieldProps) => {
    const [focused, setFocused] = useState(false);
    const [secureText, setSecureText] = useState(isPassword)
  
    const getFlexDirection = (): "row" | "row-reverse" | undefined => {
      if (icon && iconPosition) {
        if (iconPosition === "left") {
          return "row";
        } else if (iconPosition === "right") {
          return "row-reverse";
        }
      }
    };

  
    const togglePasswordVisibility = () => {
      setSecureText((prev) => !prev);
    };
  
    return (
      <View style={[styles.inputContainer, inputContainerStyles]}>
        <View>
          {label && <Text style={[styles.inputLabel, labelStyles]}>{label}</Text>}
        </View>
        <View
          style={[
            {
              alignItems: icon ? "center" : "baseline",
              flexDirection: getFlexDirection(),
            },
            styles.wrapper,
          ]}
        >
          <View style={styles.input}>{icon && icon}</View>
          <TextInput
            style={[styles.textInput, style]}
            onChangeText={onChangeText}
            value={value}
            editable={editable}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)} 
            placeholderTextColor={PLACEHOLDER_TXT}
            autoCapitalize="none"
            secureTextEntry={secureText}
            {...props}
          />
  
          {isPassword && (
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.pwdIcon}>
              <Ionicons
                name={secureText ? "eye-off-outline" : "eye-outline"}
                size={24}
                color={WHITE}
                style={styles.pwdIcon}
              />
            </TouchableOpacity>
          )}
          <View>{isPassword && iconSecondary}</View>
        </View>
        {error !== "" ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    );
  };
  
  export default InputField;
  
  const styles = StyleSheet.create({
    inputContainer: { marginBottom: 16, width: "100%" },
    inputLabel: {
      fontSize: FONT_SIZE_18,
      color: WHITE,
      fontFamily: "Inter",
      paddingBottom: 10,
    },
    textInput: {
      flex: 1,
      fontSize: 20,
      fontFamily: "Inter-SemiBold",
      width: "100%",
      color: WHITE,
      paddingLeft: 14,
    },
    wrapper: {
      height: 60,
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: INPUT,
    },
    error: {
      fontFamily: "Inter",
      fontSize: 12,
      color: DANGER,
    },
    icon: {
      paddingRight: 14,
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center'
  },
    pwdIcon: {
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
    }
  });
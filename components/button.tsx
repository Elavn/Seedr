import {
    ActivityIndicator,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
  } from "react-native";
  import React from "react";
  import { ACCENT, PRIMARY, WHITE } from "@/styles/colors";
  import { FONT_SIZE_20 } from "@/styles/fonts";
  
  interface ButtonProps {
    disabled?: boolean;
    icon?: any;
    onPress?: () => void;
    isLoading?: boolean;
    text: string;
    childContainerStyles?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    loading?: boolean;
  }
  
  const Button = ({
    disabled,
    icon,
    onPress,
    isLoading,
    text,
    childContainerStyles,
    buttonStyle,
    loading,
  }: ButtonProps) => {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[styles.btnContainer, buttonStyle]}
          disabled={disabled}
          onPress={onPress}
          activeOpacity={0.5}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={WHITE} />
          ) : (
            <View style={[styles.childContainer, childContainerStyles]}>
              {icon ? icon : null}
              {loading ? (
                <ActivityIndicator color={WHITE} size="small" />
              ) : (
                <Text style={styles.txt}>{text}</Text>
              )}
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Button;
  
  const styles = StyleSheet.create({
    btnContainer: {
      width: "100%",
      height: 48,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: ACCENT,
      borderRadius: 10,
      
    },
    txt: {
      color: WHITE,
      fontSize: FONT_SIZE_20,
      fontFamily: "Inter-Medium",
    },
    wrapper: {
      borderRadius: 10,
      width: '100%',
      backgroundColor: ACCENT,
      borderColor: PRIMARY,
      justifyContent: "center",
      alignSelf: "center",
      paddingHorizontal: 2,
      paddingVertical: 2,
    },
    childContainer: {},
  });
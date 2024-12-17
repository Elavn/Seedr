import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import InputField from '@/components/InputField'
import Background from '@/components/background'
import { ACCENT, WHITE } from '@/styles/colors'
import Spacer from '@/components/spacer'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FONT_SIZE_18, FONT_SIZE_20 } from '@/styles/fonts'
import Button from '@/components/button'
import { AuthStackList } from '@/src/navigation/auth-navigator'

type OnboardingScreenProps = NativeStackScreenProps<AuthStackList, "Login">;

const LoginScreen = ({navigation}: OnboardingScreenProps) => {
    const [email, setEmail] = useState("");
    const [tag, setTag] = useState("");
    const [password, setPassword] = useState("");

  return (
    <Background>
        
        <Image style={styles.logo}
        resizeMode='contain'
        source={require("../../../assets/images/logo.png")} />
        <Spacer height={90} />
        <Text style={styles.greetingTxt}>Hey,</Text>
        <Text style={styles.greetingTxt}>Get Your Account</Text>
        <Spacer height={60} />
        <View style={styles.pwdRow}>
        <Text style={styles.forgotPwd}>Create New Account /</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.reset}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={30} />
        
        <InputField
            onChangeText={setEmail}
            value={email}
            editable={true}
            placeholder='Email Address'
            keyboardType='email-address'
        />
        <InputField
            onChangeText={setTag}
            value={tag}
            editable={true}
            placeholder='Unigue Tag'
            keyboardType='default'
        />
         <InputField
            onChangeText={setPassword}
            value={password}
            placeholder='password'
            editable={true}
            isPassword={true}
            keyboardType='default'
        />
        <InputField
            onChangeText={setPassword}
            value={password}
            placeholder='Confirm Password'
            editable={true}
            isPassword={true}
            keyboardType='default'
        />
        <Spacer height={30} />

        <Button text='Login Now'
        />
    </Background>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    logo: {
        width: 79,
        height: 20,
      },
      greetingTxt: {
        fontSize: 45,
        color: WHITE,
        fontFamily: 'Inter-Medium'
      },
      details: {
        color: WHITE,
        fontFamily: 'Inter-Medium',
        fontSize: FONT_SIZE_18
      },
      forgotPwd: {
        color: WHITE,
        fontFamily: 'Inter-Medium',
        fontSize: FONT_SIZE_20,
        marginEnd: 12
      },
      pwdRow: {
        flexDirection: 'row',
      },
      reset: {
        color: ACCENT,
        fontFamily: 'Inter-Bold',
        fontSize: FONT_SIZE_20
      }
})
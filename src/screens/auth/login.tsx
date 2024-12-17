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
    const [EmailorUsername, setEmailorUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <Background>
        
        <Image style={styles.logo}
        resizeMode='contain'
        source={require("../../../assets/images/logo.png")} />
        <Spacer height={160} />
        <Text style={styles.greetingTxt}>Hey,</Text>
        <Text style={styles.greetingTxt}>Login Now!</Text>
        <Spacer height={60} />
        <View style={styles.pwdRow}>
        <Text style={styles.forgotPwd}>Input Existing Details /</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.reset}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={50} />
        
        <InputField
            onChangeText={setEmailorUsername}
            value={EmailorUsername}
            editable={true}
            placeholder='email or username'
            keyboardType='name-phone-pad'
        />
         <InputField
            onChangeText={setPassword}
            value={password}
            placeholder='password'
            editable={true}
            isPassword={true}
            keyboardType='default'
        />
        <Spacer height={7} />
        <View style={styles.pwdRow}>
        <Text style={styles.forgotPwd}>Forgot Password? /</Text>
        <TouchableOpacity>
            <Text style={styles.reset}>Reset</Text>
          </TouchableOpacity>
        </View>

        <Spacer height={70} />

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
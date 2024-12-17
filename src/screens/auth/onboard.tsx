import { StyleSheet, Text, Image } from 'react-native'
import Background from '@/components/background'
import { WHITE } from '@/styles/colors'
import Button from '@/components/button'
import { AuthStackList } from '@/src/navigation/auth-navigator'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Spacer from '@/components/spacer'
import { FONT_SIZE_20 } from '@/styles/fonts'

type OnboardingScreenProps = NativeStackScreenProps<AuthStackList, "Onboard">;

const Onboard = ({ navigation }: OnboardingScreenProps) => {

  return (
      <Background>
        <Image style={styles.logo}
        resizeMode='contain'
        source={require("../../../assets/images/logo.png")} />

      <Spacer height={40} />

        <Image style={styles.savingspana}
        resizeMode='contain'
        source={require("@/assets/images/savingspana.png")}>
          
        </Image>

        <Text style={styles.onboardtxt}>Saving Your Money</Text>
        <Text style={styles.titletxt}>Track the progress of your Savings and start a habit of saving with Seedr.</Text>

        <Spacer height={60} />
        <Button 
          text='Get Started'
          onPress={() => navigation.navigate("Login")}>
          </Button>
      </Background>
    
  );
};

export default Onboard

const styles = StyleSheet.create({
  logo: {
    width: 79,
    height: 20,
  },
  savingspana: {
    width: 420,
    height: 420,
    alignSelf:'center'
  },
  onboardtxt: {
    color: WHITE,
    alignSelf: 'center',
    fontFamily: 'Inter-Bold',
    fontSize: 35,
    marginBottom: 22
  },
  titletxt: {
    fontFamily: 'Inter-Regular',
    alignSelf: 'center',
    color: WHITE,
    fontSize: FONT_SIZE_20,
    textAlign: 'center',
    width: 300
  }
});
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import React from 'react';
import { colors } from '../constants/pdstyle'

  interface Props {
    navigation: any
  }

export const MainPage: React.FC<Props> = (props) => {
    

    const { navigation } = props;

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>PresentDay</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('BibleModal')}>
                <Text style={styles.buttonText}>To Bible</Text>
            </TouchableOpacity>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cream,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    text: {
        // fontFamily: "AnticSlab_400Regular",
        fontSize: 25,
    },
    buttonContainer: {
        backgroundColor: colors.maroon,
        borderRadius: 5,
        padding: 10,
        margin: 20
      },
      buttonText: {
        fontSize: 20,
        color: '#fff'
      }
});
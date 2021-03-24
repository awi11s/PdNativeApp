import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import React from 'react';
import { colors } from '../constants/pdstyle'
import { 
    useFonts,
    AnticSlab_400Regular 
  } from '@expo-google-fonts/antic-slab';


export const LoginPage: React.FC = () => {

    let [fontsLoaded] = useFonts({
        AnticSlab_400Regular
      });

    return (
        <View style={styles.container}>
            <Text>Opening page w/ login</Text>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>login</Text>
            </TouchableOpacity>
        </View>
    )
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
        fontFamily: "AnticSlab_400Regular",
        fontSize: 25,
    }
});
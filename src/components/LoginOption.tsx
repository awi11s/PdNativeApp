import { 
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
    Text
} from 'react-native';
import React from 'react';
import { 
    useFonts,
    AnticSlab_400Regular 
  } from '@expo-google-fonts/antic-slab';

interface ButtonProps {
    style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = (props) => {

    let [fontsLoaded] = useFonts({
        AnticSlab_400Regular
      });

    return (
        <TouchableOpacity style={[props.style, styles.container]}>
            <Text style={styles.text}>login</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F16E6E",
        padding: 10,
    },
    text: {
        fontFamily: "AnticSlab_400Regular",
        fontSize: 25,
    }
});
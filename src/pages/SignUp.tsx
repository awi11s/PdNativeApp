import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import React from 'react';
import { colors } from '../constants/pdstyle'


export const SignUp: React.FC = () => {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>sign up here</Text>
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
        fontSize: 25,
    }
});
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { colors } from '../constants/pdstyle'
import { SafeAreaView } from 'react-native-safe-area-context'


export const BibleHeader: React.FC = () => {

    return (
        <SafeAreaView style={styles.safeAreaView} edges={["top"]}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.text}>Genesis 1</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    safeAreaView: {
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.maroon,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
    buttonContainer: {
        backgroundColor: colors.cream,
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    text: {
        fontSize: 20
    }
});



import React from 'react';
import { StyleSheet, View } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from '../constants/pdstyle'
import { SafeAreaView } from 'react-native-safe-area-context';


export const BottomNav: React.FC = () => {

    return (
        <SafeAreaView style={styles.safeAreaView} edges={["bottom"]}>
            <View style={styles.container}>
                <FontAwesome name="book" style={styles.icons}/>

                <FontAwesome name="bars" style={styles.icons}/>

                <FontAwesome name="user" style={styles.icons}/>
            </View>
        </SafeAreaView>
    );
};


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
    icons: {
        fontSize: 20,
        width: 30
    }

  });
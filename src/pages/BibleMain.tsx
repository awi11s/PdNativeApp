import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BibleHeader } from '../components/BibleHeader'
import { genesis1 } from '../constants/data/genesis1'
import { colors } from '../constants/pdstyle'


export const BibleMain: React.FC = () => {
    return (
        <>
        <BibleHeader />
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    {genesis1}
                </Text>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: colors.cream,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 15,
  },
});
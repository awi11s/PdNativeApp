import { StatusBar } from 'expo-status-bar';
import Logo from './src/assets/angldshort1.png';
import React, { useState } from 'react';
import { useFonts, AnticSlab_400Regular } from '@expo-google-fonts/antic-slab';
import { StyleSheet, 
  Text,
  Image, 
  View
} from 'react-native';
import { Button } from './src/components/LoginOption';

export default function App() {

  let [fontsLoaded] = useFonts({
    AnticSlab_400Regular
  });

  return (
      <View style={styles.container}>
        <Text style={styles.text}>hopefully the logo shows up under this</Text>
          <Image source={Logo} style={{ width: 200, height: 200 }}/>
          <Text style={styles.text}>app home</Text>
          <Button />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontFamily: "AnticSlab_400Regular",
    fontSize: 25,
}
});

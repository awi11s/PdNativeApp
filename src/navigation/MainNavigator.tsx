import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { HomePage } from '../pages/HomePage';
import { BibleMain } from '../pages/BibleMain';
import { BibleModal } from '../components/modals/BibleModal'

const Stack = createStackNavigator();

export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Main" component={MainPage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="BibleMain" component={BibleMain} />
                <Stack.Screen name="BibleModal" component={BibleModal} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
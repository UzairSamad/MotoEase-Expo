import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useGetToken from '../hooks/useGetToken';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase"
const Stack = createStackNavigator();

export default function RootStack() {
    const token = useGetToken();
    console.log("Tokennnnnnnnnn-->", token);

    const [component, setComponent] = useState(<AuthStack />)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user, "USERRRRRRRRRRRRRRRRRRRRRR");
            if (user) {
                setComponent(<AuthStack />)
            }
            else {
                setComponent(<AuthStack />)
            }
        })
    }, [])
    
    return (
        <NavigationContainer>
            {component}
        </NavigationContainer>
    )
    // return (
    //     <Stack.Navigator>
    //         {!token ?
    //             <Stack.Screen name="Auth" component={AuthStack} /> :
    //             <Stack.Screen name="App" component={AppStack} />
    //         }
    //     </Stack.Navigator>
    // );
}
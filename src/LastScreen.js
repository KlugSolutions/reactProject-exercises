import React, { useEffect } from "react";
import {
    Text,
    View,
} from 'react-native'
import MyButton from "./MyButton";

import Style from "./Style";

const LastScreen = ({navigation, route}) => {

    useEffect(
        () => {
            console.log(route)
        }
    )
    const firstName = route.params ? route.params.firstName : ""
    const goBack = () => {
        navigation.navigate("MainScreen")
        
    }
    const changeScreen = () => {
        navigation.navigate("HomeScreen")
    }
    return (
        <View style={Style.view}>
            <Text style={Style.text}>Ekran trzeci 'Last'</Text>
            <Text style={Style.textSmall}>Do zobaczenia {firstName}</Text>
            <MyButton
                onPressFunction={changeScreen}
                buttonText={"Przejdź do pierwszego ekranu"}
                color={'#ccc'}
            />
            <MyButton
                onPressFunction={goBack}
                buttonText={"Wróć do drugiego ekranu"}
                color={"#ccc"}
            />
            {/* <Pressable 
                onPress={goBack}
                style={styles.pressable}
                >
                <Text>Powrót</Text>
            </Pressable> */}
        </View>
        
    )
}

export default LastScreen
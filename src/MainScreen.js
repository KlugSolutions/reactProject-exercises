import React, { useEffect } from "react";
import {
    Text,
    View,
} from 'react-native'
import MyButton from "./MyButton";

import Style from "./Style";

const MainScreen = ({ navigation, route }) => {

    useEffect(
        () => {
            console.log(route)
        }
    )
    const firstName = route.params ? route.params.firstName : ""
    const last = route.params ? route.params.last : ""
    const home = route.params ? route.params.home : ""
    const main = 'MainScreen'
    const goBack = () => {
        navigation.goBack('HomeScreen', { main })
        // navigation.replace("Home")
    }
    const changeScreen = () => {
        navigation.navigate("LastScreen", { firstName }, { main })
    }
    return (
        <View style={Style.view}>
            <Text style={Style.text}>Ekran drugi 'Main'</Text>
            <Text style={Style.textSmall}>Witaj {firstName}</Text>
            <MyButton
                onPressFunction={changeScreen}
                buttonText={"Przejdź do trzeciego ekranu"}
                color={'#ccc'}
            />
            <MyButton
                onPressFunction={goBack}
                buttonText={"Wróć do pierwszego ekranu"}
                color={"#ccc"}
            />
            <Text style={Style.textSmall}>Wywołano z:
                {last}? {last} : {home}</Text>
        </View>

    )
}

export default MainScreen
import React from "react";
import {View, Text} from "react-native";
import {ButtonComponent} from "./mainComponents/buttonComponent";
import {AppColor} from "../global/AppColor";

export function MainPage({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ButtonComponent title={"Créer un quiz"} color={AppColor.BUTTON_COLOR} callbackFunction={()=>{
                navigation.navigate("cQuiz");
            }}/>
            <ButtonComponent title={"Faire un quiz"}/>
        </View>
    );
}

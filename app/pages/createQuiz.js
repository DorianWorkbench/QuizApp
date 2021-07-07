import React, {useState} from "react";
import {Text, TextInput, View} from "react-native";
import {TitleForm} from "./mainComponents/titleForm";
import {AppColor} from "../global/AppColor";

export function CreateQuiz({navigation}){
    return (
      <View>
          <TitleForm
              libelle={"le nom de votre quiz"}
              placeHolder={"nom"}
              color={AppColor.BUTTON_COLOR}
              validationTitle={"Commencer"}
              onPressCallback={()=>{
                  navigation.navigate("qQuiz");
              }}
          />
      </View>
    );
}

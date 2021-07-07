import {SelectPseudo} from "../pages/selectPseudo";
import {MainPage} from "../pages/main";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React, {useContext} from "react";
import {PseudoContext} from "../context/pseudoContext";
import {CreateQuiz} from "../pages/createQuiz";
import {Qquiz} from "../pages/qQuiz";

const Stack = createStackNavigator();

export function Navigation(){
    const {pseudo} = useContext(PseudoContext);
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"pseudo"}>
                <Stack.Screen name="pseudo" component={SelectPseudo}/>
                <Stack.Screen name="home" options={{title: "Bienvenue "+pseudo, headerLeft:null}} component={MainPage}/>
                <Stack.Screen name="cQuiz" options={{title: "Création du quiz"}} component={CreateQuiz}/>
                <Stack.Screen name="qQuiz" options={{title: "Saisie des questions réponses", headerLeft:null}} component={Qquiz}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

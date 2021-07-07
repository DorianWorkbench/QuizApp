import React, {useContext, useState} from "react";
import {Button, Text, TextInput, View} from "react-native";
import {PseudoContext, PseudoContextProvider} from "../context/pseudoContext";

export function SelectPseudo({navigation}){
    const [value, onChangeText] = useState();

    const {pseudo, setPseudo} = useContext(PseudoContext);

    function storePseudo(){
      setPseudo(value);
    }
    return(
            <View>
                <Text>Veuillez saisir votre pseudo</Text>

                <TextInput
                    onChangeText={text => onChangeText(text)}
                    placeholder={"Saisie du pseudo"}
                />
                <Button
                    onPress={()=>{
                        if(value){
                            storePseudo();
                            navigation.navigate('home');
                        }
                    }}
                    title={"Enregistrer le pseudo"}
                />
            </View>
    );
}

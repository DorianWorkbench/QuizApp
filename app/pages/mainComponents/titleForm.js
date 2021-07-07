import React, {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";

export function TitleForm({libelle, placeHolder, color, validationTitle, onPressCallback}){
    const [input, setInput] = useState();
    return (
        <View>
            <Text>Veuillez saisir {libelle}</Text>
            <TextInput
                placeholder={placeHolder}
                onChange={text=>setInput(text)}
            />
            <Button
                title={validationTitle}
                color={color}
                onPress={onPressCallback}
            />
        </View>
    );
}

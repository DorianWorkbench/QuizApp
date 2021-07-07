import React from "react";
import {Button} from "react-native";


export function ButtonComponent({title, callbackFunction, color}){
    return (
        <Button
            title={title}
            onPress={callbackFunction}
            color={color}
        />
    );
}

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MainPage} from "./app/pages/main";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {SelectPseudo, selectPseudo} from "./app/pages/selectPseudo";
import {PseudoContext, PseudoContextProvider} from "./app/context/pseudoContext";
import {Navigation} from "./app/navigation/navigation";


export default function App() {
    return (
      <PseudoContextProvider>
          <Navigation/>
      </PseudoContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

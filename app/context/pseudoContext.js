import React, {createContext, useState} from "react";

export const PseudoContext = createContext({});
const { Provider } = PseudoContext;

export function PseudoContextProvider({children}){
    const [pseudo, setPseudo] = useState("test");
    return (
        <Provider value={{ pseudo, setPseudo }}>{children}</Provider>
    );
}

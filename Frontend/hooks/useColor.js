import { createContext, useContext, useEffect, useState } from "react";


const ColorContext = createContext();


export function ColorWrapper({ children }) {
    const [color, setColor] = useState("rgb(0, 158, 251)");

    useEffect(() => {
        setColor(localStorage.getItem("color") || "rgb(0, 158, 251)");
    }, []);

    return (
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    )
}

export function useColors () {
    return useContext(ColorContext);
};
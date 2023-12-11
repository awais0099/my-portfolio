"use client";
import React, { createContext, useState } from "react";

type SectionType = "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact";

type ActiveSectionContextType = {
    activeSection: SectionType,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>,

} ;

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

type ActiveSectionContextProviderPropsType = {
    children: React.ReactNode
}

export function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderPropsType) {
    
    const [ activeSection, setActiveSection ] = useState<SectionType>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

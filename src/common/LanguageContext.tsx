import React, { useContext, useState, createContext } from 'react'

interface ILanguageContext {
    language: string
}

interface ILanguageUpdateContext {
    changeLanguage: (lang: string) => void
}

const LanguageContext = createContext<ILanguageContext | null>(null)

const LanguageUpdateContext =
    createContext<ILanguageUpdateContext | null>(null)

export function useLanguage(): any {
    return useContext(LanguageContext)
}

export function useLanguageUpdate(): any {
    return useContext(LanguageUpdateContext)
}

export function LanguageProvider({ children }: any): any {
    const [language, setLanguage] = useState('eng')

    function changeLanguage(lang: string): void {
        lang === 'eng' ? setLanguage('eng') : setLanguage('magyar') // move to enums
    }

    return (
        <LanguageContext.Provider value={{ language }}>
            <LanguageUpdateContext.Provider value={{ changeLanguage }}>
                {children}
            </LanguageUpdateContext.Provider>
        </LanguageContext.Provider>
    )
}

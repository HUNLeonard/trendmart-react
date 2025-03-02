import React, { createContext, useCallback, useState } from 'react'

interface DarkThemeProviderContext {
  isDarkTheme: boolean,
  toggleDarkTheme: () => void
}


export const DarkThemeProviderContext = createContext<DarkThemeProviderContext | null>(null)

const DarkThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleDarkTheme = useCallback(() => {
    setIsDarkTheme(p => !p)
  }, [])

  return (
    <DarkThemeProviderContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </DarkThemeProviderContext.Provider>
  )
}

export default DarkThemeProvider
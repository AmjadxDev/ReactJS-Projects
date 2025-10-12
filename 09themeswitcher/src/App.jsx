import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './componentt/ThemeBtn'
import Card from './componentt/Card'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme mode
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
  <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* Theme button component */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card />
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App

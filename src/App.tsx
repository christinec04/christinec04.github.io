import { Main } from './components/Main'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/theme-toggle'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="absolute top-4 left-4 z-50">
    <div className="relative">
      <ModeToggle />
    </div>
  </div>


        <div className="fixed flex mx-auto w-screen h-screen items-center justify-center z-10">
          <Main />
        </div>
    </ThemeProvider>
  )
}

export default App

import { Main } from './components/Main'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/theme-toggle'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>

      <div className="fixed flex mx-auto w-screen h-screen items-center justify-center z-10">
          

          {/* Main Content */}
          <Main />
        </div>
    </ThemeProvider>
  )
}

export default App

import { TabsDemo } from './components/TabsDemo'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/theme-toggle'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full flex flex-col">
        <div className="flex flex-col p-8 border-20">
          {/* Header */}
            <ModeToggle />

          {/* Main Content */}
          <TabsDemo />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

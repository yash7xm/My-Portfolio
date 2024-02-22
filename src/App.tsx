import Routes from "./Routes";
import { ThemeProvider } from "@/components/common/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes />
    </ThemeProvider>
  );
}

export default App;

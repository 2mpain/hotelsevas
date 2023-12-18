import "./App.css";
import { ThemeProvider } from "@/components/readyToUse/theme-provider";
import "./index.css";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import { MainPage } from "./components/main-page";
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;

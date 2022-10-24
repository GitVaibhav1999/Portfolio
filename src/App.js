import "./App.scss";

import { BrowserRouter } from "react-router-dom";
import { NavigatorStrip } from "./components/NavigatorStrip/NavigatorStrip";
import { NavigationRoutes } from "./components/Routes/Routes";
import useThemeStore from "./Store/ThemeStore";
import { ThemeToggle } from "./components/NavigatorStrip/ThemeToggle";

function App() {

  const theme = useThemeStore(state=> state.theme)

  return (
    <div className={`App theme__${theme}`}>
      {/* <div className="paperOverlay"></div> */}
      <BrowserRouter>
        <NavigationRoutes />
        <NavigatorStrip />
        <ThemeToggle />
      </BrowserRouter>
    </div>
  );
}

export default App;

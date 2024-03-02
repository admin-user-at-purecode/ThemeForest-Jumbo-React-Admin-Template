import AppProvider from "./components/AppProvider";
import AppTheme from "./Theme/AppTheme";
import {config} from "./config/main";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <AppProvider activeLayout={config.defaultLayout}>
        <AppTheme init={config.theme}>
        <Dashboard/>
         </AppTheme>
      </AppProvider>

  );
}

export default App;

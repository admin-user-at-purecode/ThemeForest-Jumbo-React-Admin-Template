import AppTheme from "./Theme/AppTheme";
import { config } from "./config/main";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AppTheme init={config.theme}>
      <Dashboard />
    </AppTheme>
  );
}

export default App;

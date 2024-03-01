import React from "react";
import AppProvider from "./components/AppProvider";
import AppLayout from "./components/AppProvider/AppLayout";
import AppTheme from "./Theme/AppTheme";
import {config} from "./config/main";

function App() {
  return (
      <AppProvider activeLayout={config.defaultLayout}>
        <AppTheme init={config.theme}>
          <AppLayout>

          </AppLayout>
         </AppTheme>
      </AppProvider>

  );
}

export default App;

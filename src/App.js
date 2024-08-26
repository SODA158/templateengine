import { Route, Routes } from "react-router";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Routes>
      {AppRoutes.map((route, index) => {
        const { element, ...rest } = route;
        return <Route key={index} {...rest} element={element} />;
      })}
    </Routes>
  );
}

export default App;

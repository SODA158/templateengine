import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import AppRoutes from './AppRoutes';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Routes>
    {AppRoutes.map((route, index) => {
      const { element, ...rest } = route;
      return <Route key={index} {...rest} element={element} />;
    })}
  </Routes>
  );
}

export default App;

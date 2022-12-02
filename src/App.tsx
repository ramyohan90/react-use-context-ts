
import { useReducer } from 'react';
import './App.css';
import { DisplayComponent } from './components/Display';
import { LoginComponent } from './components/Login';
import { AuthStateReducer } from './reducer/AuthReducer';
import { AuthContext, AuthContextStateInit, AuthStateInit } from './store/context';

function App() {

  const [data, setData] = useReducer(AuthStateReducer, AuthStateInit);

  return (
    <AuthContext.Provider value={{data, setData}}>
    <div className="App">
      Hello React App
      <LoginComponent />
      <DisplayComponent />
    </div>
    </AuthContext.Provider>
  );
}

export default App;

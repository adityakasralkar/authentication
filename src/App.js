import React,{useContext} from 'react';
import AuthContex from './components/store/auth-contex';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';


function App() {

const ctx = useContext(AuthContex);
  return (
   
    <React.Fragment>
      <MainHeader  />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home  />}
      </main>
      </React.Fragment>
  
  );
}

export default App;

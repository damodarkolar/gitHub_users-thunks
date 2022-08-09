import './App.css';
import { NavBar } from './components/NavBar';
import {Routes, Route } from "react-router-dom"
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/LoginPage';
import { SignUp } from './pages/SignUpPage';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>            
    </div>
  );
}

export default App;

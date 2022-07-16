import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizMaker from './components/QuizMaker';
import { AuthContextProvider } from './firebase/AuthContext';


function App() {

  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          <Routes>
            <Route exact path='/' element={<QuizMaker />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;

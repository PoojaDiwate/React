import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './component/Home';
import Profile from './component/Profile';
import Navbar from './component/Navbar';
import WeekDays from './WeekDays';
import ToggleButton from './ToggleButton';
import LifeCycle from './LifeCycle';
import RandomUserData from './LifeCycle';
import FruitArray from './FruitArray';
import ToDoList from './ToDoList';
import LoginForm from './LoginForm';
import Counter from './Counter';
import CounterButton from './CounterButton';
import CountComponent from './CountComponent';
import SignIn from './SignIn';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/profile' element={<Profile/>}>Profile</Route>
        </Routes>
      </Router> */}

      {/* <WeekDays></WeekDays> */}
      {/* <ToggleButton></ToggleButton> */}
      {/* <LifeCycle></LifeCycle> */}
      {/* <FruitArray></FruitArray> */}
      {/* <ToDoList></ToDoList> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<LoginForm></LoginForm>}></Route>
          <Route path="*" element={<h1>404 error page not found</h1>}></Route>
        </Routes>
      </Router> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<LoginForm></LoginForm>}>Login Form</Route>
          <Route path="*" element={<h4>404 page not found error</h4>}></Route>
        </Routes>
      </Router> */}
      {/* <Counter initialNumber={0} /> */}
      {/* <CounterButton></CounterButton> */}
      {/* <CountComponent></CountComponent> */}
      {/* <SignIn></SignIn> */}
      
      </div>
  );
};

export default App;

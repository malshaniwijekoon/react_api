import './App.css';
import User from './User';
import UserList from './UserList';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  

function App() {
  return (
    <div>
      <Routes>  
          <Route exact path='/' element={< UserList />}></Route>  
          <Route path='/users/:id' element={< User />}></Route>
      </Routes>  
    </div>
  );
}

export default App;

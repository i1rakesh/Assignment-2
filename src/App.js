import SignUp from './component/SignUp'
import SignIn from './component/SignIn'
import Home from './component/Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/">
            <Route index element={<SignIn/>} />
            <Route path='home' element={<Home/>}/>
            <Route path='register' element={<SignUp/>}/>
            </Route>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;

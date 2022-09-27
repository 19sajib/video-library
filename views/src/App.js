import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector }from 'react-redux'

import Home from './pages/Home'
import Auth from './pages/Auth'

import Navbar from './components/Navbar'

const App = () => {

  const user = useSelector((state)=> state.authReducer.authData)

  return (
    <div style={{margin: '10px'}}>
      <Navbar />
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/auth" element={ user ? <Navigate to = "/"/> : <Auth /> } />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector }from 'react-redux'

import Home from './pages/Home'
import Auth from './pages/Auth'

const App = () => {

  const user = useSelector((state)=> state.authReducer.authData)

  return (
    <div>
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

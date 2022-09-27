import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
// import Auth from './pages/Auth'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Home />} />
              {/* <Route path="/auth" element={<Auth />} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

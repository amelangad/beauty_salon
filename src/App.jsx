import './App.css'
import { useState, useEffect } from 'react';
import Loading from './components/Loading'
import Home from './pages/Home'
import Treatments from './pages/Treatments'
import { Routes, Route } from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }
    , [])

  return (
    <div className="App">
      {loading ?
        <Loading />
        :
      <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/treatments" element={<Treatments />}>
          </Route>
        </Routes>
}
    </div>
  )
}

export default App

import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Offert from './components/Offert'
import Footer from './components/Footer'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true);
  const load = document.querySelector('.loading')

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
        <>
          <Header />
          <Offert />
          <Footer />
        </>
      }
    </div>
  )
}

export default App

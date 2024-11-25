import { useState } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './Login'
import Registration from './Registration'
import MainLayout from './MainLayout'
import WhetherPage from './WhetherPage'

function App() {
  const [rdata, setData] = useState(0)

  return (
    <>
      <div>
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<MainLayout />} >
       <Route path='/login' element={<Login onLogin={rdata} />} />
       <Route path='/registration' element={<Registration onRegister={setData} />} />
       </Route>
       <Route path='/whetheage' element={<WhetherPage />} />

       </Routes>
       </BrowserRouter>
      </div>
    </>
  )
}

export default App

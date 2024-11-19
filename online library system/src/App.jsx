
import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './component/Header'
import { Provider } from 'react-redux'
import Appstore from './Utils/AppStore'



function App() {
  

  return (
    <>
    <Provider store={Appstore}>
    <Header/>
    <Outlet/>
    </Provider>
    
    
      
    </>
  )
}

export default App

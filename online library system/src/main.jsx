import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import AddBook from './component/AddBook.jsx'
import BrowseBook from './component/BrowseBook.jsx'
import Error from './component/Error.jsx'
import BookHome from './component/BookHome.jsx'
import BookDetail from './component/BookDetail.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<BookHome/>
    
      },

      {
        path:"/AddBook",
        element:<AddBook/>
    
      },
      {
        path:"/BrowseBook",
        element:<BrowseBook/>
      },
      {
        path:"/Book/:id",
        element:<BookDetail/>
      }

    ],
    errorElement:<Error/>
 
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={appRouter}/>
  </StrictMode>,
)

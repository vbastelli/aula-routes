import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'

//criando função createBrowserRouter
const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,


    children:[
        {path:'/home', element:<Home/>},
        {path:'/login', element:<Login/>},
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

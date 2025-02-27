import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PostCreate from './pages/PostCreate.tsx'
import PostId from './pages/PostId.tsx'
import PostUpdate from './pages/PostUpdate.tsx'
import Home from './pages/Home.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children:[
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/post/:id',
      element: <PostId />
    },
    {
      path: '/post/create',
      element : <PostCreate />
    },
    {
      path: '/post/update/:id',
      element : <PostUpdate />
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

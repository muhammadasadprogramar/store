import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import { DataProvider } from './context/DataProvider.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {path: '/', element: <Home />},
    {path: 'products', element: <Products />},
    {path: 'about', element: <About />},
    {path: 'blog', element: <Blog />},
    {path: 'contact', element: <Contact />},
    {path: 'cart', element: <Cart />}
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)

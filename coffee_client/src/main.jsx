import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import AdminProducts from './components/AdminProducts'
import AuthProvider from './components/provider/AuthProvider'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await fetch('http://localhost:5000/coffee');
          if (!res.ok) throw new Response('Failed to load coffees', { status: res.status });
          return res.json();
        }
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Registration />
      },
      {
        path: 'update',
        element: <UpdateCoffee />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'admin',
        element: (
          <PrivateRoute>
            <AdminProducts />
          </PrivateRoute>
        )
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
      },
      {
        path: 'add',
        element: (
          <PrivateRoute>
            <AddCoffee />
          </PrivateRoute>
        )
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)

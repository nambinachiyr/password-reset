import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import LogIn from './pages/LogIn.jsx'
import Forget_PW from './pages/Forget_PW.jsx'
import ResetPage from './pages/ResetPage.jsx'
import CreateAccount from './pages/CreateAccount.jsx'
import Dashboard from './pages/Dashboard.jsx'

// Routes with path
const routes = [
    {
        path:'/',
        element:<LogIn/>
    },
    {
        path:'/createaccount',
        element:<CreateAccount />
    },
    {
        path:'/forgetpassword',
        element:<Forget_PW/>
    },
    {
        path:'/password_reset?',
        element:<ResetPage/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    }
]
const App = () => {
    const router = createBrowserRouter(routes,
        {
            future: {
                v7_relativeSplatPath: true,
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
                v7_partialHydration: true,
                v7_skipActionErrorRevalidation: true,
            },
        }
    )
  return (
    <>
        <RouterProvider
            router = {router}
            future={{
                v7_startTransition: true,
            }}
        />
    </>
  )
}

export default App
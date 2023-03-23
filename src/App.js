import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';

import Context from './pages/Context';
import Home from './pages/Home';
import Redux from './pages/Redux';
import State from './pages/State';
import NotFound from './pages/NotFound';

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />  
      <Route path='context' element={<Context />} />
      <Route path='state' element={<State />} />
      <Route path='redux' element={<Redux />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

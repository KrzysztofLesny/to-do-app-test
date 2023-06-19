import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';

import { Context } from './pages/Context';
import { Home } from './pages/Home';
import { Redux } from './pages/Redux';
import { State } from './pages/State';
import { NotFound } from './pages/NotFound';
import { SwapiLayout } from './layouts/SwapiLayout';
import { Effect } from './pages/Effect';
import { Query } from './pages/Query';
import { Loader, swapiLoader } from './pages/Loader';
import { ApiNotFound } from './pages/ApiNotFound';

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />  
      <Route path='context' element={<Context />} />
      <Route path='state' element={<State />} />
      <Route path='redux' element={<Redux />} />
      <Route path='api' element={<SwapiLayout />} errorElement={<ApiNotFound />}>
        <Route path='effect' element={<Effect />}/>
        <Route path='query' element={<Query />} />
        <Route path='loader' element={<Loader />} loader={swapiLoader} />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

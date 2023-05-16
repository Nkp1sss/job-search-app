import './App.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Search from '../../pages/Search/Search';
import Vacancy from '../../pages/Vacancy/Vacancy';
import Favorites from '../../pages/Favorites/Favorites';
import Notfound from '../../pages/Notfound/Notfound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Search />} />
      <Route path="vacancy" element={<Vacancy />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

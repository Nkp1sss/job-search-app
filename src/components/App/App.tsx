import './App.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { useAuthQuery } from '../../redux/slices/SuperjobAPI';
import { AuthType } from '../../types';
import { MantineProvider } from '@mantine/core';
import MainLayout from '../../layouts/MainLayout';
import Search from '../../pages/Search/Search';
import Vacancy from '../../pages/Vacancy/Vacancy';
import Favorites from '../../pages/Favorites/Favorites';
import Notfound from '../../pages/Notfound/Notfound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Search />} />
        <Route path="vacancy" element={<Vacancy />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </>
  )
);

function App() {
  const getDataFromLocalStorage = (): AuthType => {
    const authString = localStorage.getItem('auth');
    return JSON.parse(authString as string);
  };
  const setDataToLocalStorage = (data: AuthType): void => {
    localStorage.setItem('auth', JSON.stringify(data));
  };

  const { ttl } = getDataFromLocalStorage();

  const { data } = useAuthQuery('', {
    skip: ttl * 1000 > Date.now(),
  });

  if (data) setDataToLocalStorage(data);

  return (
    <MantineProvider withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;

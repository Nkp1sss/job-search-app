import './App.scss';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import MainLayout from '../../layouts/MainLayout';
import Search from '../../pages/Search/Search';
import VacancyDescription from '../../pages/Vacancy/VacancyDescription';
import Favorites from '../../pages/Favorites/Favorites';
import NotFound from '../../pages/Notfound/Notfound';

import { AuthType } from '../../types';
import { useAuthQuery } from '../../redux/slices/SuperjobAPI';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Search />} />
        <Route path="vacancy" element={<VacancyDescription />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  const getAuthFromLocalStorage = (): AuthType => {
    const authString = localStorage.getItem('auth');
    return JSON.parse(authString as string);
  };
  const setAuthToLocalStorage = (data: AuthType): void => {
    localStorage.setItem('auth', JSON.stringify(data));
  };

  const { ttl } = getAuthFromLocalStorage();

  const { data } = useAuthQuery('', {
    skip: ttl * 1000 > Date.now(),
  });
  if (data) setAuthToLocalStorage(data);

  return (
    <MantineProvider withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;

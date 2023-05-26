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
    if (authString) return JSON.parse(authString);
    else
      return {
        access_token:
          'v3.r.137440105.0229c96f0b428d9d6a015e41938bf6277e1ef7aa.59912cd729e49171c4d420cad5cb6e2b1a836b70',
        refresh_token:
          'v3.r.137440105.8c1f0af3195f48bcd6160a2eb499d101d893cb37.45a2f06ec9bed618f419e1be2c7bc6d50e6ad05c',
        ttl: 1,
        expires_in: 604800,
        token_type: 'Bearer',
        reg_user_resumes_count: 1,
      };
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

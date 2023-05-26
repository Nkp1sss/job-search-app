import './Vacancies.scss';

import { Loader } from '@mantine/core';

import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';

import Vacancy from './Vacancy/Vacancy';

import { VacanciesType, VacancyType } from '../../types';

type VacanciesPropsType = {
  isFetching: boolean;
  vacancies: VacanciesType;
};

function Vacancies({ isFetching, vacancies }: VacanciesPropsType) {
  const savedVacancies = useAppSelector((store) => store.savedVacancies.vacancies);

  useEffect(() => {
    localStorage.setItem('savedVacancies', JSON.stringify(savedVacancies) || '[]');
  }, [savedVacancies]);

  return (
    <div className="vacancies-container">
      {isFetching ? (
        <Loader width="100%" color="indigo" size="xl" />
      ) : (
        vacancies &&
        vacancies.objects &&
        vacancies.objects.map((vacancy: VacancyType) => {
          return <Vacancy key={vacancy.id} {...vacancy} />;
        })
      )}
    </div>
  );
}

export default Vacancies;

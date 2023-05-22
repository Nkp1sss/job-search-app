import './Vacancies.scss';

import { Loader } from '@mantine/core';

import Vacancy from './Vacancy/Vacancy';

import { VacanciesType, VacancyType } from '../../types';

type VacanciesPropsType = {
  isFetching: boolean;
  vacancies: VacanciesType;
};

function Vacancies({ isFetching, vacancies }: VacanciesPropsType) {
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

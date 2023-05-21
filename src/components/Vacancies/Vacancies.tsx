import './Vacancies.scss';
import Vacancy from './Vacancy/Vacancy';
import { Loader } from '@mantine/core';
import { useGetVacanciesQuery } from '../../redux/slices/SuperjobAPI';
import { VacancyType } from '../../types';

function Vacancies() {
  const { data: vacancies, isFetching } = useGetVacanciesQuery('');
  console.log(vacancies);
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

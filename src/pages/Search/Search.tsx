import './Search.scss';

import { useEffect } from 'react';
import { Pagination as MantinePagination } from '@mantine/core';

import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';
import Vacancies from '../../components/Vacancies/Vacancies';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { useGetVacanciesQuery } from '../../redux/slices/SuperjobAPI';
import { changeTotal } from '../../redux/slices/vacancies';
import { changePage } from '../../redux/slices/options';

import { MAX_VACANCIES, COUNT_VACANCY_OF_PAGE } from '../../constants';

function Search() {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector((store) => store.options.page);
  const currentVacanciesTotal = useAppSelector((store) => store.vacancies.total);
  const searchVacancyName = useAppSelector((store) => store.options.searchVacancyName);
  const catalogKey = useAppSelector((store) => store.options.catalogKey);
  const payment_from = useAppSelector((store) => store.options.payment_from);
  const payment_to = useAppSelector((store) => store.options.payment_to);

  const {
    data: vacancies,
    isFetching,
    isError,
  } = useGetVacanciesQuery({
    page: `${currentPage - 1}`,
    keyword: searchVacancyName,
    catalogues: catalogKey,
    payment_from,
    payment_to,
  });

  useEffect(() => {
    if (vacancies) {
      dispatch(changeTotal(Math.min(vacancies.total, MAX_VACANCIES)));
    }
  }, [vacancies]);

  return (
    <main className="job-search">
      <div className="container">
        <Filters />
        <div className="vacancies">
          <SearchBar />
          <Vacancies vacancies={vacancies} isFetching={isFetching} />
          {!isFetching && !isError && (
            <MantinePagination
              className="pagination-container"
              total={currentVacanciesTotal / COUNT_VACANCY_OF_PAGE}
              value={currentPage}
              onChange={(newPage) => dispatch(changePage(newPage))}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default Search;

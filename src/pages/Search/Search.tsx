import './Search.scss';

import { useEffect } from 'react';

import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';
import Vacancies from '../../components/Vacancies/Vacancies';
import Pagination from '../../components/Pagination/Pagination';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { useGetVacanciesQuery } from '../../redux/slices/SuperjobAPI';
import { changeTotal } from '../../redux/slices/vacancies';

import { MAX_VACANCIES } from '../../constants';

function Search() {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector((store) => store.options.page);
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
          {!isFetching && !isError && <Pagination />}
        </div>
      </div>
    </main>
  );
}

export default Search;

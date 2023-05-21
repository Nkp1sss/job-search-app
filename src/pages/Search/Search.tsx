import './Search.scss';
import { useEffect } from 'react';
import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';
import Vacancies from '../../components/Vacancies/Vacancies';
import Pagination from '../../components/Pagination/Pagination';
import { useGetVacanciesQuery } from '../../redux/slices/SuperjobAPI';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeTotal } from '../../redux/slices/vacancies';
import { MAX_VACANCIES } from '../../constants';

function Search() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((store) => store.options.page);
  const searchVacancyName = useAppSelector((store) => store.options.searchVacancyName);
  const {
    data: vacancies,
    isFetching,
    isError,
  } = useGetVacanciesQuery({ page: `${currentPage - 1}`, keyword: searchVacancyName });

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

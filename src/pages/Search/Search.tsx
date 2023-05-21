import './Search.scss';
import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';
import Vacancies from '../../components/Vacancies/Vacancies';
import Pagination from '../../components/Pagination/Pagination';
import { useGetVacanciesQuery } from '../../redux/slices/SuperjobAPI';
import { useAppSelector } from '../../hooks';

// При нажатии на кнопку Сохранить или на enter в поиске по вакансиям, сохранять вакансию в store,
// здесь ее получать через useAppSelector => и передавать параметром в запрос,
// тоже самое делать с отраслью и зп.

function Search() {
  const currentPage = useAppSelector((store) => store.options.page);
  const {
    data: vacancies,
    isFetching,
    isError,
  } = useGetVacanciesQuery({ page: `${currentPage - 1}` });

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

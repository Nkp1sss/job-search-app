import './Search.scss';
import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';
import Vacancies from '../../components/Vacancies/Vacancies';

function Search() {
  return (
    <main className="job-search">
      <div className="container">
        <Filters />
        <div className="vacancies">
          <SearchBar />
          <Vacancies />
        </div>
      </div>
    </main>
  );
}

export default Search;

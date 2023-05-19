import './Search.scss';
import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';

function Search() {
  return (
    <main className="job-search">
      <div className="container">
        <Filters />
        <div className="vacancies">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}

export default Search;

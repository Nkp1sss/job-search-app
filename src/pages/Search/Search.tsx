import './Search.scss';
import Filters from '../../components/Filters/Filters';

function Search() {
  return (
    <main className="job-search">
      <div className="container">
        <Filters />
      </div>
    </main>
  );
}

export default Search;

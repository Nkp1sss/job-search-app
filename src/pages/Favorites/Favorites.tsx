import './Favorites.scss';

import { useNavigate } from 'react-router-dom';

import Vacancy from '../../components/Vacancies/Vacancy/Vacancy';

import { VacancyType } from '../../types';
import { getDataFromLocalStorage } from '../../components/Vacancies/Vacancy/utils';

import man from '../../assets/images/man.png';

function Favorites() {
  const vacancies = getDataFromLocalStorage();
  const navigate = useNavigate();

  return (
    <div className="favorites">
      <div className="container">
        <div className="saved-vacancies-container">
          {vacancies && JSON.stringify(vacancies) !== '[]' ? (
            vacancies.map((vacancy: VacancyType) => {
              return <Vacancy key={vacancy.id} {...vacancy} />;
            })
          ) : (
            <div className="nothing">
              <img src={man} alt="man" width="240px" height="230px" />
              <p className="nothing__title">Упс, здесь еще ничего нет!</p>
              <button className="nothing__button" onClick={() => navigate('/')}>
                Поиск вакансий
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;

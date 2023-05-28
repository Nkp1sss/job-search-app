import './Vacancy.scss';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Text } from '@mantine/core';

import { VacancyType } from '../../../types';

import { addVacancy, removeVacancy } from '../../../redux/slices/savedVacancies';

import { isContainVacancy } from './utils';

import location from '../../../assets/images/location.svg';
import unfilledStar from '../../../assets/images/unfilled-star.png';
import filledStar from '../../../assets/images/filled-star.png';

function Vacancy(vacancyProps: VacancyType) {
  const { profession, payment_from, payment_to, type_of_work, town, id } = vacancyProps;

  const savedVacancies = useAppSelector((store) => store.savedVacancies.vacancies);
  const [isSaved, setIsSaved] = useState(
    savedVacancies.find((vacancy: VacancyType) => vacancy.id === id) === undefined ? false : true
  );

  const salaryString =
    payment_from !== 0 && payment_to !== 0
      ? `з/п ${payment_from} - ${payment_to} rub`
      : payment_from !== 0 && payment_to === 0
      ? `з/п ${payment_from} rub`
      : payment_from === 0 && payment_to !== 0
      ? `з/п до ${payment_to} rub`
      : 'з/п по договорённости';

  const navigate = useNavigate();
  const currentLocation = useLocation();

  const onVacancyClick = () => {
    if (currentLocation.pathname !== '/vacancy') navigate('/vacancy', { state: vacancyProps });
  };

  const dispatch = useAppDispatch();

  const changeDataInLocalStorage = (vacancies: VacancyType[], data: VacancyType): void => {
    if (vacancies) {
      if (isContainVacancy(vacancies, data.id)) {
        dispatch(removeVacancy(data.id));
      } else {
        dispatch(addVacancy(data));
      }
    }
  };

  const mediaQuery = useMediaQuery('(max-width: 520px)');

  return (
    <div className="vacancy" data-vacancy_id={id} onClick={onVacancyClick}>
      <Text className="vacancy__name" ff={'inherit'} fw={600} size={20}>
        {profession}
      </Text>
      <div className="vacancy__description">
        <span className="vacancy__description_bold">{salaryString}</span>
        {!mediaQuery && <>&nbsp; • &nbsp;</>}
        {type_of_work && type_of_work.title}
      </div>
      <div className="vacancy__location">
        <img src={location} alt="location icon" />
        <div className="vacancy__location-name">{town && town.title}</div>
      </div>
      <img
        className="star"
        src={isSaved ? filledStar : unfilledStar}
        alt="unfilled star"
        onClick={(event: React.MouseEvent<HTMLImageElement>) => {
          setIsSaved(!isSaved);
          changeDataInLocalStorage(savedVacancies, vacancyProps);

          event.stopPropagation();
        }}
      />
    </div>
  );
}

export default Vacancy;

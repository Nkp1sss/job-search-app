import './Vacancy.scss';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Text } from '@mantine/core';

import { VacancyType } from '../../../types';

import { changeDataInLocalStorage } from './utils';

import location from '../../../assets/images/location.svg';
import unfilledStar from '../../../assets/images/unfilled-star.png';
import filledStar from '../../../assets/images/filled-star.png';

function Vacancy(vacancyProps: VacancyType) {
  const { profession, payment_from, payment_to, type_of_work, town, id } = vacancyProps;
  const [isSaved, setIsSaved] = useState(false);

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

  return (
    <div className="vacancy" data-vacancy_id={id} onClick={onVacancyClick}>
      <Text className="vacancy__name" ff={'inherit'} fw={600} size={20}>
        {profession}
      </Text>
      <div className="vacancy__description">
        <span className="vacancy__description_bold">{salaryString}</span> &nbsp; • &nbsp;
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
          changeDataInLocalStorage(vacancyProps);

          event.stopPropagation();
        }}
      />
    </div>
  );
}

export default Vacancy;

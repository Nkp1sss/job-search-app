import './Vacancy.scss';
import { useState } from 'react';
import { Text } from '@mantine/core';
import location from '../../../assets/images/location.svg';
import unfilledStar from '../../../assets/images/unfilled-star.png';
import filledStar from '../../../assets/images/filled-star.png';
import { VacancyType } from '../../../types';

function Vacancy({ profession, payment_from, payment_to, type_of_work, town }: VacancyType) {
  const salaryString =
    payment_from !== 0 && payment_to !== 0
      ? `з/п ${payment_from} - ${payment_to} rub`
      : payment_from !== 0 && payment_to === 0
      ? `з/п ${payment_from} rub`
      : payment_from === 0 && payment_to !== 0
      ? `з/п до ${payment_to} rub`
      : 'з/п по договорённости';

  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="vacancy">
      <Text className="vacancy__name" ff={'inherit'} fw={600} size={20}>
        {profession}
      </Text>
      <div className="vacancy__description">
        <span className="vacancy__description_bold">{salaryString}</span> &nbsp; • &nbsp;
        {type_of_work.title}
      </div>
      <div className="vacancy__location">
        <img src={location} alt="location icon" />
        <div className="vacancy__location-name">{town.title}</div>
      </div>
      <img
        className="star"
        src={isSaved ? filledStar : unfilledStar}
        alt="unfilled star"
        onClick={() => setIsSaved(!isSaved)}
      />
    </div>
  );
}

export default Vacancy;

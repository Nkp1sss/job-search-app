import './VacancyDescription.scss';

import { useLocation } from 'react-router-dom';
import { TypographyStylesProvider } from '@mantine/core';

import Vacancy from '../../components/Vacancies/Vacancy/Vacancy';

function VacancyDescription() {
  const location = useLocation();

  const vacancyProps = location.state;
  const { vacancyRichText } = vacancyProps;

  return (
    <div className="vacancy-description">
      <div className="container">
        <Vacancy {...vacancyProps} />
        <div className="vacancy-requirements">
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: vacancyRichText }} />
          </TypographyStylesProvider>
        </div>
      </div>
    </div>
  );
}

export default VacancyDescription;

import { VacancyType } from '../../../types';

const getDataFromLocalStorage = (): VacancyType[] => {
  const vacanciesString = localStorage.getItem('savedVacancies');
  if (!vacanciesString) return [];
  else return JSON.parse(vacanciesString as string);
};
const changeDataInLocalStorage = (data: VacancyType): void => {
  let vacancies = getDataFromLocalStorage();
  if (vacancies) {
    if (isContainVacancy(vacancies, data.id)) {
      vacancies = removeVacancyById(vacancies, data.id);
    } else {
      vacancies.push(data);
    }
  }

  localStorage.setItem('savedVacancies', JSON.stringify(vacancies));
};
const isContainVacancy = (array: VacancyType[], id: number) =>
  array.find((vacancy) => vacancy.id === id) !== undefined;

const removeVacancyById = (array: VacancyType[], id: number) =>
  array.filter((vacancy) => vacancy.id !== id);

export { changeDataInLocalStorage };

import { VacancyType } from '../../../types';

const getDataFromLocalStorage = (): VacancyType[] => {
  const vacanciesString = localStorage.getItem('savedVacancies');
  if (!vacanciesString) return [];
  else return JSON.parse(vacanciesString as string);
};

const isContainVacancy = (array: VacancyType[], id: number) =>
  array.find((vacancy) => vacancy.id === id) !== undefined;

const removeVacancyById = (array: VacancyType[], id: number) =>
  array.filter((vacancy) => vacancy.id !== id);

export { getDataFromLocalStorage, isContainVacancy, removeVacancyById };

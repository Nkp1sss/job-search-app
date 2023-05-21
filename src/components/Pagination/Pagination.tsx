import './Pagination.scss';
import { Pagination as MantinePagination } from '@mantine/core';
import { COUNT_VACANCY_OF_PAGE } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changePage } from '../../redux/slices/options';

function Pagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((store) => store.options.page);
  const maxVacancies = useAppSelector((store) => store.vacancies.total);

  return (
    <div className="pagination-container">
      <MantinePagination
        total={maxVacancies / COUNT_VACANCY_OF_PAGE}
        value={currentPage}
        onChange={(newPage) => dispatch(changePage(newPage))}
      />
    </div>
  );
}

export default Pagination;

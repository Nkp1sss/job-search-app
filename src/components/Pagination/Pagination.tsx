import './Pagination.scss';
import { Pagination as MantinePagination } from '@mantine/core';
import { MAX_VACANCIES, COUNT_VACANCY_OF_PAGE } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changePage } from '../../redux/slices/pagination';

function Pagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((store) => store.pagination.page);

  return (
    <div className="pagination-container">
      <MantinePagination
        total={MAX_VACANCIES / COUNT_VACANCY_OF_PAGE}
        value={currentPage}
        onChange={(newPage) => dispatch(changePage(newPage))}
      />
    </div>
  );
}

export default Pagination;

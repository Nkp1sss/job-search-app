import './SearchBar.scss';

import { useMediaQuery } from '@mantine/hooks';
import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSearchValue } from '../../redux/slices/options';
import { changeInputValue } from '../../redux/slices/inputs';
import { changeCatalogKey, changePaymentFrom, changePaymentTo } from '../../redux/slices/options';

function SearchBar() {
  const inputValue = useAppSelector((store) => store.inputs.searchInputValue);
  const catalogValue = useAppSelector((store) => store.inputs.catalogKey);
  const valueFrom = useAppSelector((store) => store.inputs.payment_from);
  const valueTo = useAppSelector((store) => store.inputs.payment_to);
  const dispatch = useAppDispatch();

  const onSearchBtnClick = () => {
    dispatch(changeSearchValue(inputValue));

    if (catalogValue) {
      dispatch(changeCatalogKey(catalogValue));
    }
    if (valueFrom) {
      dispatch(changePaymentFrom(valueFrom));
    }
    if (valueTo) {
      dispatch(changePaymentTo(valueTo));
    }
  };

  const searchbarMediaQuery = useMediaQuery('(max-width: 360px)');

  return (
    <div className="searchbar">
      <TextInput
        placeholder={searchbarMediaQuery ? 'Название вакансии' : 'Введите название вакансии'}
        className="searchbar-input"
        icon={<IconSearch />}
        radius={'md'}
        value={inputValue}
        onChange={(e) => dispatch(changeInputValue(e.target.value))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch(changeSearchValue(inputValue));
          }
        }}
      />
      <Button radius={'md'} color="indigo" onClick={onSearchBtnClick}>
        Поиск
      </Button>
    </div>
  );
}

export default SearchBar;
